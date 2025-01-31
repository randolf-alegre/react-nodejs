import { PDF } from "@prisma/client";
import { IpdfDBO } from "../model/pdf";
import { UpsertPDF } from "../types/pdf.types";

export interface IPDFService {
    getAllPDFs(): Promise<PDF[]>;
    createNewPDF(payload: UpsertPDF): Promise<PDF>
}

export class PDFService implements IPDFService {
    private readonly pdfDBO: IpdfDBO;

    constructor(pdfDBO: IpdfDBO) {
        this.pdfDBO = pdfDBO;
    }
    async createNewPDF(payload: UpsertPDF): Promise<PDF> {
        try {
            return await this.pdfDBO.addPDF(payload)
        } catch (error) {
            throw error;
        }
    }

    async getAllPDFs(): Promise<PDF[]> {
        try {
            return await this.pdfDBO.getAllPDFs()
        } catch (error) {
            throw error;
        }
    }
}