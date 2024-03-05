import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

export default  function Nav ({showMenu}) {

  const locale = useLocale()
    
  return (
    <>
            {
              showMenu && (
                <div className="w-4/6 sm:w-1/2  h-3/4 shadow-2xl p-6 py-6 absolute bg-white rounded ml-4 md:hidden z-50 fixed">
                Chucholeo Projects
                <nav>
                  <ul>
                  <li className="my-4 mt-16">
                    <Link href={`/${locale}/cv`}>
                      <div className="w-full">MakeCv</div>
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link href={`/${locale}/reportToll`}>
                      <div className="w-full">Report Toll</div>
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link href={`/${locale}/listmarket`}>
                      <div className="w-full">SuperMarket List</div>
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link href={`/${locale}/biogame`}>
                      <div className="w-full">Mini game</div>
                    </Link>
                  </li>
                  </ul>
                </nav>
              </div>
              )
            }
    </>
            
            
  )
         
}