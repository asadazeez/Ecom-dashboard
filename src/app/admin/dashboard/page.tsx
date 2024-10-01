import React from "react";

import Featured from "../../../components/DataStats/Featured";
import Categories from "../../../components/DataStats/Categories";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

const  ECommerce: React.FC = () => {
  return (
   
    <>
    <DefaultLayout>
      <Featured />
      <Categories />
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        {/* <ChartOne />
        <ChartTwo /> */}
        {/* <ChartThree /> */}
        {/* <MapOne /> */}
        <div className="col-span-12 xl:col-span-8">{/* <TableOne /> */}</div>
        {/* <ChatCard /> */}
      </div>
      </DefaultLayout>
    </>
      
  );
};

export default ECommerce;
