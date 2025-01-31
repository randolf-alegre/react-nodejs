import { PDF } from "@/types/pdf.type";
import { useState } from 'react'

import { useDispatch, useSelector } from "react-redux";
import {  } from "../redux/state/product/reducer";
import { AppDispatch, RootState } from "../redux/store";
import { setActivePDForNumber } from "../redux/state/product/PDFSlice";

export default function PDFItem({ pdf, legalDocNumber, openDialog }: { pdf: PDF | undefined, legalDocNumber: number, openDialog: Function }) {
    const pdfs = useSelector((state: RootState) => state.pdf);
    const dispatch = useDispatch<AppDispatch>();

    const selectPDF = (pdf: PDF | undefined) => {openDialog(); dispatch(setActivePDForNumber(pdf ?? legalDocNumber))}
    return (
        <>
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-5" onClick={() => selectPDF(pdf)}>
                <div className="py-4">
                    <h2 className="text-xl font-semibold text-gray-800">Legal Document {pdf?.legalDocNumber ?? legalDocNumber}</h2>
                    <p className="mt-2 text-gray-600">Uploaded on: {pdf?.uploadedOn.toString()}</p>
                    <p className="mt-2 text-gray-600">Filename: {pdf?.filename}</p>
                </div>
            </div>
        </>
    )
}