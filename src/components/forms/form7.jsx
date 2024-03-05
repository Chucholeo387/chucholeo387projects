
import ButtonForm from "./buttonForm";

export default function Form7 ({handleTour, t, cvName, setCvName, handleBackForm, handleSaved, edit}) {
    return (
        <form  className="flex flex-col p-6">
                
                <ButtonForm accion={handleTour} tipo='help' />
                    <div className="flex flex-col my-2 font-bold text-4xl justify-center items-center text-cyan-600">
                    {t('form7.great')}!
                    </div>
                    <div className='flex justify-center items-center text-center font-semibold'>
                    {t('form7.subtitle')}
                    </div>
                    <div className='flex justify-center mt-4 items-center text-center'>
                        {t(`${edit ? 'form7.editSubtitle' : 'form7.saveSubtitle'}`)}
                    </div>
                    <input
                            className="rounded-md px-2 py-1 mt-4 border shadow appearance-none focus:outline-blue-400 cvName"
                            type="text"
                            value={cvName}
                            placeholder="My curriculum"
                            onChange={(e)=>setCvName(e.target.value)}
                    />            

                    <div className="mt-6 flex justify-between">
                        <ButtonForm accion={()=>handleBackForm(6)} tipo='back'/>
                        <ButtonForm accion={handleSaved} tipo='save'/>
                    </div>              
                </form>
    )
}