import { Box, IconButton, Text, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdCall, MdMailOutline } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
export default function Footer() {
    const { isDark } = useContext(AppContext);
    return (
        <Box style={
            isDark ? {
                color: 'white '
            } : {

            }
        } mt={'3rem'} mb={'0.8rem'} fontSize={['1rem', '1.25rem', '1.25rem']} justify='center' fontFamily={'Space Grotesk'} align='center'>
            <VStack>
                {/* <ul>
                    <li style={{ listStyle: 'none' }}>
                        <HStack >
                            <MdCall style={{ fill: 'var(--primary-color)' }} />
                            <Text>+91 9165148159</Text>
                        </HStack>

                    </li>
                    <li style={{ listStyle: 'none' }}>
                        <HStack align='center'>
                            <MdMailOutline style={{
                                fill: 'var(--primary-color)'
                            }} />
                            <Text>
                                amanofficial2030@gmail.com

                            </Text>
                        </HStack>

                    </li>
                </ul> */}
                <Text> © 2022 Designed and Built by Yugal</Text>

            </VStack>
        </Box>
    )
}
