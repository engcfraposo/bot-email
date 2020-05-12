const pdfparse = require('pdf-parse')
const parseStringAsArray = require('../utils/parseStringAsArray')
const Email = require('../models/Emails');


module.exports = {

    async index(request, response){

        const email = await Email.find();
        return response.json(email)
        
    },

    
    store(request, response){

        
        const {http} =  request.body
   
            
            pdfparse(http).then( async function (data){

                
                const textArray = parseStringAsArray(data.text);

                const email= textArray.flat().filter(it => it.includes('@'))

  

                emails = await Email.create({
                    email
                })

                
                return response.json(emails);
            }) 
            
            


       
    }    
                
}