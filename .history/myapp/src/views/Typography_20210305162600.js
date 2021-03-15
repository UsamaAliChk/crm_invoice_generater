import React,{useState,useEffect} from 'react'
import { pdf } from "@react-pdf/renderer";
import {useSelector} from 'react-redux'
import Report from './Report'
export default function PDFView() {
    const data=useSelector(state=>state.getData)
    const [pdfLink,setpdfLink]=useState('')
    const openpdf = async () => {
       let blob= await pdf(
          <Report Data={data}/>
        ).toBlob()
        setpdfLink(window.URL.createObjectURL(blob));
    }
    useEffect(()=>{
        openpdf()
    },[])
    return (
        <div>
            <h1>Usama</h1>
            {
               
                
            }
            <iframe style={{ width: "100%", height: "600px" }} src={pdfLink}></iframe>
        </div>
    )
}