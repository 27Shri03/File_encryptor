import { useState } from 'react';
import './encrypt.css'
import CryptoJS from 'crypto-js';
import Drag_drop from './Drag_drop';
export default function Decrypt(props) {
    const [userKey, setuserKey] = useState(null);
    function decryption(key, file) {
        const reader = new FileReader();
        reader.onload =  (event) => {
            const encryptedData = event.target.result;
            const decryptedData = CryptoJS.AES.decrypt(encryptedData, key);
            const decryptedBytes = new Uint8Array(decryptedData.sigBytes);
            for (let i = 0; i < decryptedData.sigBytes; i++) {
                decryptedBytes[i] = decryptedData.words[i >>> 2] >>> 24 - (i % 4) * 8 & 0xff;
            }
            const decryptedBlob = new Blob([decryptedBytes], { type: file.type });
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(decryptedBlob);
            downloadLink.download = file.name.replace('.enc', '');
            downloadLink.click();
            downloadLink.onclick = (event) => { event.preventDefault() };
            props.alert('File decrypted successfully.');
        };
        reader.readAsText(file);
    }

    const handleDecryption = () => {
        // if (userKey === props.mint) {
        decryption(userKey, props.files[0]);
        // }
        // else{
        //     props.alert("Wrong Key is entered....Please try again!!");
        //     setuserKey(null);
        // }
    }


    return (
        <div className='jod'>
            <Drag_drop files={props.files} setFiles={props.setFiles} alert={alert} />
            {(props.files) ?
                <div className="out">
                    <h1 className='display-4 text-center text-light'>Your Files are: </h1>
                    <div className='container mt-3 text-center'>
                        {Array.from(props.files).map((file, idx) =>
                            <li key={idx} style={{ color: 'white' }}>{file.name}</li>
                        )}
                    </div>
                    <div className="row g-3 align-items-center mt-3">
                        <div className="col-auto">
                            <label htmlFor="inputPassword6" className="col-form-label text-light">Key :</label>
                        </div>
                        <div className="col-auto">
                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" onChange={(event) => { setuserKey(event.target.value) }} />
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary mt-3" onClick={handleDecryption}>Apply Decryption</button>
                </div> : <p></p>}
        </div>
    );
}