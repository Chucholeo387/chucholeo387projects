'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLocale } from "next-intl"



export default function Menu () {
    const locale = useLocale()

    const path = usePathname()
    return (
        <nav>
        <ul>
          <li className={`transition ease-in-out delay-75  mt-10 hover:bg-cyan-600 hover:text-white rounded font-semibold
          p-2 ${path  === `/${locale}/cv` || path  === `/${locale}/cv/makecv` ?  "bg-cyan-600 text-white" : ""}`}>
            <Link href={`/${locale}/cv`}>
              <div className="w-full">MakeCv</div>
            </Link>
          </li>
          <li className={`transition ease-in-out delay-75   hover:bg-cyan-600 hover:text-white rounded font-semibold
          p-2 ${path  === `/${locale}/reportToll` ?  "bg-cyan-600 text-white" : ""}`}>
            <Link href={`/${locale}/reportToll`}>
              <div className="w-full">Report Toll</div>
            </Link>
          </li>
          <li className={`transition ease-in-out delay-75  hover:bg-cyan-600 hover:text-white rounded font-semibold
          p-2 ${path  === `/${locale}/listmarket`  ?  "bg-cyan-600 text-white" : ""}`}>
            <Link href={`/${locale}/listmarket`}>
              <div className="w-full">Supermarket list</div>
            </Link>
          </li>
          <li className={`transition ease-in-out delay-75   hover:bg-cyan-600 hover:text-white rounded font-semibold
          p-2 ${path  === `/${locale}/biogame`  ?  "bg-cyan-600 text-white" : ""}`}>
            <Link href={`/${locale}/biogame`}>
              <div className="w-full">Mini game</div>
            </Link>
          </li>
        </ul>
      </nav>
    )
}