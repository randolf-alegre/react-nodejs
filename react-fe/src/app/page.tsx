"use client";

import { useEffect, useState } from "react";
import { getAllPDFFiles } from "./redux/state/product/reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import PDFList from "./components/pdf-list";
import Modal from "./components/modal";

export default function Home() {
  const pdfs = useSelector((state: RootState) => state.pdf);
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false)
  useEffect(() => {
    dispatch(getAllPDFFiles({
      rejectValue: {
        error: ""
      }
    }));
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="">
        <div>
          <PDFList pdfs={pdfs.list} setOpen={setOpen} />
        </div>

        <Modal state={open} setState={setOpen} />
      </div>
    </main>
  );
}
