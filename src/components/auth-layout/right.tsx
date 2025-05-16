import Logo from "@/components/own/logo/logo";
import React from "react";
import "@/components/style.css";

export default function AuthRight({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex items-start justify-center flex-col h-full w-full md:w-1/2 lg:w-2/5 bg-orange-500 relative overflow-hidden">
      <div className="p-5 block md:hidden">
        <Logo />
      </div>
      <div className="container">
        <div className="item-wrapper item-wrapper1">
          <div className="item item--sphere item--color1 drop-shadow-[0_45px_45px_#7f5fff]"></div>
        </div>
        <div className="item-wrapper item-wrapper2">
          <div className="item item--sphere item--color2 drop-shadow-[0_45px_45px_#fa709a]"></div>
        </div>
        <div className="item-wrapper item-wrapper3">
          <div className="item item--sphere item--color3 drop-shadow-[0_45px_45px_#ff9673]"></div>
        </div>
        <div className="item-wrapper item-wrapper4">
          <div className="item item--sphere item--color4 drop-shadow-[0_45px_45px_#fec440]"></div>
        </div>
      </div>
      <div className="flex justify-center xs:items-center h-full w-full relative z-20">
        {children}
      </div>
    </div>
  );
}
