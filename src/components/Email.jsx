import emailImg from '../Images/emailImg.png';
import emailGif from '../Images/emailGif.gif';
import { Image } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Email() {
    AOS.init({ duration: 1200 });
    return (
        <Image data-aos="zoom-in" src={emailGif} w={['85%', null, '75%']} />
    )
}