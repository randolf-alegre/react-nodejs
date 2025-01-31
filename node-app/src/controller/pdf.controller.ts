import { PDF } from "@prisma/client"
import { Request, Response } from "express";
import { IPDFService } from "../service/pdf.service";
import { BaseError } from "../httpError";
import { UpsertPDF } from "../types/pdf.types";

interface IPdfController {
    getAllPDFs(req: Request, res: Response): void;
}
export class PdfController implements IPdfController {
    private readonly pdfService;

    constructor(pdfService: IPDFService) {
        this.pdfService = pdfService;
    }

    async getAllPDFs(req: Request, res: Response) {
        try {
            const result = await this.pdfService.getAllPDFs()
            const list = result.map((item: PDF) => item)
            res.status(200).json({ result: list })
        } catch (error) {
            const errorDetails = error as unknown as BaseError;
            res.status(errorDetails.getHttpStatus()).send({ message: errorDetails.getMessage() });
        }
    }

    async uploadPDFfile(req: Request, res: Response) {
        try {
            const params = req.body;
            const payload: UpsertPDF = {
                userId: "f3f967dc-e8c4-4446-9aac-7263e0ffefc1",
                filePath: process.env.FILEPATH!,
                fileType: 'pdf',
                title: req.file!.filename,
                filename: req.file!.filename,
                legalDocNumber: parseInt(params.legalDocNumber),
                uploadedOn: new Date()
            }
            const result = await this.pdfService.createNewPDF(payload)
            res.status(200).json({
            message: 'File uploaded successfully',
            result
            })
        } catch (error) {
            console.log(error)
            const errorDetails = error as unknown as BaseError;
            res.status(errorDetails.getHttpStatus()).send({ message: errorDetails.getMessage() });
        }
    }
} 