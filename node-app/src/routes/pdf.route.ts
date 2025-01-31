import express, { Request, Response } from 'express';
import { instantiatePDFController } from '../controller';
import multer from 'multer';
import { storage } from '../lib/storage';

const upload = multer({ storage });

export const pdfRoutes = express.Router();

pdfRoutes.get('/pdfs/all', (req: Request, res: Response) => {
    instantiatePDFController().getAllPDFs(req, res)
});

pdfRoutes.post('/pdfs/upload',upload.single('file'), (req: Request, res: Response) => {
    instantiatePDFController().uploadPDFfile(req, res)
});