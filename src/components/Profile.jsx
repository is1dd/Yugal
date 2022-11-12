import styles from "./Profile.module.css"; 
import { Image } from '@chakra-ui/react';

import Yugal from '../Images/Yugal.jpeg';
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
export default function Profile() {
    const { isDark } = useContext(AppContext);
    return (
        <div >
            <Image
                w={['15rem', '16rem', '21rem', '22rem']}
                h={['15.2rem', '16.2rem', '21.3rem', '22.3rem']} className={styles.userProfile} src={Yugal} alt="Aman Image" />
        </div>
    )
}