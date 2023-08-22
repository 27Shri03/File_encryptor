import { useRef, useState } from 'react';
import './encrypt.css'
export default function Drag_drop(props) {
    const handledrag = (event) => {
        event.preventDefault();
    }

    const handledrop = (event) => {
        event.preventDefault();
        props.setFiles(event.dataTransfer.files);
    }

    const inputref = useRef();
    return (
        <>
            {!props.files && (
                <div className="out">
                    <h1 className="display-4 text-light">Drop your file here : </h1>
                    <div className='hold' onDragOver={handledrag} onDrop={handledrop}>
                        <p className='para' >Here , &#128526;
                        </p>
                    </div>
                    <h1 className="display-4 text-light mt-3">OR  </h1>
                    <input type="file" multiple onChange={(event) => { props.setFiles(event.target.files) }} hidden
                        ref={inputref} />
                    <button type="button" className="btn btn-secondary btn-lg mt-3" onClick={() => { inputref.current.click() }}>Select Files</button>
                </div>
            )}
        </>
    );
}