import './drag.css';
import { useState } from 'react';
import { Blowfish } from 'javascript-blowfish';
import Drag_drop from './Drag_drop';


export default function Blowfish_Algo(props) {
    const [vars, setVars] = useState({ secret: ""});
    const handle_Encryption = () => {
        const bf = new Blowfish(vars.secret);
        let file = props.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const text = e.target.result;
                const encryptedText = bf.encrypt(text).toString();
                downloadFile(encryptedText, "encrypted.txt");
                props.alert("Successfully Encrypted");

            };
            reader.readAsText(file);
        }
    }

    const handle_Decryption = () => {
        const bf = new Blowfish(vars.secret);
        //key should be a multiple of 8 bytes...
        let file = props.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const text = e.target.result;
                let decrypted = bf.decrypt(text);
                decrypted = decrypted.replace(/\0/g, '');
                downloadFile(decrypted, "decrypted.txt");
                props.alert("Successfully Decrypted");

            };
            reader.readAsText(file);
        }
    }
    function downloadFile(content, filename) {
        const blob = new Blob([content], { type: "text/plain" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        a.onclick = (event) => { event.preventDefault() };
        window.URL.revokeObjectURL(url);
    }
    return (
        <div className="container mt-5">
            <h1 className="text-light text-bold text-center">
                Blowfish Algorithm
            </h1>
            <div className="contain">
                {
                    <Drag_drop files={props.files} setFiles={props.setFiles} />
                }
            </div>
            <div className="container text-light mt-5">
                <div className="contain">
                    <p className='display-4 text-bold'> Secret key:</p>
                    <input type="password" value={vars.secret} onChange={(event) => {
                        setVars((prev) => {
                            return { ...prev, secret: event.target.value }
                        })
                    }} aria-describedby="passwordHelpBlock"></input>
                </div>
                {
                    (props.files) && <div className="contain_r">
                        <h1 className='display-4 text-center text-light'>Your Files are: </h1>
                        <div className='container mt-3 text-center'>
                            {Array.from(props.files).map((file, idx) =>
                                <li key={idx} style={{ color: 'white' , fontSize  : '20px'}}>{file.name}</li>
                            )}
                        </div>
                    </div>
                }
                <div className='contain'>
                    <button className='btn btn-danger btn-lg mt-5' onClick={handle_Encryption}>Encrypt</button>
                    <button className='btn btn-warning btn-lg mt-5' onClick={handle_Decryption}>Decrypt</button>
                </div>
            </div>
        </div>
    );

}