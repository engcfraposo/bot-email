import Queue from '../lib/Queue'
import pdfparse from 'pdf-parse';
import parseStringAsArray from '../utils/parseStringAsArray';
import batchModel from '../utils/batchModel';

import Email from '../models/Emails';
import Link from '../models/Links';


export default {

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
               
                    const dataLink = await Queue.add({pdf})
                                
                    

                    


            }
            
                    processedDocuments += batchSize;

                    lastProcessedId += 1
                
                   
            
        }
    }         
           
       

            
            
        
        

         
                

               
                
       
                
        

        
              
}