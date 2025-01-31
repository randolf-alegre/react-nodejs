import { instantiatePDFService } from "../service";
import { PdfController } from "./pdf.controller"

export const instantiatePDFController = () => {
    const productService = instantiatePDFService()
    return new PdfController(productService);
}