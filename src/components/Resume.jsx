import React from 'react'
import './Resume.css';
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { Button, IconButton } from '@chakra-ui/react';
export default function Resume() {
    return (

        <div id="buttons">
            <a href="Aman_Resume.pdf" style={{
                display: 'flex'
            }} download="Aman_Resume.pdf">
                <Button rightIcon={<FaDownload />} id='resume' colorScheme='blue' variant='outline'>
                    Resume
                </Button>
            </a>
            <Button w='111px' className='hire' >
                <Link to="contact"
                    smooth={true}
                    duration={1000}
                    spy={true}
                    offset={-50}
                >
                    Hire Me
                </Link>


            </Button>

        </div>
    )
}
