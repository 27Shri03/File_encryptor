import './menu.css';
import { useState } from 'react';
import { Blowfish } from 'javascript-blowfish';


export default function Blowfish_Algo(props) {
    const [process, setProcess] = useState({ Encrypt: false, Decrypt: false });
    const [vars, setVars] = useState({ secret: "", message: "", enc: "", dec: "" });
    const handle_Encryption = () => {
        const bf = new Blowfish(vars.secret);
        props.alert("Successfully Encrypted");
        let encrypted = bf.encrypt(vars.message).toString();
        setVars((prev) => {
            return { ...prev, enc: encrypted };
        })
        setProcess((prev) => {
            return { ...prev, Encrypt: true, Decrypt: false };
        })
    }

    const handle_Decryption = () => {
        const bf = new Blowfish(vars.secret);
        props.alert("Successfully Decrypted");
        //key should be a multiple of 8 bytes...
        let decrypted = bf.decrypt(vars.message);
        decrypted = decrypted.replace(/\0/g, '');
        setVars((prev) => {
            return { ...prev, dec: decrypted };
        });
        setProcess((prev) => {
            return { ...prev, Decrypt: true, Encrypt: false };
        });
    }
    return (
        <div className="container mt-5">
            <h1 className="text-light text-bold text-center">
                Blowfish Algorithm
            </h1>
            <div className="container text-light mt-5">
                <div className="contain">
                    <p className='display-4 text-bold'> Secret key:</p>
                    <input type="password" value={vars.secret} onChange={(event) => {
                        setVars((prev) => {
                            return { ...prev, secret: event.target.value }
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
                    <button className='btn btn-danger btn-lg mt-5' onClick={handle_Encryption}>Encrypt</button>
                    <button className='btn btn-warning btn-lg mt-5' onClick={handle_Decryption}>Decrypt</button>
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