import { Link } from "react-router-dom";
export default function Nav(props) {
    const handlechange =()=>{
        props.setFiles(null);
    }
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/File_encryptor" onClick={handlechange}>File Encryptor</Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/File_encryptor" onClick={handlechange}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/About">About</Link>
                        </li>
                    </ul>
            </div>
        </nav>
    );
}