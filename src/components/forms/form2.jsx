
import ButtonForm from "./buttonForm"
import { useTranslations } from "next-intl";


export default function Form2 ({email, setEmail,located, setLocated, linkedin, setLinkedin, personalWeb, setPersonalWeb, handleNextForm, handleBackForm, handleTour , t}) {
   
    
    return (
         <form  className="flex flex-col p-6 contact">            
                <ButtonForm accion={handleTour} tipo='help' />
                    <div className="flex flex-col my-2 email">
                      <div className="font-bold">{t('form2.contact')}</div>
                      <label className="mb-1 font-semibold">
                      {t('form2.email')}
                      </label>
                      <input
                          className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400"
                          type="text"
                          value={email}
                          placeholder="lugojesus387@gmail.com"
                          onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col my-2 located">
                      <label className="mb-1 font-semibold">
                      {t('form2.located')}
                      </label>
                      <input
                          className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400"
                          type="text"
                          value={located}
                          placeholder="sao jose dos campos, Brasil"
                          onChange={(e)=>setLocated(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col my-2 linkedin">
                      <label className="mb-1 font-semibold">
                        Linkedin
                      </label>
                      <input
                          className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400"
                          type="text"
                          value={linkedin}
                          placeholder="https://www.linkedin.com/in/jesus-leonardo-lugo-rodriguez/"
                          onChange={(e)=>setLinkedin(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col my-2 personalWeb">
                      <label className="mb-1 font-semibold">
                      {t('form2.personalWeb')}
                      </label>
                      <input
                          className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400"
                          type="text"
                          value={personalWeb}
                          placeholder="https://chucholeo387.vercel.app/"
                          onChange={(e)=>setPersonalWeb(e.target.value)}
                      />
                    </div>
            
                <div className="mt-6 flex justify-between">
                    <ButtonForm accion={()=>handleBackForm(1)} tipo='back'/>
                    <ButtonForm accion={()=>handleNextForm(3)} tipo='next'/>
                </div>
                  
              </form> 
    )
}