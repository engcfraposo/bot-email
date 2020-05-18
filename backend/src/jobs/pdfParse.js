import pdfparse from 'pdf-parse';
import parseStringAsArray from '../utils/parseStringAsArray';
import Email from '../models/Emails'
export default {
    key: 'pdfParse',

    async handle({data}){
        const { pdf } = data;
        const dataLink = await pdfparse(pdf)
        const  pdfArray = parseStringAsArray(dataLink.text)
        const pdfParse = pdfArray.flat().filter(it => it.includes('@'))
                        
                    for (const data of pdfParse) {

                        const email = data
                        
                        const emailData = Email.create({
                            pdf,
                            email,
                        })
                        
                        console.log(email)
                    }
    }
    
}