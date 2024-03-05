'use client'
import React from "react";
import { useTranslations } from "next-intl";

export default function ButtonForm ({accion, tipo}) {

    const t = useTranslations('MakeCv')

    return (
        <>
            { tipo === 'save' ? (
                <button className="w-20 bg-cyan-600 rounded-md p-1 font-medium self-end text-white hover:bg-sky-500"
                type="button" onClick={accion}>{t(`form7.${tipo}`)}</button>
                
            ):(
                <button className="w-20 bg-cyan-600 rounded-md p-1 font-medium self-end text-white hover:bg-sky-500"
                type="button" onClick={accion}>{t(`form1.${tipo}`)}</button>
            )}
        </>
    )
}