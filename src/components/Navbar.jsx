import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    VStack,
    useDisclosure,
    IconButton,
    Box
} from "@chakra-ui/react";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import styles from './Navbar.module.css';
import activeStyle from './Active.module.css';
import { Link } from "react-scroll";
import { useRef } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { toggleDark, isDark } = useContext(AppContext);
    const btnRef = useRef();
    console.log(isDark)
    return (
        <Box px={['0.2rem', '1rem', '3rem']} className={styles.myNavbar} style={
            isDark ? {
                background: "#0f1624",
                color: 'white !important'

            } : {
                background: "#edf2f8"
            }
        }>
            <div className={styles.brand}>
                <span>Y</span>
                <span>U</span>
                <span>G</span>
                <span>A</span>
                <span>L</span>
            </div>
            <div style={{
                display: 'flex',
                alignItems: "center"
            }}>


                <ul id='hideNavbar' style={
                    isDark ?
                        {
                            color: "white"
                        } : {
                            color: "black"
                        }
                } >
                    <li>
                        <Link
                            to="home"
                            smooth={true}
                            duration={1000}
                            spy={true}
                            offset={-50}
                            activeClass={activeStyle.active}

                        >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to="about"
                            smooth={true}
                            duration={1000}
                            spy={true}
                            offset={-50}
                            activeClass={activeStyle.active}>
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link to="skills"
                            smooth={true}
                            duration={1000}
                            spy={true}
                            offset={-50}
                            activeClass={activeStyle.active}>
                            SKILLS
                        </Link>
                    </li>
                    <li>
                        <Link to="projects"
                            smooth={true}
                            duration={1000}
                            spy={true}
                            offset={-50}
                            activeClass={activeStyle.active}>
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link to="contact"
                            smooth={true}
                            duration={1000}
                            spy={true}
                            offset={-50}
                            activeClass={activeStyle.active}>
                            CONTACT
                        </Link>
                    </li>
                    <li>
                        {/* <Link to="contact"
                            smooth={true}
                            duration={1000}
                            spy={true}
                            offset={-50}
                            activeClass={activeStyle.active}> */}
                        <a href="Yugal.pdf" style={{
                        }} download="Yugal.pdf">
                            RESUME
                        </a>
                        {/* </Link> */}
                    </li>
                </ul>
                <Box display={['block', 'block', 'block', 'none']} style={
                    isDark ? {
                        color: 'white '
                    } : {
                        color: 'black'
                    }
                }>
                    <FaBars onClick={onOpen} style={{
                        width: '2rem',
                        cursor: 'pointer',
                        height: '1.6rem'
                    }} />
                </Box>
                <IconButton
                    ml="10px"
                    isRound
                    style={
                        isDark ? {
                            background: "#0f1624",
                            color: 'white '
                        } : {
                            background: "#edf2f8"
                        }
                    }
                    icon={isDark ? <FaSun /> : <FaMoon />}
                    onClick={toggleDark}
                />
            </div>
            <Drawer
                style={
                    isDark ? {
                        background: "var(--darkbg) !important",
                        color: 'white !important'
                    } : {
                        background: "white"
                    }
                }
                size={["xs", "xs"]}
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>
                    <DrawerBody>
                        <VStack align="left" spacing={5}>
                            <Link
                                className={styles.same}
                                to="home"
                                smooth={true}
                                duration={1000}
                                spy={true}
                                activeClass={activeStyle.active2}
                            >
                                HOME
                            </Link>
                            <Link
                                className={styles.same}
                                to="about"
                                smooth={true}
                                duration={1000}
                                spy={true}
                                // offset={50}
                                activeClass={activeStyle.active2}
                            >
                                ABOUT
                            </Link>
                            <Link
                                className={styles.same}
                                to="skills"
                                smooth={true}
                                duration={1000}
                                spy={true}
                                // offset={50}
                                activeClass={activeStyle.active2}
                            >
                                SKILLS
                            </Link>
                            <Link
                                className={styles.same}
                                to="projects"
                                smooth={true}
                                duration={1000}
                                spy={true}
                                // offset={50}
                                activeClass={activeStyle.active2}
                            >
                                PROJECTS
                            </Link>
                            <Link
                                className={styles.same}
                                to="contact"
                                smooth={true}
                                duration={1000}
                                spy={true}
                                // offset={50}
                                activeClass={activeStyle.active2}
                            >
                                CONTACT
                            </Link>
                            <a 
                            className={styles.same}
                            href="Yugal_Resume.pdf" style={{
                            }} download="Yugal_Kumar_Resume.pdf">
                                RESUME
                            </a>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}