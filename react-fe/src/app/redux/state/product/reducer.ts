'use client';
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import HttpService from "../../../../service/http.service";
import { IPDFState } from "./PDFSlice";
import { PDF } from "@/types/pdf.type";

export const getAllPDFFiles = createAsyncThunk<{ result: PDF[] }, { rejectValue: { error: string } }>(
  "pdfs/all",
  async (_, thunkAPI) => {
    try {
      const data = await HttpService.get(`/pdfs/all`);
      return data as { result: PDF[] };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const uploadPDF = createAsyncThunk<{ result: PDF }, { rejectValue: { error: string } }>(
  "pdfs/add",
  async (payload: any, thunkAPI) => {
    try {
      const formdata = new FormData();
      const {file, filename, legalDocNumber} = payload;
      formdata.append("file", file, filename);
      formdata.append("legalDocNumber",legalDocNumber);
      const data = await HttpService.upload(`/pdfs/upload`, formdata );
      return data as { result: PDF };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const setActivePDForNumber = (state: IPDFState, action: PayloadAction<PDF | number>) => {
  const payload = action.payload;
  state.activePDF = null;

  if(typeof payload === 'number') {
    state.activeNumber = payload;
    return
  }

  const selectedProduct = state.list.find(
    (item) => item.id === payload.id
  );

  if (selectedProduct) {
    state.activePDF = { ...selectedProduct };
  }
};

export const reducer = {
  setActivePDForNumber,
};
