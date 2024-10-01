"use client";
import React, { useState } from "react";

import InputGroup from "../FormElements/InputGroup";
import { z } from "zod";
import { adminApi } from "@/api/adminApi";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Schema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  oldPassword: z.string().nonempty({ message: "*Required" }),
  newPassword: z.string().nonempty({ message: "*Required" }),
  confirmPassword: z
      .string()
      .min(5, { message: "Must be 5 or more characters long" }),
  })
  .superRefine(({ confirmPassword, newPassword }, ctx) => {
    if (confirmPassword !== newPassword) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

  

type TSchema = z.infer<typeof Schema>;

const ProfileBox = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSchema>({ resolver: zodResolver(Schema) });

  const submitData = async (data: any) => {
    try {
      console.log('res:++++')
      const response = await adminApi.updateUser(data);
      if (!response.data.success) {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
        window.localStorage.setItem("accessToken", response.data.accessToken);
        Cookies.set("accessToken", response.data.accessToken);
        router.push("/");
        router.refresh();
      }
    } catch (errors: any) {
      console.log(errors);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(submitData)}
        action="#"
        className="bg rounded-lg bg-white dark:bg-gray-dark p-9 py-10"
      >
        <div className="p-6.5">
          <InputGroup
            register={register("email")}
            error={errors.email?.message}
            label="Email"
            type="email"
            placeholder="Enter email address"
            customClasses="mb-4.5"
          />

          <InputGroup
            register={register("oldPassword")}
            error={errors.oldPassword?.message}
            label="Password"
            type="password"
            placeholder="Enter password"
            customClasses="mb-4.5"
          />

          <InputGroup
            register={register("newPassword")}
            error={errors.newPassword?.message}
            label="New Password"
            type="password"
            placeholder="Enter Password"
            customClasses="mb-5.5"
          />
          <InputGroup
            register={register("confirmPassword")}
            error={errors.confirmPassword?.message}
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            customClasses="mb-5.5"
          />

          <button
            type="submit"
            className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ProfileBox;
