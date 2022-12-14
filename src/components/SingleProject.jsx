import { Box, Button, Center, Flex, Image, SimpleGrid, Text, WrapItem } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaGithub, FaEye, FaExternalLinkAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './project.css '
export default function SingleProject({ hero, name, skills, status, about, github, live, }) {
    const { isDark } = useContext(AppContext);
    return (

        <Box data-aos="zoom-in" fontFamily={'Space Grotesk'} _hover={{
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 3px 9px 0px'
        }} style={
            isDark ? {
                color: 'white',
                background: "black",
            } : {
                background: "white"
            }
        } borderRadius={'10px'} px='10px' py={['10px', null, '20px']} flexDirection='column' >
            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }} >
                <Box borderRadius="8px" overflow={'hidden'} borderBottom='0.5px solid '>
                    <Image _hover={{ transform: 'scale(1.1)' }} style={{ transition: '.5s transform linear' }} borderRadius="8px" cursor={'pointer'} src={hero} alt={name} />
                </Box>
                <Text fontSize={['1.5rem']} align={'center'}>{name}</Text>
                <Box pl={'9px'} border='1px solid transparent' >
                    <Box border='1px solid transparent' display={'flex'} flexDirection='column' gap={['10px', null, '15px']} >
                        <Text fontSize={['15px', '17px', '18px']} >
                            {about}
                        </Text>
                        <Text fontSize={['15px', '17px', '18px']} >
                            {status}
                        </Text>
                        <Text h={'6rem'} fontSize={['15px', '17px', '18px']} >
                            <span style={{
                                color: '#4070f4'
                            }}>Tech Stack:</span>  {skills.join(" | ")}
                        </Text>
                    </Box>
                    <Flex mt={['10px']} gap={'13px'} mb='15px' fontFamily={'Poppins, sans-serif'} letterSpacing='1px'>
                        <Button style={{
                            background: "#4070f4",
                            color: 'white',
                            border: '1.3px solid transparent(--primary-color) !important',

                        }}
                            _hover={{
                                background: "white !important",
                                color: '#4070f4 !important',
                                border: '1.3px solid (--primary-color) !important'
                            }}
                            border='1px solid #4070f4'
                            onClick={() => window.open(github, '_blank')}>
                            Code <FaGithub />
                        </Button>
                        <Button style={{

                            background: "#4070f4",
                            color: 'white',
                        }}
                            _hover={{
                                background: "white !important",
                                color: '#4070f4 !important',
                                border: '1.3px solid #4070f4'
                            }}
                            border='1px solid #4070f4'
                            onClick={() => window.open(live, '_blank')} >
                            Demo <FaExternalLinkAlt style={{ width: "15px" }} />
                        </Button>

                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
