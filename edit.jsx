import React,{createRef, useState} from "react";
import {exportComponentAsJPEG} from "react-component-export-image"
import Button from "react-bootstrap/Button";

import { useSearchParams } from "react-router-dom";
import Text from "../components/text";

const EditPage = () =>{
    const [params] = useSearchParams();
    const [count,setCount] = useState(0);
    const addtext = () =>{setCount(count+1)

    }
    const memeref= createRef();
    // const saveMeme = () => {
    //     // Ensure memeref.current is a RefObject
    //     exportComponentAsJPEG(memeref.current);
    //   };
   

    return (
        <div>
        <div ref={memeref } className="meme mt-5 mb-5">
            <img  src={params.get("url")}  width='500px' alt="Meme"/>
            {Array(count).fill(0).map((_,index)=>(<Text key = {index}/>))}
        </div>
            <Button onClick={addtext}>add text</Button>
            <Button onClick={exportComponentAsJPEG(memeref)}>Save</Button>
        </div>
    )

} 

export default EditPage;

