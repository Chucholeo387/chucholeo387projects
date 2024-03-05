'use client'

import React from 'react';
import { useState, useEffect } from "react"
import generatePDF from '@/PDF/pdfProva';
import Dialog from '../dialogs/dialogError';
import { defaultImage } from '@/PDF/imagens/defaultImage';
import { useRouter} from "next/navigation";
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import { v4 as uuidv4 } from 'uuid';
import Form1 from '../forms/form1';
import Form2 from '../forms/form2';
import Form3 from '../forms/form3';
import Form4 from '../forms/form4';
import Form5 from '../forms/form5';
import Form6 from '../forms/form6';
import Form7 from '../forms/form7';

import dynamic from 'next/dynamic';
const Joyride = dynamic(() => import('react-joyride'), {
    ssr: false,
  });


export default function Modal () {
    //para saber q tipo de idioma es:
    const locale = useLocale()

    // trasnlation 

    const t = useTranslations('MakeCv')

    // logica del tour

    const [joyrideSteps, setJoyrideSteps] = useState([
        {
            target: 'body', 
            content: t('form1.firstHelp'),
            placement: "center",
        },
        {
            target: '.fullName', 
            content: t('form1.secondHelp'),
            placement: "bottom",
        },
        {
            target: '.position',
            content: t('form1.thirthHelp'),
        },
        {
            target: '.description',
            content: t('form1.fourthHelp'),
        },
       
       
      ]);
    
      const [runJoyride, setRunJoyride] = useState(false);
    
      const handleJoyrideCallback = (data) => {
        const { action, index, type } = data;
    
        if (type === 'tour:end' || action === 'close') {
          // La gira ha terminado o se cerró manualmente
          setRunJoyride(false);
        }
      };

      const handleTour = ()=>{
        setRunJoyride(true)
      }
    /////////////////////// ///////////////////////////////////////////////////////////////////////

    //control de rutas  
    const router = useRouter()

    //variable para confirmar edicion
    const [edit, setEdit] = useState(false)

    // pasar formulario
    const [form, setForm] = useState(1)

    // form 1
    const [fullName, setFullName ] = useState('')
    const [position, setPosition ] = useState('')
    const [perfil, setPerfil ] = useState('')

    //form 2
    const [email, setEmail ] = useState('')
    const [located, setLocated ] = useState('')
    const [linkedin, setLinkedin ] = useState('')
    const [personalWeb, setPersonalWeb] = useState('')

    // form 3
    const [experiences, setExperiences] = useState([
        { job:'Experiencia', puesto: '', company: '', dateIni: '', dateEnd: '', detail: '' },
      ]);
    
    const [removingIndex, setRemovingIndex] = useState(null);
    
      const handleChange = (index, key, value) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index][key] = value;
        setExperiences(updatedExperiences);
      };
    
      const handleAddExperience = (e) => {
        e.preventDefault()
        setExperiences([...experiences, { job:'Experiencia', puesto: '', company: '', dateIni: '', dateEnd: '', detail: '' }]);
      };
    
      const handleRemoveExperience = (index) => {
        setRemovingIndex(index);
        setTimeout(() => {
            const updatedExperiences = [...experiences];
            updatedExperiences.splice(index, 1);
            setExperiences(updatedExperiences);
            setRemovingIndex(null);
        }, 300);
      };
    
   
    const [educations, setEducations] = useState([
        { localStudy:'', bachelor: '', dateIni: '', dateEnd: '' }
    ])

    const [removingEducation, setRemovingEducation] = useState(null);
    
      const handleChangeEducation = (index, key, value) => {
        const updatedEducation = [...educations];
        updatedEducation[index][key] = value;
        setEducations(updatedEducation);
      };
    
      const handleAddEducation = (e) => {
        e.preventDefault()
        setEducations([...educations,  { localStudy:'', bachelor: '', dateIni: '', dateEnd: '' }
        ]);
    };
    
      const handleRemoveEducation = (index) => {
        setRemovingEducation(index);
        setTimeout(() => {
            const updatedEducations = [...educations];
            updatedEducations.splice(index, 1);
            setEducations(updatedEducations);
            setRemovingEducation(null);
        }, 300);
      };

    //form 5

    const [language, setLanguage] = useState([
        {
            language: '',
            level: ''
        }
    ])
    const [skill, setNewSkill] = useState([
        {
            text: ''
        }
    ])
    const [removeSkill, setRemoveSkill] = useState(null)
    const [removeLanguage, setRemoveLanguage] = useState(null)

    const handleChangeSkill = (index, key, value) =>{
        const newSkill = [...skill]
        newSkill[index][key] = value
        setNewSkill(newSkill)
    }

    const handleNewSkill = () =>{
        setNewSkill([...skill, {text: ''}])
    }

    const handleRemoveSkill = (index) =>{
        setRemoveSkill(index)
        setTimeout(() => {
            const updateSkill = [...skill]
            updateSkill.splice(index, 1)
            setNewSkill(updateSkill)
            setRemoveSkill(null)
        }, 300);
    }

    const handleChangeLanguage = (index, key, value) =>{
        const newLangue = [...language]
        newLangue[index][key] = value
        setLanguage(newLangue)
    }

    const handleNewLanguage = () =>{
        setLanguage([...language, {language: '', level:''}])
    }

    const handleRemoveLanguage = (index) =>{
        setRemoveLanguage(index)
        setTimeout(() => {
            const updateLanguage = [...language]
            updateLanguage.splice(index, 1)
            setLanguage(updateLanguage)
            setRemoveLanguage(null)
        }, 300);
        
    }
    
    // forma 6
    const [age, setAge] = useState('')
    const [image, setImage] = useState(defaultImage);
    const [image64, setImage64] = useState(null)

    // form 7
    const [cvName, setCvName] = useState('')

    // handle de dialog
    const [dialog, setDialog] = useState(false)
    const [messageError, setMessage] = useState('')
    const openDialog = () =>{
        setDialog(true)
    } 
    
    const closeDialog = () =>{
        setDialog(false)
    }

    const newCv = {
        id: uuidv4(),
        fullName: fullName,
        position: position,
        perfil: perfil,
        email: email,
        located: located,
        linkedin:linkedin,
        personalWeb: personalWeb,
        experiences: experiences,
        education: educations,
        language: language,
        skill: skill,
        image64: image64,
        image:image,
        age: age,
        cvName: cvName,
    }

    const handleEdit = () =>{
        const listCv = JSON.parse(localStorage.getItem('listCv'))
        const cvEdit = JSON.parse(localStorage.getItem('editCv'))
    
        const cv = listCv.find((obj)=>{
            return obj.id === cvEdit[0].id
        })

        const newListCv = listCv.map((obj)=> {
            if(cv.id === obj.id){
                return newCv
            }else{
                return obj
            }
        })

        localStorage.setItem('listCv', JSON.stringify(newListCv))
        setEdit(false)
        router.push(`/${locale}/cv`)
    }

    const handleSaved = (e)=>{
        e.preventDefault();
        if(edit){
            const name = cvName
            if(name.trim() !== ''){
                handleEdit()
                localStorage.removeItem('editCv')
            }else{
                setMessage('Completa todos los campos antes de continuar')
                openDialog()
            }  
        }else{
        const name = cvName

        if(name.trim() !== ''){
            if(localStorage.getItem('listCv') !== null){
              
                const listCv = JSON.parse(localStorage.getItem('listCv'))
                
                listCv.push(newCv)
               
                localStorage.setItem("listCv", JSON.stringify(listCv))
                router.push(`/${locale}/cv`)
            }else{
                const listCv = []
                listCv.push(newCv)
                localStorage.setItem("listCv", JSON.stringify(listCv))
                router.push(`/${locale}/cv`)
            }
        }else{
            setMessage('Completa todos los campos antes de continuar')
            openDialog()
        }
        
        }
       
        
    }

    const cancel = (e) =>{
        e.preventDefault()
        if(edit){
            setEdit(false)
            localStorage.removeItem('editCv')     
            router.replace(`/${locale}/cv`)
        }else {       
            router.replace(`/${locale}/cv`)
        }
        
    }
   
    useEffect(()=>{
        if(localStorage.getItem('editCv') !== null){
            const dataEdit = JSON.parse(localStorage.getItem('editCv'))
            
            setEdit(true)
            setFullName(dataEdit[0].fullName)
            setPosition(dataEdit[0].position)
            setPerfil(dataEdit[0].perfil)
            setEmail(dataEdit[0].email)
            setLocated(dataEdit[0].located)
            setLinkedin(dataEdit[0].linkedin)
            setPersonalWeb(dataEdit[0].personalWeb)
            setExperiences(dataEdit[0].experiences)
            setEducations(dataEdit[0].education)
            setLanguage(dataEdit[0].language)
            setNewSkill(dataEdit[0].skill)
            setAge(dataEdit[0].age)
            setImage(dataEdit[0].image64)
            setImage64(dataEdit[0].image64)    
            setCvName(dataEdit[0].cvName)
        }      
    },[])


    // convertir imagen a base64
    const convertirABase64 = (file) => {
        
        // const file = e.target.files[0];

        const reader =  new FileReader()

        reader.onload =  ((e)=>{
           
            setImage64(e.target.result)
        })
        
        reader.readAsDataURL(file);
        
    };
 
    //Cargar imagen previa
    const handleImageChange = (file) => {
        
        convertirABase64(file)
        // const file = e.target.files[0];

        // Verificar si se seleccionó un archivo
        if (file) {
            // Crear una URL temporal para la imagen seleccionada
            const imageUrl = URL.createObjectURL(file);
            // Actualizar el estado con la URL de la imagen
            setImage(imageUrl);

            // convertirABase64(file)
        }
    };

    const stepsList = {
        1 :  [
            {
                target: 'body', 
                content: t('form1.firstHelp'),
                placement: "center",
            },
            {
                target: '.fullName', 
                content: t('form1.secondHelp'),
                placement: "bottom",
            },
            {
                target: '.position',
                content: t('form1.thirthHelp'),
            },
            {
                target: '.description',
                content: t('form1.fourthHelp'),
            },
        ],
        2:  [
            {
                target: 'body', 
                content: t('form2.firstHelp'),
                placement: "center",
            },
            {
                target: '.linkedin', 
                content: t('form2.secondHelp'),
                
            },
            {
                target: '.personalWeb', 
                content: t('form2.thirthHelp'),
                
            },
           
        ],
        3:  [
            {
                target: 'body', 
                content: t('form3.firstHelp'),
                placement: "center",
            }, 
            {
                target: '.company', 
                content: t('form3.secondHelp'),
               
            }, 
            {
                target: '.position', 
                content: t('form3.thirthHelp'),
                
            }, 
           ///TODO REVISAR SI NO TIENEN EXPERIENCIA. FORM PARA PERSONAS SIN EXPERIENCIA 
           //TODO formulario de cursos?  
        ],
        4: [
            {
                target: 'body', 
                content: t('form4.firstHelp'),
                placement: "center",
            },
            {
                target: '.education', 
                content: t('form4.secondHelp'),
                
            },      
        ],
        5: [
            {
                target: 'body', 
                content: t('form5.firstHelp'),
                placement: "center",
            },
            {
                target: '.skills', 
                content: t('form5.secondHelp'),
            },
            {
                target: '.languages', 
                content: t('form5.thirthHelp'),
            },
        ],
        6:[ {
                target: 'body', 
                content: t('form6.firstHelp'),
                placement: "center",
            },
            {
                target: '.pictures', 
                content:t('form6.secondHelp'),
            },
        ],
        7:[ {
            target: 'body', 
            content: t('form7.firstHelp'),
            placement: "center",
        },
        {
            target: '.cvName', 
            content: t('form7.secondHelp'),
        },
    ],
    }


    const handleNextForm = (numberform) =>{
        
        if(form === 1 && fullName.trim() !== '' && position.trim() !== '' && perfil.trim() !== ''){
            setJoyrideSteps(stepsList[numberform])
            setForm(numberform)
        }else if(form === 2 && email.trim() !== '' && located.trim() !== '' && linkedin.trim() !== '' && personalWeb.trim() !== ''){
            setJoyrideSteps(stepsList[numberform])
            setForm(numberform)
        }else if(form === 3){
            const arrayExperience = [...experiences]
            arrayExperience.reverse()

            const value = arrayExperience.every(obj => 
                obj.company.trim() !== '' && 
                obj.dateIni.trim() !== '' && 
                obj.dateEnd.trim() !== '' && 
                obj.detail.trim() !== '' &&
                obj.puesto.trim() !== ''
              );
            if(value){
                setJoyrideSteps(stepsList[numberform])
                setForm(numberform)
            }else{
                
                setMessage('Completa todos los campos antes de continuar')
                openDialog()
            }
            
        }else if(form === 4){
            setJoyrideSteps(stepsList[numberform])
            setForm(numberform)
        }else if(form === 5){

            const arrayskill = [...skill]
            const valueSkill = arrayskill.every(obj => 
                obj.text.trim() !== ''
            );

            const arrayLanguages = [...language]
            const valueLanguage = arrayLanguages.every(obj => 
                obj.language.trim() !== ''&& 
                obj.level.trim() !== ''
            );
            if(valueSkill && valueLanguage){
                setJoyrideSteps(stepsList[numberform])
                setForm(numberform)
            }else  {
                setMessage('Completa todos los campos antes de continuar')
                openDialog()
            }
        } else if(form === 6 && age.trim() !== ''){
            setJoyrideSteps(stepsList[numberform])
            generatePDF(newCv)
            setForm(numberform)
        } else{
            setMessage('Completa todos los campos antes de continuar')
            openDialog()
        }
    }

    const handleBackForm = (numberform) =>{
        setJoyrideSteps(stepsList[numberform])
        setForm(numberform)
}
   


    return (
        <div className="flex justify-center items-center ">
            <Joyride
                callback={handleJoyrideCallback}
                continuous
                hideCloseButton
                run={runJoyride}
                scrollToFirstStep
                showProgress
                showSkipButton
                steps={joyrideSteps}
                styles={{
                options: {
                    arrowColor: '#fff',
                    backgroundColor: '#fff',
                    overlayColor: 'rgba(0, 0, 0, 0.5)',
                    textColor: '#333',
                    width: 400,
                },
                }}
            />
        {/* //////////////////formulario 1////////////////////// */}

        {form === 1 &&( 
            <div className={`bg-slate-200 rounded-md w-full`}>
                <Form1 fullName={fullName} position={position} perfil={perfil} setFullName={setFullName} setPosition={setPosition} setPerfil={setPerfil} cancel={cancel} handleNextForm={()=>handleNextForm(2)} handleTour={handleTour} t={t}/>
              {/* <form  className="flex flex-col p-6">
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
                  
              </form> */}
          </div>
        )}

          {/*-----------------------------------  2 formulario----------------------------------- */}

           {form === 2 && (     
            <div className={`bg-slate-200 rounded-md w-full`}>
                <Form2 email={email} setEmail={setEmail} located={located}  setLocated={setLocated}  linkedin={linkedin}  setLinkedin={setLinkedin}  personalWeb={personalWeb} setPersonalWeb={setPersonalWeb}  handleNextForm={()=>handleNextForm(3)}  handleBackForm={()=>handleBackForm(1)}  handleTour={handleTour} t={t}/>
              {/* <form  className="flex flex-col p-6 contact">
             
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
                  
              </form> */}
          </div>
          )}

          {/*----------------------------------- 3 formulario----------------------------------- */}
        {form === 3 &&(
            <div className={`bg-slate-200 rounded-md  w-full`}>
                <Form3 experiences={experiences} handleChange={handleChange} handleAddExperience={handleAddExperience} handleBackForm={()=>handleBackForm(2)} handleNextForm={()=>handleNextForm(4)} handleRemoveExperience={handleRemoveExperience} removingIndex={removingIndex} handleTour={handleTour} t={t}/>
              {/* <form  className="flex flex-col p-6 experience">
              
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
                    <button  className="w-full bg-cyan-600 rounded-md p-1 font-medium disabled:opacity-75 hover:bg-sky-500" disabled={experiences.length === 3 ? true : false} onClick={handleAddExperience}>{t('form3.new')} {t('form3.experience')}</button>
                  </div>

            
                  <div className="mt-6 flex justify-between">
                    <ButtonForm accion={()=>handleBackForm(2)} tipo='back'/>
                    <ButtonForm accion={()=>handleNextForm(4)} tipo='next'/>
                      
                  </div>
                  
              </form> */}
          </div>
        )}
          {/*  ------------------------------------- 4 formulario-------------------------------  */ }
        {form === 4 && (     
           
            <div className={`bg-slate-200 rounded-md w-full`}>
                <Form4 educations={educations} handleTour={handleTour} handleRemoveEducation={handleRemoveEducation} handleAddEducation={handleAddEducation} handleChangeEducation={handleChangeEducation} handleBackForm={()=>handleBackForm(3)} handleNextForm={()=>handleNextForm(5)} removingEducation={removingEducation} t={t}/>
              {/* <form  className="flex flex-col p-6 education">
              
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
                  
              </form> */}
          </div>
        )}  
          {/*----------------------------------- 5 formulario----------------------------------- */}
        {form === 5 && (
            
            <div className={`bg-slate-200 rounded-md w-full `}>
                <Form5 handleTour={handleTour} removeSkill={removeSkill} removeLanguage={removeLanguage} skill={skill}  language={language}  handleChangeLanguage={handleChangeLanguage}  handleChangeSkill={handleChangeSkill}  handleNewLanguage={handleNewLanguage}  handleNewSkill={handleNewSkill}  handleNextForm={()=>handleNextForm(6)} handleRemoveSkill={handleRemoveSkill}  handleRemoveLanguage={handleRemoveLanguage}  handleBackForm={()=>handleBackForm(4)}  t={t} />
              {/* <form  className="flex flex-col p-6 ">
              
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
                  
              </form> */}
            </div>
        )}
            {/*----------------------------------- 6 formulario furmulario----------------------------------- */}
        {form === 6 && (    
            
            <div className={`bg-slate-200 rounded-md w-full` }>
                <Form6 age={age} handleTour={handleTour}  handleNextForm={handleNextForm}  handleBackForm={handleBackForm}  setAge={setAge}  image={image}  handleImageChange={handleImageChange}  t={t} edit={edit}/>
              {/* <form  className="flex flex-col p-6">
              
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
              </form> */}
              
          </div>
        )}
          {/* ///////////////////////////// mensaje de exito //////////////////////////// */}
        {form === 7 && (
            <div className={`bg-slate-200 rounded-md w-full` }>
                <Form7 handleTour={handleTour} t={t} cvName={cvName} setCvName={setCvName} handleBackForm={handleBackForm} handleSaved={handleSaved} edit={edit}/>
                {/* <form  className="flex flex-col p-6">
                
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
                </form> */}
            </div>
        )}  
          <Dialog isOpen={dialog} onClose={closeDialog} message={messageError}/>                   
        </div>
    )
}