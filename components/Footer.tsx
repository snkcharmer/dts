import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image src="/nmp.svg" width={115} height={38} alt="Flexible" />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Lorem ipsum askldjqweo askdoif lkqjdoadf kasjd aojafl kasdoakj iasf
          </p>
        </div>
      </div>
    </footer>
  );
};
