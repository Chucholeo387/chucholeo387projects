

import ButtonForm from "./buttonForm";

export default function Form5 ({handleTour, removeSkill, skill, language, handleChangeLanguage, handleChangeSkill, handleNewLanguage, handleNewSkill, handleNextForm, handleRemoveSkill, handleRemoveLanguage, handleBackForm, t , removeLanguage }) {
        
    return (
        <form  className="flex flex-col p-6 ">
              
              <ButtonForm accion={handleTour} tipo='help' /> 
                <div className="font-bold">{t('form5.skills')}</div>
                 {  
                    skill.map((obj, index)=> (
                        <div key={index} className={`flex flex-col my-2 transition-opacity duration-300 ease-in-out skills ${
                            removeSkill === index ? 'opacity-0' : 'opacity-100'
                          }`}>
                           
                            <input
                                className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400"
                                type="text"
                                value={obj.text}
                                placeholder="React Vue "
                                onChange={(e)=>handleChangeSkill(index, 'text', e.target.value)}
                            />

                            {index > 0 && (
                                <button type="button" className="w-full bg-red-400 rounded-md p-1 font-medium mt-2" onClick={() => handleRemoveSkill(index)}>{t('form5.delete')} {t('form5.skill')}</button>
                            )}
                        </div>
                    ))
                 }
                 <div className="mb-4 mt-2 ">
                    <button  className="w-full bg-cyan-600 rounded-md p-1 font-medium hover:bg-sky-500" type='button' onClick={handleNewSkill}>{t('form5.new')} {t('form5.skill')}</button>
                  </div>

                  <div className="flex flex-col  ">
                      <div className="font-bold mt-2">{t('form5.languages')}</div>
                      {
                        language.map((obj, index)=> (
                            <div key={index} className={`flex flex-col my-2 transition-opacity duration-300 ease-in-out languages ${
                                removeLanguage === index ? 'opacity-0' : 'opacity-100'
                              }`}>
                                <label className="font-semibold mb-1">{t('form5.name')}</label>
                                <input
                                    className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400"
                                    type="text"
                                    value={obj.language}
                                    placeholder="Spanish, English, Portugues"
                                    onChange={(e)=>handleChangeLanguage(index, 'language', e.target.value)}
                                />
                                <label className="mb-1 mt-1 font-semibold">
                                {t('form5.level')}
                                </label>
                                <select name="selectOption" className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400" value={obj.level} onChange={(e)=>handleChangeLanguage(index, 'level', e.target.value)}>
                                    <option value=""></option>
                                    <option value="basic">{t('form5.basic')}</option>
                                    <option value="intermediate">{t('form5.intermediate')}</option>
                                    <option value="advanced">{t('form5.advanced')}</option>
                                    <option value="native">{t('form5.native')}</option>
                                </select>

                                {
                                    index > 0 && (
                                            <button type="button" className="w-full bg-red-400 rounded-md p-1 font-medium mt-2" onClick={() => handleRemoveLanguage(index)}>{t('form5.delete')} {t('form5.language')}</button>
                                    ) 
                                }
                            </div>
                            
                        ))
                      }  
                        <div className="mt-2">
                            <button  className="w-full bg-cyan-600 rounded-md p-1 font-medium hover:bg-sky-500" type='button' onClick={handleNewLanguage}>{t('form5.new')} {t('form5.language')}</button>
                        </div>
                      
                  </div>
                  
                  
                  <div className="mt-6 flex justify-between">
                    <ButtonForm accion={()=>handleBackForm(4)} tipo='back'/>
                    <ButtonForm accion={()=>handleNextForm(6)} tipo='next'/>
                  </div>
                  
              </form>
    )
}