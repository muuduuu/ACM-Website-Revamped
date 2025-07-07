import React from 'react';
import { Box, Grid, Text, Flex } from '@chakra-ui/react';
import StudentCard from "./StudentCard";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Students = () => {
  const studentCards = [
    {
      src: "/vasu.png",
      name: "Vasu",
      position: "Chair , Cyber Lead",
      instagram: "https://www.instagram.com/va_zzu_b.riz?igsh=MWJnZnNya2FjbDhzcQ==",
      linkedin: "https://www.linkedin.com/in/vasudevb25/",
      github: "https://github.com/vasudevb25"
    },
    {
      src: "/johan.png",
      name: "Johan Rajesh",
      position: "V.C , App and Web Lead",
      instagram: "https://www.instagram.com/harinarayan721?igsh=ZjE4OHRoYTJrbWN4",
      linkedin: "http://www.linkedin.com/in/hari-narayan-629867248",
      github: "https://github.com/Hari-with-an-i"
    },
    {
      src: "/abhinav2.png",
      name: "Abinav Manoj",
      position: "Vice chair",
      instagram: "https://www.instagram.com/abhinav_m_rudra?igsh=MTQ1Z2I5YnRibXdq&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/abhinav-manoj-8ab8b1221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/AbhinavRudra"
    },
    {
      src: "/ananthan.png",
      name: "Ananthakrishnan S",
      position: "Web Master , Treasurer",
      instagram: "https://www.instagram.com/ananth_akrishnan_/",
      linkedin: "https://www.linkedin.com/in/ananthakrishnan-s-997819313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/ArjunAk1234"
    },
    {
      src: "/keerthana.png",
      name: "Keerthana",
      position: "secretary",
      instagram: "https://www.instagram.com/__keerthana.gz?igsh=MTV6ZTQxZGszMmdjMg==",
      linkedin: "https://www.linkedin.com/in/keerthana-sai-gazula-4013b927a/",
      github: "https://github.com/KeerthanaG2"
    },
    {
      src: "/advyth1.png",
      name: "Advyth",
      position: "AI lead",
      instagram: "https://www.instagram.com/advythvaman_05?igsh=MW80ZmdseTdsc2F4MQ==",
      linkedin: "https://www.linkedin.com/in/advyth-vaman-akalankam/",
      github: "https://github.com/AdvythVaman05"
    },
    {
      src: "/vasihnav2.png",
      name: "Vasihnav",
      position: "App Dev head",
      instagram: "https://www.instagram.com/v_p.nair_?igsh=MWwxNnkxY29rNXc0ZQ==",
      linkedin: "https://www.linkedin.com/in/vaishnav-p-nair-057435289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/CodeMaestro01"
    },
    {
      src: "/shyam.png",
      name: "Shyam ",
      position: "Web Dev Lead",
      instagram: "https://www.instagram.com/ghanasyaaam?igsh=MTg5MWpnNjJnajRjbg==",
      linkedin: "https://www.linkedin.com/in/ghanasyam-sunil-4b9339291/",
      github: "https://github.com/ghanasyaam"
    },
    {
      src: "/abhinavglitch.jpeg",
      name: "Abhinav",
      position: "Content Lead",
      instagram: "https://www.instagram.com/abhinav_g_nair?igsh=MTM1b3Jsbm8yOXBrag==",
      linkedin: "https://www.linkedin.com/in/abhinav-g-nair-a353892b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Absguy"
    },
    {
      src: "/harshita.png",
      name: "Harshita",
      position: "Design Lead",
      instagram: "https://www.instagram.com/va_zzu_b.riz/",
      linkedin: "https://www.linkedin.com/in/harshitha-dandamudi-b9b326289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/harshi1ha"
    },
    {
      src: "/aditi.png",
      name: "Aditi",
      position: "Media Lead",
      instagram: "https://www.instagram.com/a_diti_s/",
      linkedin: "https://www.linkedin.com/in/aditi-sunilkumar/",
      github: "https://github.com/a1diti1s"
    }
  ];

  const renderCards = () => {
    return studentCards.map((student, index) => (
      <Box key={index} p={4}>
        <StudentCard
          src={student.src}
          name={student.name}
          position={student.position}
          instagram={student.instagram}
          linkedin={student.linkedin}
          github={student.github}
          width={225}
          height={225}
          alignRight={false}
        />
      </Box>
    ));
  };

  return (
    <Flex flexDirection="column" alignItems="center" className=''>
      <Flex justifyContent="center" mb={3} pb={1} className="faculty-header">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 xl:mt-0"
        >
          <span className="text-accent">Core </span> Committee
        </motion.h2>
      </Flex>
      <Box
        width="100%"
        overflowY="auto"
        height={{ base: '50vh', lg: '65vh' }}
        className="backstudmanage"
        pb={50}
        css={{
          '&::-webkit-scrollbar': {
            width: '10px',
            height: '10px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#4a4aa2',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#393970',
            borderRadius: '20px',
            border: '3px solid #1a1a2e',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#80fffb',
          },
        }}
      >
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={5}>
          {renderCards()}
        </Grid>
      </Box>
    </Flex>
  );
}

export default Students;
