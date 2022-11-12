import { Text } from '@chakra-ui/react'
import React from 'react'

export default function Heading({ heading }) {
    return (
        <Text id='header' color='#4070f4' mt={['1.5rem', '3rem', '3rem']} mb={['1.5rem', '3rem', '3rem']} textAlign={'center'} fontFamily=' Poppins, sans-serif' fontSize={['2rem', '2.5rem', '2.5rem']}>{heading}</Text>
    )
}
