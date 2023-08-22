export default function About() {
    return (
        <div className="container">
            <h1 className='display-3 text-light mb-4'>About Us : </h1>
            <p className="lead text-light">
                AES, which stands for Advanced Encryption Standard, is a widely-used symmetric encryption algorithm. Established as a federal standard by the U.S. National Institute of Standards and Technology (NIST) in 2001, AES is the basis for many security products and protocols in use today.
                <br /><br /><strong>Here's a brief overview of AES and how it works:</strong>
                <ul>
                    <li><strong>Symmetric Encyption: </strong><p className="lead text-light">This means that the same key is used for both encryption and decryption. In contrast, asymmetric encryption (e.g., RSA) uses a pair of public and private keys.</p></li>
                    <li><strong>Block Cipher: </strong><p className="lead text-light">This means that the same key is used for both encryption and decryption. In contrast, asymmetric encryption (e.g., RSA) uses a pair of public and private keys.</p></li>
                    <li><strong>Key Lengths: </strong><p className="lead text-light">AES can operate with three different key lengths:
                        <ul>
                            <li>AES-128 uses a 128-bit key.</li>
                            <li>AES-192 uses a 192-bit key.</li>
                            <li>AES-256 uses a 256-bit key.</li>
                        </ul>
                        The number of rounds in the encryption process varies depending on the key length: 10 rounds for 128-bit keys, 12 rounds for 192-bit keys, and 14 rounds for 256-bit keys.</p></li>
                    <li><strong>Rounds: </strong><p className="lead text-light">Encryption in AES involves several rounds of processing. Each round includes various operations like SubBytes, ShiftRows, MixColumns, and AddRoundKey. These operations provide both confusion and diffusion in the cipher, making it resistant to cryptographic attacks.</p></li>
                    <li><strong>S-Boxes: </strong><p className="lead text-light">The SubBytes step uses a substitution box (S-Box) to replace bytes. This non-linear substitution provides the confusion aspect in the cipher.</p></li>
                    <li><strong>Initialization Vector (IV): </strong><p className="lead text-light">While not a part of the AES algorithm itself, many modes of operation (like CBC or GCM) use an IV or nonce to ensure that the same plaintext will not result in the same ciphertext when encrypted multiple times.</p></li>
                    <li><strong>Modes of Operation: </strong><p className="lead text-light">AES itself just specifies the block cipher, but the way we use it can vary. There are different modes of operation like ECB (Electronic Codebook), CBC (Cipher Block Chaining), CFB (Cipher Feedback), OFB (Output Feedback), and GCM (Galois/Counter Mode). Some modes (like ECB) are considered less secure for most applications, while others (like GCM) offer both encryption and authentication.</p></li>
                    <li><strong>Security: </strong><p className="lead text-light">AES is considered secure against all known practical attacks when used correctly. While there are theoretical attacks against AES, they are not practical in real-world scenarios. It's also important to note that the security of encrypted data isn't just about the encryption algorithm but also about how it's implemented and used.</p></li>
                </ul>
                <p className="lead text-light">To sum up, AES is a robust and versatile encryption standard that serves as the foundation for a vast array of security tools and protocols. Proper implementation and key management are critical to ensuring the security of AES-encrypted data.</p>
                <h1 className='display-3 text-light mt-4'>How the Encryptor works? : </h1>
                <p className="lead text-light mt-3"> This Encryptor uses the <strong>CryptoJs</strong> library which allow us to encrypt and decrypt the data , all the operations are performed with the help of Array buffer. This web application also allow the user to download the encypted and decrypted file with just a <strong>Click!</strong></p>
            </p>
        </div>
    );
}