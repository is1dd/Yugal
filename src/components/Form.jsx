import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, FormControl, FormLabel, Input, Textarea, useToast } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Form = () => {
  AOS.init({ duration: 1200 });
  const [user, setUser] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [load, setLoad] = useState(false);
  const form = useRef();
  const toast = useToast();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  }
  const sendEmail = (e) => {
    e.preventDefault();
    if (user.user_name == '' || user.user_email == '' || user.message == '') {
      toast({
        title: `Please fill the details`,
        status: 'error',
        isClosable: true,
      })
    } else {
      setLoad(true);
      emailjs.sendForm('service_293i58d', 'template_k8p9k7y', form.current, process.env.REACT_APP_FORM_API_KEY)
        .then((result) => {
          toast({
            title: "Sent",
            description: "We've sent your mail successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          setLoad(false);
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
          toast({
            title: `Fail`,
            status: 'error',
            isClosable: true,
          })
          setLoad(false);
        });
      user.user_name = "";
      user.user_email = "";
      user.message = "";
    };
  }


  return (
    <form ref={form} onSubmit={sendEmail}>
      <FormControl data-aos="zoom-in" fontFamily='Poppins, sans-serif' w={['90%', '75%', '70%']} align='center' justify='center'>
        <Input background={'white'} value={user.user_name} onChange={handleChange} placeholder='Full Name' mt='7' name="user_name" />
        <Input background={'white'}
          type='email' value={user.user_email} onChange={handleChange} placeholder='Email' mt='7' name='user_email'
        />
        <Textarea background={'white'} value={user.message} onChange={handleChange} name='message' mt='7' placeholder='Your Message' />
        <Button mt={4} w='100%' isLoading={load} loadingText='Sending'
          p={['1.35rem 0rem']}
          style={{
            background: '#4070f4',
            color: 'white',
            letterSpacing: '1px',
            fontFamily: 'Space Grotesk',
          }} _hover={{ background: "rgb(23, 48, 99) !important" }} type='submit' >
          Send Message</Button>
      </FormControl>
    </form>
  );
};