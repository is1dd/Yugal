import { Box, Center, Image, SimpleGrid, Text, Wrap, WrapItem } from '@chakra-ui/react';
import styles from './Skills.module.css';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Skills({ logos, skill }) {
    const { isDark } = useContext(AppContext);
    AOS.init({ duration: 1200 });
    return (
        <>
            {/* <div className={styles.skillsStyle}>
                <Text fontSize={['22px', '30px', '40px']} color={'lightslategray'} align='center'>
                    {skill}
                </Text>
            </div> */}
            <SimpleGrid data-aos="zoom-in" columns={[2, 4, 5, 6]} m='auto' w={['97%', '95%', '90%']} p={['20px 15px', '20px 0px', '20px 20px', '20px 20px']} className={styles.Container1} spacingX={['15px', '35px', '50px']} spacingY='25px' justify='center'>
                {
                    logos.map((logo) => (
                        <Box key={logo.skill} >
                            <Center style={
                                isDark ? {
                                    background: "#0f1624",
                                    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                                } : {
                                    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'

                                }
                            } className={styles.skillDiv} p={['18px', '15px', '20px', '20px']} h={['160px']} w={['135px', '110%', '138px', '138px']}>
                                <Image w={['80px', '90px', '100px', '100px']} h={['80px', '90px', '100px', '100px']} src={logo.logo} alt={logo.skill} />
                                <Text fontFamily={'Space Grotesk'} fontSize={['14px', '15px', '16px']}
                                    style={{
                                        color: 'lightslategray',
                                    }}
                                >{logo.skill}</Text>
                            </Center>
                        </Box>

                    ))
                }
            </SimpleGrid>
        </>
    )
};
// w={['120px', '165px', '180px']}