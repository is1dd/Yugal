import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Email from "./Email";
import { Form } from "./Form";
import { SiGmail } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Contact() {
    AOS.init({ duration: 1200 });
    return (
        <Flex  border='1px solid trasparent' justify={'space-between'} direction={['column', 'column', 'row', 'row']}>
            <Box justify='center' align='center' border='1px solid transparent' w={['100%', null, '47%']} >
                <Email />
            </Box>
            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "center"
            }} w={['100%', null, '47%']} justify='center' align='center' border='1px solid transparent'>
                <HStack data-aos="zoom-in-down" justify={'center'} m=' 0 auto' mt={['30', '0', '0']} w={['90%', '75%', '70%']} align='center' spacing={['3', null, '5']}>
                    <Button fontSize={['14', '16', '18']} colorScheme='linkedin' onClick={() => window.open('https://www.linkedin.com/in/#/', '_blank')} leftIcon={<FaLinkedin />}>
                        LinkedIn
                    </Button>
                    <Button fontSize={['14', '16', '18']} variant='outline' style={{
                        background: "rgb(55, 59, 65)",
                        color: "white"
                    }}
                        onClick={() => window.open('https://github.com/hello', '_blank')}
                        leftIcon={<FaGithub />}
                        _hover={{
                            background: 'rgb(37 40 45) !important'
                        }}
                    >
                        Github
                    </Button>
                    <Button fontSize={['14', '16', '18']}  colorScheme='red'
                        onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=yugal@gmail.com', '_blank')}
                        leftIcon={<SiGmail />}>
                        Gmail
                    </Button>
                </HStack>
                <Form />
            </Box>
        </Flex >
    )
}