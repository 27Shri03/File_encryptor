import { useState } from "react";
import './menu.css'
export default function RSA(props) {
    const [process, setProcess] = useState({ Encrypt: false, Decrypt: false });
    const [vars, setVars] = useState({ P: "", Q: "", message: "", public_key: null, exponent: null, private_key: null, cipher: "", dec: null });
    const handle_Encryption = () => {
        let p = BigInt(vars.P);
        let q = BigInt(vars.Q);
        let no = BigInt(vars.message);
        let gcd = function (a, b) { return (!b) ? a : gcd(b, a % b); };
        let n = p * q;
        let t = (p - 1n) * (q - 1n);
        let x, d, e, i, ct, dt;
        // We'll use BigInt for e as well
        for (e = 2n; e < t; e++) {
            if (gcd(e, t) == 1n) {
                break;
            }
        }
        for (i = 0; i < 10; i++) {
            x = 1n + BigInt(i) * t;
            if (x % e == 0n) {
                d = x / e;
                break;
            }
        }
        // Encryption
        ct = no ** e % n;
        // Decryption
        dt = ct ** d % n;
        setVars((prev) => {
            return {
                ...prev,
                public_key: n.toString(),
                exponent: e.toString(),
                private_key: d.toString(),
                cipher: ct.toString(),
                dec: dt.toString()
            };
        });
        setProcess((prev) => {
            return { ...prev, Encrypt: true, Decrypt: false };
        })
    }
    const handle_Decryption = () => {
        setProcess((prev) => {
            return { ...prev, Encrypt: false, Decrypt: true };
        })
    }
    return (
        <div className="container mt-5">
            <h1 className="text-light text-bold text-center">
                Rivest Shamir Adleman Algorithm
            </h1>
            <div className="container text-light mt-5">
                <div className="contain">
                    <p className='display-4 text-bold'> P (Prime Number 1):</p>
                    <input type="number" value={vars.P} onChange={(event) => {
                        setVars((prev) => {
                            return { ...prev, P: event.target.value }
                        })
                    }} aria-describedby="passwordHelpBlock"></input>
                </div>
                <div className="contain">
                    <p className='display-4 text-bold'> Q(Prime Number 2):</p>
                    <input type="number" value={vars.Q} onChange={(event) => {
                        setVars((prev) => {
                            return { ...prev, Q: event.target.value }
                        })
                    }} aria-describedby="passwordHelpBlock"></input>
                </div>
                <div className="contain">
                    <p className='display-4 text-bold'> Message:</p>
                    <input type="number" value={vars.message} onChange={(event) => {
                        setVars((prev) => {
                            return { ...prev, message: event.target.value }
                        })
                    }} aria-describedby="passwordHelpBlock"></input>
                </div>
                <div className="contain">
                    <p className='display-4 text-bold'> Cipher Text:</p>
                    <input type="number" value={vars.cipher} onChange={(event) => {
                        setVars((prev) => {
                            return { ...prev, cipher: event.target.value }
                        })
                    }} aria-describedby="passwordHelpBlock"></input>
                </div>
                <div className='container'>
                    <button className='btn btn-danger btn-lg mt-5' onClick={handle_Encryption}>Encrypt</button>
                    <button className='btn btn-warning btn-lg mt-5' onClick={handle_Decryption}>Decrypt</button>
                </div>
                {
                    (process.Encrypt) && <div className="container"><p className='display-4 text-bold mt-4'>Public Key(N): {vars.public_key}</p>
                        <p className='display-4 text-bold mt-4'>Private Key(d): {vars.private_key}</p>
                        <p className='display-4 text-bold mt-4'>Exponent(e): {vars.exponent}</p>
                        <p className='display-4 text-bold mt-4'>Cipher Text(ct): {vars.cipher}</p>
                    </div>
                }
                {
                    (process.Decrypt) && <p className='display-4 text-bold mt-4'>Decrypted Message: {vars.dec}</p>
                }
            </div>
        </div>
    );
}