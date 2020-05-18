import Queue from 'bull';

import redisConfig from '../config/redis'

import pdfParse from '../jobs/pdfParse'


const pdfQueue = new Queue(pdfParse.key, redisConfig)


export default pdfQueue;