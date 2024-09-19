"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useForm } from "react-hook-form";
import {  z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { brandApi } from "@/api/brandApi";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { serialize } from "object-to-formdata";
import SelectOne from "@/components/FormElements/SelectGroup/SelectOne";
import { bannerApi } from "@/api/bannerApi";
type Props ={
    category:any
}
const Schema = z.object({
    category:z.any(),

  imageFile: z.any(),
});
type TSchema = z.infer<typeof Schema>;
const BannerForm = ({category}:Props) => {
  const router = useRouter()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSchema>({ resolver: zodResolver(Schema) });

  const submitData = async (data:any) => {
    try{
      const formdata = serialize({...data, imageFile:data.imageFile[0]})

      const response = await bannerApi.createBanner(formdata)

      if (response.data.success) {
        
        toast.success(response.data.message)
          router.push("/tables/banner")
          router.refresh()
        }
    
      
    }catch(errors:any){
toast.error(errors.message)
 
    }
  };

  return (
    <>
      <Breadcrumb pageName="BANNER FORM" />

      <div className=" gap-9 sm:grid-cols-2">
        <form onSubmit={handleSubmit(submitData)}>
          <div className="flex flex-col gap-9">
            {/* <!-- Input Fields --> */}
            <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                <h3 className="font-medium text-dark dark:text-white">
                  ADD YOUR BANNER
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
              <SelectOne register={register('category')}
                name="Category" data={category}/>
              

               

                <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
                  <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                    <h3 className="font-medium text-dark dark:text-white">
                      File upload
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5.5 p-6.5">
                    <div>
                      <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                        Attach file
                      </label>
                      <input
                      {...register('imageFile')}
                        type="file"
                        className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-[#E2E8F0] file:px-6.5 file:py-[13px] file:text-body-sm file:font-medium file:text-dark-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
                    <button
                      type="submit"
                      className=" w-fit rounded-md bg-black px-6 py-1 mt-4 font-semibold text-white dark:bg-white dark:text-black"
                    >
                      {" "}
                      SUBMIT
                    </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BannerForm;
