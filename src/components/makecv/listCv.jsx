'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cv from "./cv";
import { useState, useEffect } from "react";
import { useRouter} from "next/navigation";
import generatePDF from "@/PDF/pdfProva";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";


export default function ListCv () {
    const router = useRouter()
    const locale = useLocale()
    const t = useTranslations('Cv')


    
    const [cvKeys, setCvKeys] = useState([])
    const [colorImage, setColorImage] = useState(false)

    const HandleImage = (e) => {
        if(e.type == 'mouseover'){
            setColorImage(true)
        } 
        if(e.type == 'mouseleave'){
            setColorImage(false)
        }   
    }

   
    useEffect(()=>{
        const listCv = JSON.parse(localStorage.getItem('listCv'))
        
        if(listCv !== null){
            setCvKeys(listCv)
        }  
    },[])

    const removeCv = (cv) =>{
        const listCv = JSON.parse(localStorage.getItem('listCv'))
        const updateList = listCv.filter((obj, index)=>{
            return index !== cv
        })
        setCvKeys(updateList)
        localStorage.setItem('listCv', JSON.stringify(updateList))
    }

    const editCv = (cv) =>{
        const listCv = JSON.parse(localStorage.getItem('listCv'))
        const selectCv = listCv.filter((obj, index)=>{
            return index === cv
        })

        localStorage.setItem('editCv', JSON.stringify(selectCv))
        
        router.push( `/${locale}/cv/makecv`)
    }

    const wacthCv = (cv) =>{
        const listCv = JSON.parse(localStorage.getItem('listCv'))
        const selectCv = listCv.filter((obj, index)=>{
            return index === cv
        })
        
        generatePDF(selectCv[0])
    }

    return (
        <div className="flex flex-wrap justify-center gap-10">
            <div className="max-w-40">
                <Link href={`/${locale}/cv/makecv`}>
                    <div className="w-40 h-48 border-2 transition ease-in-out delay-75 border-gray-400 rounded flex justify-center items-center flex-col hover:bg-cyan-600 hover:text-white hover:-translate-y-3" onMouseOver={HandleImage} onMouseLeave={HandleImage}>
                        <Image alt="add" src={colorImage ? "/plus-white.svg" : "/plus.svg"} width={50} height={50}/>
                        <div className="font-semibold">{t('titleCreate')}</div>
                    </div>
                </Link>
            </div>
            {
                cvKeys.map((obj, index) => (
                    <div key={index}>
                        <Cv
                        customName={obj.cvName}
                        position={obj.position}
                        cv={index}
                        removeCv={removeCv}
                        editCv={editCv}
                        wacthCv={wacthCv}
                        />  
                    </div>
                ))
            } 
        </div>
    )
}