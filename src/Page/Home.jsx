import Profile from '../components/Profile';
import './home.css';
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { Box, Flex, HStack, Img, SimpleGrid, Text } from '@chakra-ui/react';
import Typed from 'react-typed';
import Follow from '../components/Follow';
import Resume from '../components/Resume';
import Boy from '../components/Boy';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Summary from '../components/Summary';
import Heading from '../components/Heading';
import GitHubCalendar from 'react-github-calendar';
import Skills from '../components/Skills';
import reactLogo from '../Logos/react.svg';
import githubLogo from '../Logos/github.svg';
import htmlLogo from '../Logos/html.svg';
import jsLogo from '../Logos/javascript.svg';
import cssLogo from '../Logos/css.svg';
import chakraLogo from '../Logos/chakra.png';
import reduxLogo from '../Logos/redux.svg';
import mongoLogo from '../Logos/mongodb.svg';
import nodejsLogo from '../Logos/nodejs.svg';
import postmanLogo from '../Logos/postman.png';
import expressLogo from '../Logos/express.svg';
import mongooseLogo from '../Logos/mongoose.png';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Wave from '../components/Wave';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const techSkills = [
    {
        skill: "HTML",
        logo: htmlLogo
    },
    {
        skill: "CSS",
        logo: cssLogo
    },
    {
        skill: "JavaScript",
        logo: jsLogo
    },
    {
        skill: "React",
        logo: reactLogo
    },
    {
        skill: "Redux",
        logo: reduxLogo
    },
    {
        skill: "Chakra",
        logo: chakraLogo
    },
    {
        skill: "NodeJs",
        logo: nodejsLogo
    },
    {
        skill: "MongoDb",
        logo: mongoLogo
    },
    {
        skill: "Express",
        logo: expressLogo
    },
    {
        skill: "Mongoose",
        logo: mongooseLogo
    }
    ,

    {
        skill: "Postman",
        logo: postmanLogo
    },
    {
        skill: "GitHub",
        logo: githubLogo
    },
];

export default function Home() {
    const { isDark } = useContext(AppContext);
    AOS.init({ duration: 1200 });
    return (
        <>
            <div id="main">
                <div id="home" style={
                    isDark ? {
                        color: 'white',
                        background: "#0f1624",
                    } : {
                        background: "#edf2f8"
                    }
                }>
                    <Box mb={['1rem', null, '4rem']} pl={['10vw', '0vw', '0vw']} border='1px solid transparent' lineHeight={['2rem', '3rem', '4rem', '5rem']} pt={['0.5rem', '2rem', '3rem']} w={['87%', '75%', '35rem', '35rem']}>
                        <Text fontSize={['1.7rem', '2.8rem', '3.3rem']}>Hello <Wave /></Text>
                        <Text fontSize={['2rem', '4rem', '5rem']}>I'm <span>Yugal</span> </Text>
                        <Text fontSize={['1.2rem', '2rem', '2.5rem']} fontFamily='Poppins, sans-serif'>
                            <Typed
                                strings={[
                                    'Full Stack Web Developer',
                                    "MERN Stack Developer",
                                    'Problem Solver',
                                ]}
                                typeSpeed={120}
                                backSpeed={120}
                                loop
                            />
                        </Text>
                        <Follow />
                        <Resume />
                    </Box>
                    <div className='dev'>
                        <Profile />
                    </div>
                </div>
                <div id="about" style={isDark ? {
                    background: "#1a202c",
                    color: "white",

                } : {
                    background: "white ",
                }}>
                    <Heading heading={"About Me"} />
                    <Flex justify={'space-evenly'} direction={['column', 'column', 'row', 'row']} id="container">
                        <Boy />
                        <Summary />
                    </Flex>
                    <HStack data-aos="fade-up" w="100%" mt={['3rem', null, null]} justify="center" >
                        <GitHubCalendar username="yugal" />
                    </HStack>

                    {/* Data  */}
                    <SimpleGrid data-aos="zoom-in" pb={['2rem', '4rem', '5rem']} pl={['10px', '10px', null]} columns={[1, 1, 2, 2]} fontFamily={'Poppins, sans-serif'} spacing={5} mt={['3rem', '5rem', '5rem']}>
                        <HStack spacing={5}>
                            <Img
                                boxSize={['35px', '37px', '40px']}
                                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-1.svg"
                                alt="icon"
                            />
                            <Text
                            >
                                1200+ Hours Practical Coding
                            </Text>
                        </HStack>
                        <HStack spacing={5}>
                            <Img
                                boxSize={['35px', '37px', '40px']}
                                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-2.svg"
                                alt="icon"
                            />
                            <Text

                            >
                                200+ DSA Problems Solved
                            </Text>
                        </HStack>
                        <HStack spacing={5}>
                            <Img
                                boxSize={['35px', '37px', '40px']}
                                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-3.svg"
                                alt="icon"
                            />
                            <Text

                            >
                                100+ Hours Soft Skill Development
                            </Text>
                        </HStack>

                        <HStack spacing={5}>
                            <Img
                                boxSize={['35px', '37px', '40px']}
                                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-6.svg"
                                alt="icon"
                            />
                            <Text

                            >
                                5+ Projects
                            </Text>
                        </HStack>
                        <HStack spacing={5}>
                            <Img
                                boxSize={['35px', '37px', '40px']}
                                rounded="10px"
                                src="https://git-scm.com/images/logos/logomark-orange@2x.png"
                                alt="git-commit"
                            />
                            <Text

                            >
                                100+ Git Commits
                            </Text>
                        </HStack>
                        <HStack spacing={5}>
                            <Img
                                boxSize={['35px', '37px', '40px']}
                                rounded="10px"
                                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                alt="git-commit"
                            />
                            <Text>
                                150+ Contributions in the last year
                            </Text>
                        </HStack>
                    </SimpleGrid>
                </div>

                <div id="skills" >
                    <Heading heading={"Skills"} />
                    <Skills logos={techSkills} />
                </div>
                <div id="projects">
                    <Heading heading={"Projects"} />
                    <Projects />
                </div>
                <div id="contact">
                    <Heading heading={"Contact Me"} />
                    <Box p={['0 0 ', '0 1rem', '0 4rem']} >
                        <Contact />
                    </Box>
                </div>
                <Footer />
            </div>
        </>
    )
}