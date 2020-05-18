import 'dotenv/config';

import Queue from './lib/Queue'
import pdfParse from './jobs/pdfParse'

Queue.process(pdfParse.handle)