import { instantiatePdf } from "../model/factory";
import { PDFService } from "./pdf.service"

export const instantiatePDFService = () => {
    const pdfDBO = instantiatePdf();
    return new PDFService(pdfDBO);
}