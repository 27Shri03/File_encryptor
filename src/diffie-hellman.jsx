import './menu.css';
import { useState } from 'react';
export default function Diffie_Hellman(props) {
    const [process, setProcess] = useState(false);
    const [vars, setVars] = useState({ Prime: '', base: '', public_keyA: null, public_keyB: null, SharedssA: null, SharedssB: null });
    function generateRandom() {
        return (Math.floor(Math.random() * 100));
    }
    const handleKeys = () => {
        let publicA, publicB, privateA, privateB, ssA, ssB;
        const prime = BigInt(vars.Prime);
        const base = BigInt(vars.base);

        privateA = BigInt(generateRandom());
        privateB = BigInt(generateRandom());

        publicA = (base ** privateA) % prime;
        publicB = (base ** privateB) % prime;
        ssA = (publicB ** privateA) % prime;
        ssB = (publicA ** privateB) % prime;

        setVars((prev) => {
            return {
                ...prev,
                public_keyA: publicA.toString(),
                public_keyB: publicB.toString(),
                SharedssA: ssA.toString(),
                SharedssB: ssB.toString()
            };
        })
        setProcess(true);
    }
    return (
        <div className="container mt-5">
            <h1 className="text-light text-bold text-center">
                Diffie - Hellman Algorithm
            </h1>
            <div className="container text-light mt-5">
                <div className="contain">
                    <p className='display-4 text-bold'> Global Prime :</p>
                    <input type="number" value={vars.Prime} onChange={(event) => {
                        setVars((prev) => {
                            return { ...prev, Prime: event.target.value }
                        })
                    }} aria-describedby="passwordHelpBlock"></input>
                </div>
                <div className="contain">
                    <p className='display-4 text-bold'> Base :</p>
                    <input type="number" value={vars.base} onChange={(event) => {
                        setVars((prev) => {
                            return { ...prev, base: event.target.value }
                        })
                    }} aria-describedby="passwordHelpBlock"></input>
                </div>
                <div className='container'>
                    <button className='btn btn-primary btn-lg mt-5' onClick={handleKeys}>Create keys</button>
                </div>
                {
                    process && <div className="container"><p className='display-4 text-bold mt-4'>Public Key(A): {vars.public_keyA}</p>
                        <p className='display-4 text-bold mt-4'>Public Key(B): {vars.public_keyB}</p>
                        <p className='display-4 text-bold mt-4'>Shared Secret (A): {vars.SharedssA}</p>
                        <p className='display-4 text-bold mt-4'>Shared Secret (B): {vars.SharedssB}</p>
                    </div>
                }
            </div>
        </div>
    );
}