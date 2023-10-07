import './menu.css'
import { Link } from 'react-router-dom';
export default function Menu() {
    return (
        <>
            <h1 className="display-1 text-center text-light">Choose the algorithm: </h1>
            <div className="jod">
                <Link to="/AES" type="button btn-large" className="btn btn-primary">AES Algorithm</Link>
                <Link to="/blowfish" type="button btn-lg" className="btn btn-secondary">Blowfish Algorithm</Link>
                <Link to="/diffie_hellman" type="button" className="btn btn-success">Diffie - Hellman</Link>
                <Link to="/caesar_cipher" type="button" className="btn btn-danger">Caesar Cipher</Link>
                <Link to="/RSA" type="button" className="btn btn-warning">RSA Algorithm</Link>
            </div>
        </>
    );
}