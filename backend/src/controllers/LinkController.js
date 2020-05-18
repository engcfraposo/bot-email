const axios = require('axios')
const parseStringAsArray = require('../utils/parseStringAsArray')
const Link = require('../models/Links');


export default{

    async index(request, response){

        const email = await Link.find();
        return response.json(email)
        
    },

    
    async store(request, response){

        
        const {http} =  request.body

        
        const content = await axios.get(http)

      
        const pdfArray = parseStringAsArray(content.data);

            
        const pdfData = pdfArray.flat().filter(it => it.includes('pdf'))


        pdfData.forEach( async href =>  {


           const pdfHref = href.split('href=').map(event => event.trim());

            
           const pdfData = pdfHref.flat().filter(it => it.includes('pdf'))

            
            pdfData.map( aspas =>  {
                const pdfAspas = aspas.split('"').map(event => event.trim());

                const pdfText = pdfAspas.flat().filter(it => it.includes('pdf'))


                pdfText.map( pdfs =>  {
                    
                    
                    const sufixo = pdfs;

                    const pdf = `https://www.editorarealize.com.br/revistas/conedu/${sufixo}`;
                     


                        link =  Link.create({

                            pdf,
                            
                        })



                        return console.log(pdf)
                });

                
                

            });
            
        });

       
    }   
                
}