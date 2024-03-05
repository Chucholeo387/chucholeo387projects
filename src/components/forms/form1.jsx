
import React from "react";
import ButtonForm from "./buttonForm";
import { useTranslations } from "next-intl";


export default function Form1 ({fullName, setFullName,position, setPosition, perfil, setPerfil,handleNextForm, cancel, handleTour, t }) {
    

    // form 1
    return (
        <form  className="flex flex-col p-6">
        <div className="flex flex-col my-2 fullName">
            <ButtonForm accion={handleTour} tipo='help' />
            <div className="font-bold">{t('form1.profile')}</div>
            <label className="mb-1 font-semibold">
                {t('form1.fullName')}
            </label>
            <input
                className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400"
                type="text"
                value={fullName}
                placeholder="Jesus Lugo"
                onChange={(e)=>setFullName(e.target.value)}
            />
        </div>
        <div className="flex flex-col my-2 position">
            <label className="mb-1 font-semibold">
            {t('form1.position')}
            </label>
            <input
                className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400"
                type="text"
                value={position}
                placeholder="Frontend web developer"
                onChange={(e)=>setPosition(e.target.value)}
            />
        </div>
        <div className="flex flex-col my-2 font-semibold description">
            <label className="mb-1">
            {t('form1.description')}
            </label>
            <textarea
                className="rounded-md px-2 py-1 border resize-y shadow appearance-none focus:outline-blue-400 min-h-36"
                type="text"
                placeholder={t('form1.placeDescription')}
                value={perfil}
                onChange={(e)=>setPerfil(e.target.value)}
            />
        </div>
        <div className="mt-6 flex justify-between">                   
              <ButtonForm accion={cancel} tipo='cancel'/>
              <ButtonForm accion={()=>handleNextForm(2)} tipo='next'/>
        </div>
        
    </form>
    )
}