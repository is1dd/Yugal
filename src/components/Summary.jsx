import { Box, Text } from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Summary() {
    AOS.init({ duration: 1200 });
    return (
        <Box data-aos="zoom-in"  pl={['0rem', '0rem', '1.5rem', '2.5rem']} pt={['1.5rem', '3rem', '4.4rem', '5.5rem']} border='1px solid transparent' w={['100%', '100%', '50%', '50%']}>
            <Text fontFamily={'Poppins'} textAlign={['center', 'center', 'start', 'start']} fontSize={['2rem', '3rem', '3.5rem']}>  <span style={{ color: ' #4070f4' }}>I'm</span> Yugal Kumar</Text>
            <Text fontFamily={'Poppins'} fontSize={['1.1rem', '1.2rem', '1.25rem']} px={['0.4rem', '0rem', '0rem']} textAlign={['center', 'center', 'start', 'start']}>
                I'm an enthusiastic, self-motivated, and ambitious full-stack web
                developer with 1000+ hours of hands-on coding experience.
                Excellent programming record and a brilliant team player who
                can work collaboratively with the team even in adverser
                situations and short deadlines.
            </Text>
        </Box>
    )
}