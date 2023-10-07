import { useState } from "react";
import './menu.css';
export default function Caesar(props) {
    const [process, setProcess] = useState({ Encrypt: false, Decrypt: false });
    const [vars, setVars] = useState({ key: "", message: "", enc: "", dec: "" });
    function handle_Encryption(text, shift) {
        if(shift<0 || shift >25){
            props.alert("Key Size should be between 0 and 25");
            return;
        }
        let result = "";
        for (let i = 0; i < text.length; i++) {
            let char = text.charCodeAt(i);
            if (char >= 97 && char <= 122) { // 'a' to 'z'
                result += String.fromCharCode(97 + (char - 97 + shift) % 26);
            } else if (char >= 65 && char <= 90) { // 'A' to 'Z'
                result += String.fromCharCode(65 + (char - 65 + shift) % 26);
            } else {
                result += text.charAt(i); // Other characters remain unchanged
            }
        }
        setVars((prev) => {
            return { ...prev, enc: result };
        })
        setProcess((prev) => {
            return { ...prev, Encrypt: true, Decrypt: false };
        })
        props.alert("Successfully Encrypted");
    }
    function handle_Decryption(text , shift){
        if(shift<1 || shift >26){
            props.alert("Key Size should be between 0 and 25");
            return;
        }
        let result = "";
        for (let i = 0; i < text.length; i++) {
            let char = text.charCodeAt(i);
            if (char >= 97 && char <= 122) { // 'a' to 'z'
                result += String.fromCharCode(97 + (char - 97 + shift) % 26);
            } else if (char >= 65 && char <= 90) { // 'A' to 'Z'
                result += String.fromCharCode(65 + (char - 65 + shift) % 26);
            } else {
                result += text.charAt(i); // Other characters remain unchanged
            }
        }
        setVars((prev) => {
            return { ...prev, dec: result };
        })
        setProcess((prev) => {
            return { ...prev, Encrypt: false, Decrypt: true };
        })
        props.alert("Successfully Decrypted");
    }
    return (
        <div className="container mt-5">
            <h1 className="text-light text-bold text-center">
                Caesar Cipher Algorithm
            </h1>
            <div className="container text-light mt-5">
                <div className="contain">
                    <p className='display-4 text-bold'> key:</p>
                    <input type="password" value={vars.key} onChange={(event) => {
                        setVars((prev) => {
                            return { ...prev, key: event.target.value }
                        })
                    }} aria-describedby="passwordHelpBlock"></input>
                </div>
                <div className="contain">
                    <p className='display-4 text-bold'> Message:</p>
                    <input type="text" value={vars.message} onChange={(event) => {
                        setVars((prev) => {
                            return { ...prev, message: event.target.value }
                        })
                    }} aria-describedby="passwordHelpBlock"></input>
                </div>
                <div className='container'>
                    <button className='btn btn-danger btn-lg mt-5' onClick={() => { handle_Encryption(vars.message, parseInt(vars.key)) }}>Encrypt</button>
                    <button className='btn btn-warning btn-lg mt-5' onClick={() => { handle_Decryption(vars.message, 26-parseInt(vars.key)) }}>Decrypt</button>
                </div>
                {
                    (process.Encrypt) && <p className='display-4 text-bold mt-4'>Encrypted Message: {vars.enc}</p>
                }
                {
                    (process.Decrypt) && <p className='display-4 text-bold mt-4'>Decrypted Message: {vars.dec}</p>
                }
            </div>
        </div>
    );
}