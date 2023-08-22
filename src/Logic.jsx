import Encrypt from "./Encrypt";
import './encrypt.css'
import { Link } from 'react-router-dom';

export default function Logic(props) {
    const handleencrypt = ()=>{
        props.alert("Switched to Encryption Mode....");
        props.setFiles(null);
    }

    const handledecrypt=()=>{
        props.alert("Switched to Decryption Mode....");
        props.setFiles(null);
    }
    return (
        <div className="container text-center text-light">
            <h1 className="display-5"> Select the process: </h1>
            <div className="container mt-3 ">
                <Link type="button" className="btn btn-danger btn-large m-3" to="/File_encryptor" onClick={handleencrypt}>Encrypt</Link>
                <Link type="button" className="btn btn-warning btn-large m-3" to="/decrypt" onClick={handledecrypt}>Decrypt</Link>
            </div>
        </div>
    );
}