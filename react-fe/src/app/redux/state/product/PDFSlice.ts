"use client";

import { PDF } from "@/types/pdf.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getAllPDFFiles, uploadPDF, reducer } from "./reducer";

export interface IPDFState {
  list: PDF[];
  activePDF: PDF | null;
  activeNumber: number | null;
}

export const PDFSlice = createSlice({
  name: "pdf",
  initialState: {
    list: [],
    activePDF: null,
    activeNumber: null
  } as IPDFState,
  reducers: {
    ...reducer,
  },
  extraReducers(builder) {
    builder
    .addCase(getAllPDFFiles.fulfilled, (state, action: PayloadAction<{result: PDF[]}>) => {
        const { result } = action.payload;
      state.list = [...result];
    })
    .addCase(getAllPDFFiles.rejected, (state, action) => {
      const { payload } = action;
    });

    builder
    .addCase(uploadPDF.fulfilled, (state, action: PayloadAction<{result: PDF}>) => {
        const { result } = action.payload;
      state.list = [...state.list, {...result}];
    })
    .addCase(uploadPDF.rejected, (state, action) => {
      const { payload } = action;
    });
  }
});

export const { setActivePDForNumber } = PDFSlice.actions;

export default PDFSlice.reducer;
