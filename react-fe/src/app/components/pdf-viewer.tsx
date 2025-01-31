import { useState } from 'react';
import { Document, Page } from 'react-pdf'
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PDFViewer({ url } : { url: string }) {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    function nextPage() {
        setPageNumber((v) => ++v);
    }

    function prevPage() {
        setPageNumber((v) => --v);
    }

    return (<>
        <div className="grid grid-cols-2 gap-4" style={{ position: "relative", overflow: "hidden" }}>
            <div className="p-4">
                <div style={{ height: "80%" }}>
                    <button onClick={prevPage} disabled={pageNumber <= 1}>
                        Previous
                    </button>
                    <button onClick={nextPage} disabled={pageNumber >= (numPages ?? -1)}>
                        Next
                    </button>
                    <Document
                        file={`/pdfs/${url}`}
                        onLoadSuccess={onDocumentLoadSuccess}
                        className="my-react-pdf"
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </div>
            </div>
            <div className="p-4 text-black">
                {numPages && Array(numPages).fill(null).map((_, index: number) => (
                    <div className='flex justify-between p-2 goto-container'>
                        <button type="button" className="order-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setPageNumber(index + 1)}>Go to page</button>
                        <span className='order-1'>Extraction {index + 1}</span>
                    </div>
                ))}
            </div>
        </div>
    </>)
}