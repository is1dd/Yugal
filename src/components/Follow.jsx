
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import React, { useContext } from 'react'
import './Follow.css'
import { AppContext } from "../context/AppContext";
export default function Follow() {
    const { isDark } = useContext(AppContext);
    return (
        <div className="follow">
            <div className="icons1">
                <a href="https://github.com/" target="_blank">
                    <FaGithub className='git' style={
                        isDark ? {
                            fill: "white",
                        } : {
                            fill: "#2b221c"
                        }
                    } />
                </a>
            </div>
            <div className="icons1">
                <a href="https://www.linkedin.com/in/" target="_blank">
                    <FaLinkedin className='linked' />
                </a>
            </div>
        </div>
    )
}
