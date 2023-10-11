import { useState } from "react";
import Drag_drop from "./Drag_drop";
import './drag.css'

export default function Caesar(props) {
    const [vars, setVars] = useState({ key: "" });
    const handle_Encryption = () => {
        let file = props.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const text = e.target.result;
                const encryptedText = Encryption(text, parseInt(vars.key));
                downloadFile(encryptedText, "encrypted.txt");
                props.alert("Successfully Encrypted");

            };
            reader.readAsText(file);
        }
    }
    const handle_Decryption = () => {

        let file = props.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const text = e.target.result;
                const decryptedText = Decryption(text, 26 - parseInt(vars.key));
                downloadFile(decryptedText, "decrypted.txt");
                props.alert("Successfully Decrypted");

            };
            reader.readAsText(file);
        }
    }

    function Encryption(text, shift) {
        if (shift < 0 || shift > 25) {
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
        return result;
    }
    function Decryption(text, shift) {
        if (shift < 1 || shift > 26) {
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
        return result;
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
                Caesar Cipher Algorithm
            </h1>

            <div className="container text-light mt-5">
                <div className="contain">
                    {
                        <Drag_drop files={props.files} setFiles={props.setFiles} />
                    }
                </div>

                <div className="contain">
                    <p className='display-4 text-bold'> key:</p>
                    <input type="password" value={vars.key} onChange={(event) => {
                        setVars((prev) => {
                            return { ...prev, key: event.target.value }
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
                    <button className='btn btn-danger mt-5' onClick={handle_Encryption}>Encrypt</button>
                    <button className='btn btn-warning mt-5' onClick={handle_Decryption}>Decrypt</button>
                </div>
            </div>
        </div>
    );
}