const http = require('http');
const https = require('https');
const pdfparse = require('pdf-parse');
const fs = require('fs')
const parseStringAsArray = require('../utils/parseStringAsArray')
const batchModel = require('../utils/batchModel')

const Email = require('../models/Emails');
const Link = require('../models/Links');


module.exports = {

    async index(request, response){

        const email = await Email.find();
        return response.json(email)
        
    },

    
    async store(request, response, next){
        
        

        const amountOfDocuments = await Link.countDocuments();

        const batchSize = 1;

        let processedDocuments = 0;

        let lastProcessedId = null;

        

        while( processedDocuments < amountOfDocuments ) {

            const links = await batchModel(Link, batchSize, lastProcessedId) 

            
            for (const data of links) {
                
                const { pdf, link_id } = data;
               

                    const dataLink = await pdfparse(pdf)
                                
                    const  pdfArray = parseStringAsArray(dataLink.text)

                    const pdfParse = pdfArray.flat().filter(it => it.includes('@'))
                        
                    for (const data of pdfParse) {

                        const email = data
                        
                        

                        console.log(email)
                    }
                    console.log(link_id)
                    
               


            }
            
                    processedDocuments += batchSize;

                    lastProcessedId += 1
                
                   
            
        }
    }         
           
       

            
            
        
        

         
                

               
                
       
                
        

        
              
}