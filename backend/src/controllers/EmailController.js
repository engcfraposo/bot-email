const pdfparse = require('pdf-parse')
const parseStringAsArray = require('../utils/parseStringAsArray')
const Email = require('../models/Emails');
const Link = require('../models/Links');
const async = require('async')



module.exports = {

    async index(request, response){

        const email = await Email.find();
        return response.json(email)
        
    },

    
    async store(request, response){


        const link = await Link.find();


        async.map(link, async function (data) {

            const pdf = data.pdf
            
            return pdfparse(pdf).then( function (data){

                const textArray = parseStringAsArray(data.text);

                const email = textArray.flat().filter(it => it.includes('@'))

                return async.mapSeries(email, function(emails) {
                    
                   const emailSet = emails
                    
                   return console.log(emailSet)
                   
                   
                });
                
                
            })     

            
        },)

    }   
              
}