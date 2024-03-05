'use client'

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { useState, useTransition } from "react"
import Nav from "./nav"

export default function Toolbars () {
    const [showMobileMenu, setshowMobileMenu] = useState(false)

    const [isPending, startTransition] = useTransition()
    const path = usePathname()
    const router = useRouter()
    const locale = useLocale()

    const titlePage = {
        "/en" : "Jesus Leonardo Lugo",
        "/en/cv" : "Make CV",
        "/en/cv/makecv" : "Make CV",
        "/es" : "Jesus Leonardo Lugo",
        "/es/cv" : "Make CV",
        "/es/cv/makecv" : "Make CV",
        "/br" : "Jesus Leonardo Lugo",
        "/br/cv" : "Make CV",
        "/br/cv/makecv" : "Make CV",
        "/en/reportToll" : "Toll Report",
        "/en/listmarket" : "Supermarket List",
        "/en/biogame" : "Bioanalyst"
      }

    // manejo del menu mobile 
    const handleMobileMenu = () =>{
        setshowMobileMenu(!showMobileMenu)
    }
      
    // cambiar idioma
    const changeLanguage = (e) => {
        console.log(e)
        const nextLocale = e.target.value
        const newPath = path.replace(locale , nextLocale)
      
        startTransition(()=>{
            router.replace(newPath)
        })
        
    }

    

    return (
        <>
            <div className="h-14 m-4 shadow-2xl flex justify-between items-center sticky top-0 bg-white">
                    
                    <Image alt="menu" src="/menu.svg" width={24} height={24} className="mx-4 block sm:hidden " onClick={handleMobileMenu} />
                <div className="p-4 font-bold hidden sm:block">{titlePage[path]}</div>
                <div className="p-4 flex">
                    <Image alt="translate" src="/translate-black.svg" width={24} height={24} className="mx-2"/>
                    <select defaultValue={locale} name="selectOption" disabled={isPending} onChange={changeLanguage}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>   
                        <option value="br">Portugues</option>   
                    </select> 
                    <ul className="flex">
                        <li className="mx-4">
                            <a href="https://www.instagram.com/chucholeo387/?hl=es-la" target="_blanck">
                            <Image alt="instagram_chucholeo387" src="/instagram_chucholeo387.svg" width={24} height={24}/>
                            </a>
                        </li>
                        <li className="mx-4">
                            <a href="https://github.com/Chucholeo387" target="_blanck">
                            <Image alt="github_chucholeo387" src="/github_logo_chucholeo387.svg" width={24} height={24}/>
                            </a>
                        </li >
                        <li className="mx-4">
                            <a href="https://www.linkedin.com/in/jesus-leonardo-lugo-rodriguez/" target="_blanck">
                            <Image alt="linkedin_chucholeo387" src="/linkedin_jesus_leonardo_lugo_rodriguez.svg" width={26} height={24}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Nav showMenu={showMobileMenu}/>
        </>
    )
    
}