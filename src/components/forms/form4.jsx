
import { useTranslations } from "next-intl";
import ButtonForm from "./buttonForm";

export default function Form4 ({educations, removingEducation, handleChangeEducation, handleAddEducation, handleRemoveEducation, handleBackForm, handleNextForm, handleTour, t } ) {

    
    return (
        <form  className="flex flex-col p-6 education">
              
              <ButtonForm accion={handleTour} tipo='help' />
              {
                  educations.map((obj, index)=>(
                      
                  <div key={index}
                    className={`transition-opacity duration-300 ease-in-out ${
                    removingEducation === index ? 'opacity-0' : 'opacity-100'
                  }`}
                  >
                    <div className="flex flex-col my-2 company">
                        <div className="font-bold">{`${t('form4.education')} ${index + 1}`}</div>
                          <label className="mb-1 font-semibold">
                          {t('form4.schoolUniversity')}
                          </label>
                          <input
                            className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400"
                            type="text"
                            value={obj.localStudy}
                            placeholder="Usp Harvard Yale"
                            onChange={(e)=>handleChangeEducation(index, 'localStudy', e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col my-2 position">
                          <label className="mb-1 font-semibold">
                          {t('form4.bachelor')}
                          </label>
                          <input
                            className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400"
                            type="text"
                            value={obj.bachelor}
                            placeholder="Biomedicine"
                            onChange={(e)=>handleChangeEducation(index, 'bachelor', e.target.value)}
                          />
                    </div>

                    <div className="flex flex-col my-2">
                          <label className="mb-1 font-semibold">
                             {t('form4.dateIni')}
                          </label>
                          <input 
                            className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400"
                            type="text"
                            value={obj.dateIni}
                            placeholder="01/01/2024"
                            onChange={(e)=>handleChangeEducation(index, 'dateIni', e.target.value)}
                          />
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="mb-1 font-semibold">
                            {t('form4.dateEnd')}
                        </label>
                        <input 
                            className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400 "
                            type="text"
                            value={obj.dateEnd}
                            placeholder="23/01/2024"
                            onChange={(e)=>handleChangeEducation(index, 'dateEnd', e.target.value)}
                        />
                        <div className='font-semibold text-xs'>{t('form4.subDateEnd')}</div>
                    </div>
                    {index > 0 && (
                            <button type="button" className="w-full bg-red-400 rounded-md p-1 font-medium" onClick={() => handleRemoveEducation(index)}>{t('form4.delete')} {t('form4.education')}</button>
                            )}
                  </div>    
                  ))
                } 
                  <div className="mt-6 ">
                    <button  className="w-full bg-cyan-600 rounded-md p-1 font-medium disabled:opacity-75 hover:bg-sky-500" disabled={educations.length === 3 ? true : false} onClick={handleAddEducation}>{t('form4.new')} {t('form4.education')}</button>
                  </div>

                  <div className="mt-6 flex justify-between"> 
                    <ButtonForm accion={()=>handleBackForm(3)} tipo='back'/>
                    <ButtonForm accion={()=>handleNextForm(5)} tipo='next'/>
                  </div>
                  
              </form>
    )
}