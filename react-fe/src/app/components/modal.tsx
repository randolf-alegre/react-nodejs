import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import UploadPDF from "./upload-pdf";
import PDFViewer from "./pdf-viewer";


export default function Modal({ state, setState }:{ state: boolean, setState: Function}) {
    const pdfs = useSelector((state: RootState) => state.pdf);

    return (
        <>
            <div id="modal" className={`fixed inset-1 flex items-center justify-center bg-black bg-opacity-50 ${state ? '' : 'hidden'}`} >
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-7xl w-full">

                    <div className="flex justify-between items-center border-b pb-3">
                        <h2 className="text-2xl font-bold text-gray-800">Document Details</h2>
                        <button id="closeModal" className="text-gray-500 hover:text-red-500 text-2xl" onClick={() => setState(false)}>&times;</button>
                    </div>

                    <div className="grid grid-cols-1 gap-4 modal-container"> 
                      {pdfs.activePDF ? (<PDFViewer url={pdfs.activePDF.filename} />) : (<UploadPDF setOpen={setState} />)}
                    </div>

                    <div className="flex justify-end mt-6">
                        <button id="closeModalFooter" className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition" onClick={() => setState(false)}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}