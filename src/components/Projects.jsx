import { Box, SimpleGrid, Wrap } from "@chakra-ui/react";
import SingleProject from "./SingleProject";
import bellavitaImg from '../Images/bellavitaImg.png'
import airgarageImg from '../Images/airgarageImg.png'
import togglImg from '../Images/togglImg.png';
const projects = [
    {
        hero: togglImg,
        name: "Toggl Track Clone",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Chakra UI", "NodeJS", "ExpressJS", "MongoDB"],
        about: 'Toggl Track is a time tracking app that allows you to track your daily activities across different platforms.',
        status: 'A collaborative project built by a team of 5, executed in 4 days.',
        github: 'https://github.com/Amanyadav2030/minor-crowd-1344',
        live: 'https://toggl-time-tracking.vercel.app/',
    },
    {
        hero: bellavitaImg,
        name: "Bellavitaorganic Clone",
        skills: ["React", "CSS", 'JavaScript', "Chakra UI"],
        about: 'Bellavitaorganic which is an e-commerce website, where users can buy organic products.',
        status: 'An individual project built by me, executed in 4 days.',
        github: 'https://github.com/Amanyadav2030/Bellavitaorganic-Clone',
        live: 'https://bellavitaorganic-clone.vercel.app/',
    },
    {
        hero: airgarageImg,
        name: "Airgarage Clone",
        skills: ["HTML", "CSS", "JavaScript"],
        about: 'Airgarage is a well-being startup, which offers available parking anywhere else in the world.',
        status: 'A collaborative project built by a team of 5, executed in 4 days.',
        github: 'https://github.com/Amanyadav2030/Airgarage-Clone',
        live: 'https://airgarage-clone.vercel.app/',
    },
    // {
    //     hero: togglImg,
    //     name: "Toggl Track Clone",
    //     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Chakra UI", "NodeJS", "ExpressJS", "MongoDB"],
    //     about: 'Toggl Track is a time tracking app that allows you to track your daily activities across different platforms.',
    //     status: 'A collaborative project built by a team of 5, executed in 4 days.',
    //     github: 'https://github.com/Amanyadav2030/minor-crowd-1344',
    //     live: 'https://toggl-time-tracking.vercel.app/',
    // },


];
export default function Projects() {

    return (
        <SimpleGrid spacingX={['15px', '25px', '38px']} pb={['1rem', '2rem', '5rem']} spacingY={['18px', '27px', '30px']} columns={[1, 2, 3, 3]} w={['90%', '92%', '87%']} m='auto'>
            {
                projects.map((el) => (
                    <SingleProject key={el.name} hero={el.hero} name={el.name} skills={el.skills} status={el.status} Gif={el.Gif} github={el.github} live={el.live} about={el.about} />
                ))
            }
        </SimpleGrid>

    )
}
