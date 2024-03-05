import ButtonForm from "./buttonForm";
import ButtomImage from "./buttomImage";
import Image from "next/image";

export default function Form6 ({age, handleTour, handleNextForm, handleBackForm, setAge, image, handleImageChange, t, edit }){

    return (
        <form  className="flex flex-col p-6">
              
              <ButtonForm accion={handleTour} tipo='help' />
                  <div className="flex flex-col my-2">
                      <div className="font-bold">{t('form6.others')}</div>
                      <label className="mb-1 font-semibold">
                      {t('form6.age')}
                      </label>
                      <input
                          className="rounded-md px-2 py-1 border shadow appearance-none focus:outline-blue-400"
                          type="number"
                          value={age}
                          placeholder="25"
                          onChange={(e)=>setAge(e.target.value)}
                      />
                  </div>
                    <div className="mx-auto mt-8 pictures">
                           
                            <ButtomImage onFileSelect={handleImageChange}/>
                            
                     
                            {image && (
                                <div className="">
                                    <p className="font-bold text-center">{t('form6.image')} {t('form6.charget')}:</p>
                                    <div className="mt-4 flex justify-center">
                                        <Image src={image} alt="Picture of the author" width={150} height={150} className="block  "/>
                                    </div>
                                </div>
                               
                            )}
                    </div>

                  <div className="mt-6 flex justify-between">
                    <ButtonForm accion={()=>handleBackForm(5)} tipo='back'/>
                    <button className="w-20 bg-cyan-600 rounded-md p-1 font-medium hover:bg-sky-500" type='button' onClick={()=> handleNextForm(7)}>{t(edit ? 'form6.edit' : 'form6.create')}</button>
                  </div>              
              </form>
    )
}