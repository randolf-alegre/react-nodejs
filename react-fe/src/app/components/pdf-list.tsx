import { PDF } from "@/types/pdf.type";
import PDFItem from "./pdf-file";

export default function PDFList({ pdfs, setOpen }: { pdfs: PDF[], setOpen: Function }) {

    const renderPDForContainer = (index: number) => {
        const selectedPDF = pdfs.find((item: PDF) => item.legalDocNumber === index)
        return (
            <div className="p-4">
                <PDFItem pdf={selectedPDF ?? undefined} legalDocNumber={ index } openDialog={() => setOpen(true)}/>
            </div>
        )
    }
    return (
        <>
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {Array(9).fill(undefined).map((_, index: number) => (renderPDForContainer(index + 1)))}
            </div>

        </>
    )
}