'use client'

import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function Cv ({customName, position, cv, removeCv, editCv, wacthCv}){

    const [colorImage, setColorImage] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)

    const HandleImage = (e) => {
        if(e.type == 'mouseover'){
            setColorImage(true)
        } 
        if(e.type == 'mouseleave'){
            setColorImage(false)
        }   
    }

    const handleOptions = () =>{
        if(openDialog){
            setOpenDialog(false)
        }else{
            setOpenDialog(true)
        }
    }

    return (
        <div className="">
            
            {/* <div className="transition ease-in-out delay-75 w-40 h-48 border-2 border-gray-400 rounded shadow-lg  flex justify-center items-center flex-col text-sm text-center hover:bg-cyan-600 hover:text-white hover:-translate-y-3" onMouseOver={HandleImage} onMouseLeave={HandleImage} onClick={handleOptions}> */}
            <div className="transition ease-in-out delay-75 w-40 h-48 border-2 border-gray-400 rounded shadow-lg  flex justify-center items-center flex-col text-sm text-center hover:bg-cyan-600 hover:text-white p-2 hover:-translate-y-3" onMouseOver={HandleImage} onMouseLeave={HandleImage} >
                <Image alt="add" src={colorImage ? "/pdf-white.svg" :"/pdf.svg"} width={50} height={50}/>
                <div className="font-semibold mt-4 text-xs">{customName}</div>
                <div className="font-semibold mt-2 text-xs">{position}</div>
                <div className="flex w-full justify-around mt-4">
                        <div className="cursor-pointer"><Image alt="eliminar" width={20} height={20} src={colorImage ? "/trash-white.svg" :"/trash.svg"} onClick={()=>removeCv(cv)}/></div>
                        <div className="cursor-pointer"><Image alt="editar" width={20} height={20}  src={colorImage ? "/edit-white.svg" :"/edit.svg"} onClick={()=>editCv(cv)}/></div>
                        <div className="cursor-pointer"><Image alt="Ver" width={20} height={20}  src={colorImage ? "/eyes-white.svg" :"/eyes.svg"} onClick={()=>wacthCv(cv)}/></div>
                </div>
            </div>
        </div>   
    )
}