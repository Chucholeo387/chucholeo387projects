
import pdfMake from 'pdfmake/build/pdfmake';
import { linkedinIcon } from './imagens/linkedin64';
import { emailIcon } from './imagens/emailIcon';
import { websiteIcon } from './imagens/websiteIcon';
import { locatedIcon } from './imagens/localtedIcon';
import { profileImage } from './imagens/profile';
import { defaultImage } from './imagens/defaultImage';

import pdfFonts from 'pdfmake/build/vfs_fonts';



pdfMake.vfs = pdfFonts.pdfMake.vfs;



const education = [
  {
    uni: 'Universidad de Oriente',
    titulo: 'Bachelor of Biomedicine',
    ano: '2011 -2019'
  },
  {
    uni: 'Universidad de Oriente',
    titulo: 'Bachelor of Biomedicine',
    ano: '2011 -2019'
  }
]


 const generatePDF = ( newCv) => {
    // Definir la estructura del documento
    // console.log('fullname', fullName)
    // console.log('position', position)
    // console.log('perfil', perfil)
    // console.log('email', email)
    // console.log('located', located)
    // console.log('linkedin', linkedin)
    // console.log('personalWeb', personalWeb)
    // console.log('experiences', experiences)
    // console.log('skills', skills)
    // console.log('languages', language)
    // console.log('age', age)
    // console.log('image', image)
    console.log(newCv)
    

    let skillCapitalazed = null 

    if(newCv.skill.length > 0){
      skillCapitalazed = newCv.skill.map(obj =>{
        const capitalazed =  obj.text.charAt(0).toUpperCase() + obj.text.slice(1);
        return {
          ...obj,
          text: capitalazed
        }
      })
    }

   

    const listLanguage = []

    if(newCv.language.length > 0){
      newCv.language.forEach(obj => {
        const capitalazedLanguage =  obj.language.charAt(0).toUpperCase() + obj.language.slice(1).toLowerCase();
        listLanguage.push(`${capitalazedLanguage} ${obj.level}`)
      });
    }

    const listExperience = []

    if (newCv.experiences.length > 0) {
      newCv.experiences.forEach(obj =>{
        listExperience.push(
          [
            {
              text: obj.puesto,
              margin: [0, 0, 0, 5],
              style: 'empresa',
          
            }, 
            {
              text: obj.company,
              margin: [0, 0, 0, 5],
              style: 'text'
            }, 
            {
              text: `${obj.dateIni} - ${obj.dateEnd}`,
              margin: [0, 0, 0, 5],
              style: 'text'
            }, 
            {
          
              text:`${obj.detail}`,
              margin: [0, 0, 0, 10],
              style: 'descripcion'
            }, 
          ]
        )
      })
    }

    const listEducation = []

    if (newCv.education.length > 0) {
      newCv.education.forEach(obj =>{
        listEducation.push(
          [
            {
              text: obj.localStudy,
              margin: [40, 5, 0, 5],
              style: 'text',
          
            }, 
            {
              text: obj.bachelor,
              margin: [40, 0, 0, 5],
              style: 'text'
            }, 
            {
              text: `${obj.dateIni} - ${obj.dateEnd}`,
              margin: [40, 0, 0, 5],
              style: 'text'
            }, 
          ]
        )
      })
    }

    const documentDefinition = {
      content: [   
          {
              
              style: 'tableExample',
              table: {
                widths: [240, 350],
                
                body: [
                  [
                    ////////////////////////// column 1 ////////////////////////
                      {
                        
                        fillColor: '#eeeeee',
                        stack: [
                                  
                                  {
                                    image:newCv.image64 === null ? defaultImage : newCv.image64 , width: 245, height: 250, 
                                  },
                                  [
                                  {
                                    margin: [40, 20, 20, 5],
                                    columns:[
                                      {
                                        image: emailIcon, 
                                        width: 12, 
                                        height: 12
                                      },
                              
                                      {
                                        text: newCv.email,
                                        margin: [10, 0, 0, 0],
                                        style: 'firstColum'
                                      }
                                    ]
                                  },
                                  
                                  {
                                    margin: [38, 0, 20, 5],
                                    columns:[
                                      {
                                        image: linkedinIcon, 
                                        width: 15, 
                                        height: 15,
                                        margin: [0, 5, 0, 0],
                                      },
                                      {
                                        text: newCv.linkedin,
                                        margin: [10, 0, 0, 0],
                                        style: 'firstColum',
                                      }
                                    ]
                                  }, 
                                  {
                                    margin: [38, 0, 20, 5],
                                    columns:[
                                      {
                                        image: locatedIcon, 
                                        width: 15, 
                                        height: 15
                                      },
                                      {
                                        text: newCv.located,
                                        margin: [10, 0, 0, 0],
                                        style: 'firstColum'
                                      }
                                    ]
                                  }, 
                                  {
                                    margin: [40, 4, 20, 5],
                                    columns:[
                                      {
                                        image: websiteIcon, 
                                        width: 12, 
                                        height: 12
                                      },
                                      {
                                        
                                        text: newCv.personalWeb,
                                        margin: [10, 0, 0, 0],
                                        style: 'firstColum'
                                      }
                                    ]
                                  }, 
                              
                                  ],
                                  {
                                    text: 'SKILLS',
                                    margin: [40, 20, 0, 5],
                                    style: 'subtitle'
                                  },
                                  [
                                      {
                                        ul: skillCapitalazed,
                                        margin: [40, 0, 0, 0],
                                        style: 'firstColum'
                                      },
                                  ],
                                  
                                  {
                                    text: 'EDUCATION',
                                    margin: [40, 20, 0, 5],
                                    style: 'subtitle'
                                  },
                                  listEducation,
                                  
                                  {
                                    text: 'LANGUAGE',
                                    margin: [40, 20, 0, 5],
                                    style: 'subtitle'
                                  },
                                  [
                                      {
                                        ul: listLanguage,
                                        margin: [40, 0, 0, 0],
                                        style: 'firstColum'
                                      },
                                  ],
                                  
                                  {
                                    text: 'ADITIONAL INFORMATION',
                                    margin: [40, 20, 0, 10],
                                    style: 'subtitle'
                                  },
                                  [
                                      {
                                        text: `I am ${newCv.age} years old`,
                                        margin: [40, 0, 0, 200],
                                        style: 'firstColum'
                                      },
                                  ],
                                
                           
                                  
                                ]
                        
                      }
                      
                    ////////////////////////// column 2 ////////////////////////
                  , 
                    {
                      margin: [20, 20, 40, 0],
                      stack:[   
                                
                                {
                                  text: newCv.position.toUpperCase(),
                                  style: 'header',
                                  alignment: 'center',  
                                },
                                {
                                  text: newCv.fullName,
                                  style: 'subHeader',
                                  alignment: 'center',
                                  margin: [0, 10, 0, 10],
                                },
                               
                                {
                                  text: newCv.perfil,
                                  style: 'profile'
                                },
                                
                               
                                {
                                  text: 'EXPERIENCE',
                                  margin: [0, 30, 0, 10],
                                  style: 'subtitle'
                                }, 
                                listExperience
                           
                              ],
                    }
                     
                  ],
                ]
              },
              layout: 'noBorders'
          }
      ],
      styles: {
        header: {
          bold: true,
          fontSize: 32
        },
        subHeader: {
          fontSize: 20,
          bold: false,
        },
        subtitle: {
          fontSize: 14,
          bold: true,
        },
        text:{
          fontSize: 10,
        },
        empresa:{
          fontSize: 12,
          bold: true,
          
        },
        descripcion:{
          fontSize: 10,
          lineHeight: 1.2,
          
        },
        profile: {
          fontSize: 12,
          lineHeight: 1.2, 
        },
        listItem: {
          fontSize: 12,
        },
        firstColum: {
          fontSize: 10,
        },
        tableExample:{
          rowSpan: 10,
          colSpan: 3,
        }
        
      },
      layout: {
        defaultBorder: false,
      },
      defaultStyle: {
        columnGap: 0
      },
      pageMargins: [0, 0, 40, 20],
      
    };

    pdfMake.createPdf(documentDefinition).open();

}



export default generatePDF