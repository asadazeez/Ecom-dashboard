"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import IconSvg from "../../../public/images/logo/IconLogo";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MAIN MENU",
    menuItems: [
      {
        icon: (
          <svg
            className="-ml-1 fill-current"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M20.25 9C20.25 8.58579 19.9142 8.25 19.5 8.25C19.0858 8.25 18.75 8.58579 18.75 9L20.25 9ZM11.5 18.25C11.0858 18.25 10.75 18.5858 10.75 19C10.75 19.4142 11.0858 19.75 11.5 19.75V18.25ZM18.75 9C18.75 9.41421 19.0858 9.75 19.5 9.75C19.9142 9.75 20.25 9.41421 20.25 9L18.75 9ZM11.5 4.25C11.0858 4.25 10.75 4.58579 10.75 5C10.75 5.41421 11.0858 5.75 11.5 5.75V4.25ZM19.5 9.75C19.9142 9.75 20.25 9.41421 20.25 9C20.25 8.58579 19.9142 8.25 19.5 8.25V9.75ZM11.5 8.25C11.0858 8.25 10.75 8.58579 10.75 9C10.75 9.41421 11.0858 9.75 11.5 9.75V8.25ZM6.25 12C6.25 11.5858 5.91421 11.25 5.5 11.25C5.08579 11.25 4.75 11.5858 4.75 12H6.25ZM11.5 19.75C11.9142 19.75 12.25 19.4142 12.25 19C12.25 18.5858 11.9142 18.25 11.5 18.25V19.75ZM4.75 12C4.75 12.4142 5.08579 12.75 5.5 12.75C5.91421 12.75 6.25 12.4142 6.25 12H4.75ZM11.5 5.75C11.9142 5.75 12.25 5.41421 12.25 5C12.25 4.58579 11.9142 4.25 11.5 4.25V5.75ZM5.5 11.25C5.08579 11.25 4.75 11.5858 4.75 12C4.75 12.4142 5.08579 12.75 5.5 12.75L5.5 11.25ZM11.5 12.75C11.9142 12.75 12.25 12.4142 12.25 12C12.25 11.5858 11.9142 11.25 11.5 11.25V12.75ZM12.25 12C12.25 11.5858 11.9142 11.25 11.5 11.25C11.0858 11.25 10.75 11.5858 10.75 12H12.25ZM10.75 19C10.75 19.4142 11.0858 19.75 11.5 19.75C11.9142 19.75 12.25 19.4142 12.25 19H10.75ZM10.75 12C10.75 12.4142 11.0858 12.75 11.5 12.75C11.9142 12.75 12.25 12.4142 12.25 12H10.75ZM12.25 9C12.25 8.58579 11.9142 8.25 11.5 8.25C11.0858 8.25 10.75 8.58579 10.75 9H12.25ZM12.25 5C12.25 4.58579 11.9142 4.25 11.5 4.25C11.0858 4.25 10.75 4.58579 10.75 5H12.25ZM10.75 9C10.75 9.41421 11.0858 9.75 11.5 9.75C11.9142 9.75 12.25 9.41421 12.25 9H10.75ZM18.75 9V15H20.25V9L18.75 9ZM18.75 15C18.75 16.7949 17.2949 18.25 15.5 18.25V19.75C18.1234 19.75 20.25 17.6234 20.25 15H18.75ZM15.5 18.25H11.5V19.75H15.5V18.25ZM20.25 9C20.25 6.37665 18.1234 4.25 15.5 4.25L15.5 5.75C17.2949 5.75 18.75 7.20507 18.75 9L20.25 9ZM15.5 4.25H11.5V5.75H15.5L15.5 4.25ZM19.5 8.25H11.5V9.75H19.5V8.25ZM4.75 12V15H6.25V12H4.75ZM4.75 15C4.75 17.6234 6.87665 19.75 9.5 19.75V18.25C7.70507 18.25 6.25 16.7949 6.25 15H4.75ZM9.5 19.75H11.5V18.25H9.5V19.75ZM6.25 12L6.25 9H4.75L4.75 12H6.25ZM6.25 9C6.25 7.20507 7.70507 5.75 9.5 5.75V4.25C6.87665 4.25 4.75 6.37665 4.75 9H6.25ZM9.5 5.75H11.5V4.25H9.5V5.75ZM5.5 12.75H11.5V11.25H5.5L5.5 12.75ZM10.75 12V19H12.25V12H10.75ZM12.25 12V9H10.75V12H12.25ZM10.75 5V9H12.25V5H10.75Z"
                fill=""
              ></path>{" "}
            </g>
          </svg>
        ),
        label: "DASHBOARD",
        route: "/admin/dashboard",
      },
      {
        icon: (
          <svg
            className="fill-current"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 1.75C3.87665 1.75 1.75 3.87665 1.75 6.5C1.75 9.12335 3.87665 11.25 6.5 11.25C9.12335 11.25 11.25 9.12335 11.25 6.5C11.25 3.87665 9.12335 1.75 6.5 1.75ZM3.25 6.5C3.25 4.70507 4.70507 3.25 6.5 3.25C8.29493 3.25 9.75 4.70507 9.75 6.5C9.75 8.29493 8.29493 9.75 6.5 9.75C4.70507 9.75 3.25 8.29493 3.25 6.5Z"
              fill=""
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5 12.75C14.8766 12.75 12.75 14.8766 12.75 17.5C12.75 20.1234 14.8766 22.25 17.5 22.25C20.1234 22.25 22.25 20.1234 22.25 17.5C22.25 14.8766 20.1234 12.75 17.5 12.75ZM14.25 17.5C14.25 15.7051 15.7051 14.25 17.5 14.25C19.2949 14.25 20.75 15.7051 20.75 17.5C20.75 19.2949 19.2949 20.75 17.5 20.75C15.7051 20.75 14.25 19.2949 14.25 17.5Z"
              fill=""
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.75 6.5C12.75 3.87665 14.8766 1.75 17.5 1.75C20.1234 1.75 22.25 3.87665 22.25 6.5C22.25 9.12335 20.1234 11.25 17.5 11.25C14.8766 11.25 12.75 9.12335 12.75 6.5ZM17.5 3.25C15.7051 3.25 14.25 4.70507 14.25 6.5C14.25 8.29493 15.7051 9.75 17.5 9.75C19.2949 9.75 20.75 8.29493 20.75 6.5C20.75 4.70507 19.2949 3.25 17.5 3.25Z"
              fill=""
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 12.75C3.87665 12.75 1.75 14.8766 1.75 17.5C1.75 20.1234 3.87665 22.25 6.5 22.25C9.12335 22.25 11.25 20.1234 11.25 17.5C11.25 14.8766 9.12335 12.75 6.5 12.75ZM3.25 17.5C3.25 15.7051 4.70507 14.25 6.5 14.25C8.29493 14.25 9.75 15.7051 9.75 17.5C9.75 19.2949 8.29493 20.75 6.5 20.75C4.70507 20.75 3.25 19.2949 3.25 17.5Z"
              fill=""
            />
          </svg>
        ),
        label: "CATEGORIES",
        route: "/admin/categories",
      },
      {
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M48 0H0V48H48V0Z"
                fill="none"
                fill-opacity="0.01"
              ></path>{" "}
              <path
                d="M44 14L24 4L4 14V34L24 44L44 34V14Z"
                stroke="currentColor"
                stroke-width="3"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M4 14L24 24"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M24 44V24"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M44 14L24 24"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M34 9L14 19"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        ),
        label: "PRODUCTS",
        route: "/admin/products",
      },
      {
        icon: (
          <svg
            className="fill-current"
            width="22"
            height="22"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                id="_05.Tag"
                data-name="05.Tag"
                d="M44.6,23.775l-22.8,22.8a.854.854,0,0,1-.095.144,1.05,1.05,0,0,1-1.43,0,.919.919,0,0,1-.095-.144L3.425,29.81a.9.9,0,0,1-.144-.095,1.05,1.05,0,0,1,0-1.43.968.968,0,0,1,.144-.095l22.8-22.8A.979.979,0,0,1,27,5h4.056a5.711,5.711,0,0,1,1.67-3.683l.016.018A1.041,1.041,0,0,1,33.5,1a1.109,1.109,0,0,1,1.072,1.143,1.143,1.143,0,0,1-.441.9A3.27,3.27,0,0,0,33.193,5H38a.977.977,0,0,1,.775.395l5.83,5.83A.984.984,0,0,1,45,12V23A.98.98,0,0,1,44.6,23.775ZM34.254,16.666A1.036,1.036,0,0,1,33.5,17a1.108,1.108,0,0,1-1.07-1.143,1.146,1.146,0,0,1,.441-.9,2.9,2.9,0,0,0,.617-.883,2.006,2.006,0,1,0,2.067.681A3.682,3.682,0,0,1,34.254,16.666ZM43,12.381,37.615,7H33.4a2.964,2.964,0,0,0,.725,1.1h0a.98.98,0,0,1,.127.092l.018-.018A5.817,5.817,0,0,1,36,12.428c0,.042-.01.079-.012.12a3.993,3.993,0,1,1-2.168-.53A3.34,3.34,0,0,0,32.868,9.9a1.163,1.163,0,0,1-.129-.092l-.016.018A5.537,5.537,0,0,1,31.17,7H27.377l-22,22L21,44.619l22-22V12.381Zm-28.714,14.9a.977.977,0,0,1,1.381,0l7.049,7.049a.977.977,0,0,1-1.381,1.381l-7.049-7.049A.977.977,0,0,1,14.282,27.285Zm4-4a.977.977,0,0,1,1.381,0l7.048,7.049a.977.977,0,1,1-1.381,1.381l-7.048-7.049A.977.977,0,0,1,18.282,23.285Z"
                transform="translate(-3 -1)"
                fill-rule="evenodd"
              ></path>{" "}
            </g>
          </svg>
        ),
        label: "BRANDS",
        route: "/admin/brands",
      },
      {
        icon: (
          <svg
            className="fill-current"
            fill="none"
            height="22"
            width="22"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 297 297"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M201.578,207.587c0,6.683,5.397,12.168,12.08,12.168h71.241c3.905,0,7.572-1.953,9.844-5.131 c2.272-3.177,2.87-7.289,1.606-10.985l-9.738-28.52l9.714-27.842c1.291-3.701,0.709-7.799-1.561-10.994 c-2.27-3.196-5.946-5.095-9.865-5.095h-10.468c-1.699,5.318-3.398,10.749-5.068,16.089l-0.033,0.105 c-3.453,11.035-7.023,22.446-10.597,32.884c-3.753,10.961-14.057,18.326-25.639,18.326c-2.989,0-5.944-0.493-8.778-1.465 c-7.467-2.557-15.096-4.723-22.739-6.507V207.587z"></path>{" "}
                <path d="M233.096,183.591c5.03,0,9.727-3.161,11.448-8.185c3.52-10.281,7.07-21.631,10.505-32.608 c3.385-10.822,6.886-22.014,10.299-31.988c1.04-3.037,0.831-6.362-0.58-9.243c-1.413-2.883-3.911-5.086-6.947-6.126 c-35.265-12.073-72.046-18.196-109.32-18.196c-37.274,0.001-74.055,6.123-109.319,18.196c-3.037,1.04-5.536,3.243-6.948,6.126 c-1.412,2.881-1.62,6.206-0.58,9.243c3.413,9.974,6.915,21.166,10.3,31.988c3.434,10.978,6.984,22.327,10.504,32.608 c1.72,5.025,6.419,8.185,11.447,8.185c1.301,0,2.622-0.211,3.921-0.656c26.025-8.91,53.168-13.427,80.676-13.427 c27.508,0,54.651,4.518,80.676,13.427C230.474,183.379,231.796,183.591,233.096,183.591z"></path>{" "}
                <path d="M94.512,190.857c-7.307,1.739-14.681,3.822-21.826,6.268c-2.839,0.973-5.794,1.466-8.782,1.466 c-11.584,0-21.888-7.365-25.638-18.326c-3.584-10.468-7.164-21.913-10.641-33.028c-1.667-5.329-3.362-10.747-5.057-16.05H12.101 c-3.92,0-7.596,1.9-9.866,5.095c-2.27,3.195-2.851,7.292-1.56,10.994l9.713,27.843l-9.738,28.485 c-1.264,3.696-0.665,7.843,1.606,11.02c2.272,3.178,5.938,5.131,9.845,5.131h70.309c6.683,0,12.101-5.486,12.101-12.168V190.857z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        ),
        label: "BANNERS",
        route: "/admin/banners",
      },
      {
        icon: (
          <svg
            viewBox="0 0 24 24"
            height={22}
            width={22}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <rect
                x="5"
                y="4"
                width="14"
                height="17"
                rx="2"
                fill="none"
                fill-opacity="0.24"
                stroke="currentColor"
                stroke-width="1.2"
              ></rect>{" "}
              <path
                d="M9 9H15"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M9 13H15"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M9 17H13"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
              ></path>{" "}
            </g>
          </svg>
        ),
        label: "ORDERS",
        route: "/admin/orders",
      },
    ],
  },

  
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="xl:6 flex items-center justify-center px-6 lg:py-3">
          <Link href="/admin/dashboard/">
            {/* <Image
              width={0}
              height={0}
              src={"/images/logo/new.svg"}
              alt="Logo"
              priority
             
              style={{ width: "130px", height: "130px" }}
            /> */}
            <IconSvg className="  flex size-30 w-full justify-center text-black dark:text-white" />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-1 px-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-5 text-sm font-medium text-dark-4 dark:text-dark-6">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-2">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
