


import React, { useState } from "react";
import styles from "./Styles.css";
import FileUpload from './FileUploader'; // Corrected import path

const Loginform = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate email format
        if (!email.match(emailPattern)) {
            alert("Invalid email format");
            return;
        }

        // Perform login logic here
    };

    return (
        <div className={styles.loginForm}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>Email:</label>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit" className={styles.loginButton}>Login</button>
            </form>
            <div className={`${styles.separator} ${styles.center}`}>
                <span className={styles.separatorText}>or login using</span>
            </div>
            <div>
                {/* <FileUpload /> File Upload to Azure Blob Storage */}
            </div>
        </div>
    );
}

export default Loginform;


