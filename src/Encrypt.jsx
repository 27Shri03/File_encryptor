import { useState } from 'react';
import CryptoJS from 'crypto-js';
import './encrypt.css'
import Drag_drop from './Drag_drop';
export default function Encrypt(props) {
    const copy = () => {
        props.alert("Text Copied");
        navigator.clipboard.writeText(props.mint);
    }
    function generate_key() {
        let sin = CryptoJS.lib.WordArray.random(256 / 8).toString();
        props.alert("Key Generated!!");
        props.Setkey(sin);
        return sin;
    }
    function Encryption(file, key) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const fileData = new Uint8Array(event.target.result);
            const wordArray = CryptoJS.lib.WordArray.create(fileData);
            const encryptedData = CryptoJS.AES.encrypt(wordArray, key).toString();
            const encryptedBlob = new Blob([encryptedData], { type: 'application/octet-stream' });
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(encryptedBlob);
            downloadLink.download = file.name + '.enc';
            downloadLink.click();
            downloadLink.onclick = (event) => { event.preventDefault() };
            props.alert('File encrypted successfully.');
        };
        reader.readAsArrayBuffer(file);
    }
    const enc = () => {
        const key = generate_key();
        Encryption(props.files[0], key);
    }
    return (
        <div className='jod' >
            <Drag_drop files={props.files} setFiles={props.setFiles} alert={alert}/>
            {(props.files) ?
                <div className="out">
                    <h1 className='display-4 text-center text-light'>Your Files are: </h1>
                    <div className='container mt-3 text-center'>
                        {Array.from(props.files).map((file, idx) =>
                            <li key={idx} style={{ color: 'white' }}>{file.name}</li>
                        )}
                    </div>
                    <button type="button" className="btn btn-primary mt-3" onClick={enc} id='parent'>Apply Encryption</button>
                    <div className="form-floating mt-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="Key" value={props.mint} />
                        <label htmlFor="floatingInput" >Key</label>
                    </div>
                    <button type="button" className="btn btn-success mt-3" onClick={copy}>Copy Key</button>

                </div> : <p></p>}
        </div>
    );
}