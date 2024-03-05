import ButtonForm from "./buttonForm"
import { useTranslations } from "next-intl"

export default function Form3 ({experiences, t, handleChange, handleTour, removingIndex, handleBackForm, handleNextForm, handleAddExperience, handleRemoveExperience}) {
  
    return (
        <form  className="flex flex-col p-6 experience">
              
              <ButtonForm accion={handleTour} tipo='help' />
                {
                  experiences.map((obj, index)=>(
                      
                  <div key={index}
                    className={`transition-opacity duration-300 ease-in-out ${
                    removingIndex === index ? 'opacity-0' : 'opacity-100'
                  }`}
                  >
                    <div className="flex flex-col my-2 company">
                        <div className="font-bold">{`${obj.job} ${index + 1}`}</div>
                          <label className="mb-1 font-semibold">
                          {t('form3.company')}
                          </label>
                          <input
                            className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400"
                            type="text"
                            value={obj.company}
                            placeholder="SmartReport Google Platzi"
                            onChange={(e)=>handleChange(index, 'company', e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col my-2 position">
                          <label className="mb-1 font-semibold">
                          {t('form3.position')}
                          </label>
                          <input
                            className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400"
                            type="text"
                            value={obj.puesto}
                            placeholder="Frontend web developer"
                            onChange={(e)=>handleChange(index, 'puesto', e.target.value)}
                          />
                    </div>

                    <div className="flex flex-col my-2">
                          <label className="mb-1 font-semibold">
                          {t('form3.dateIni')}
                          </label>
                          <input 
                            className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400"
                            type="text"
                            value={obj.dateIni}
                            placeholder="01/01/2024"
                            onChange={(e)=>handleChange(index, 'dateIni', e.target.value)}
                          />
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="mb-1 font-semibold">
                        {t('form3.dateEnd')}
                        </label>
                        <input 
                            className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400 "
                            type="text"
                            value={obj.dateEnd}
                            placeholder="23/01/2024"
                            onChange={(e)=>handleChange(index, 'dateEnd', e.target.value)}
                        />
                        <div className='font-semibold text-xs'>{t('form3.subDateEnd')}</div>
                    </div>
                    <div className="flex flex-col my-2">
                          <label className="mb-1 font-semibold">
                          {t('form3.description')}
                          </label>
                          <textarea 
                              className="rounded-md px-2 py-1 border resize-y shadow appearance-none focus:outline-blue-400 min-h-36"
                              type="text"
                              placeholder={t('form3.placeDescription')}
                              value={obj.detail}
                              onChange={(e)=>handleChange(index, 'detail', e.target.value)}
                          />
                    </div>
                    {index > 0 && (
                            <button type="button" className="w-full bg-red-400 rounded-md p-1 font-medium" onClick={() => handleRemoveExperience(index)}>{t('form3.delete')} {t('form3.experience')}</button>
                            )}
                  </div>    
                  ))
                } 
                  <div className="mt-6 ">
                    <button  className="w-full bg-cyan-600 rounded-md p-1 font-medium disabled:opacity-75 " disabled={experiences.length === 3 ? true : false} onClick={handleAddExperience}>{t('form3.new')} {t('form3.experience')}</button>
                  </div>

            
                  <div className="mt-6 flex justify-between">
                    <ButtonForm accion={()=>handleBackForm(2)} tipo='back'/>
                    <ButtonForm accion={()=>handleNextForm(4)} tipo='next'/>
                      
                  </div>
                  
              </form>
    )
}