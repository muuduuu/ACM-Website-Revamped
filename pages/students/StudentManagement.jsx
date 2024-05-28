import React from 'react';
import StudentCard from "./StudentCard";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Students = () => {
  const studentCards = [
    {
      src: "/adithya.png",
      name: "ADITHYA S NAIR",
      position: "Chairman",
      instagram: "https://www.instagram.com/nair.ji_",
      linkedin: "https://www.linkedin.com/in/adithya-s-nair/",
      github: "https://github.com/ADITHYASNAIR2021"
    },
    {
      src: "/akarsh2.png",
      name: "AKARSH S NAIR",
      position: "Vice Chairman",
      instagram: "https://instagram.com/akarxh___?igshid=MWR4YmUzMTlqN2c3dg==",
      linkedin: "https://in.linkedin.com/in/akarsh-s-nair-426530227",
      github: "https://github.com/akarshsnair"
    },
    {
      src: "/Aadithyanraju.jpeg",
      name: "Aadithyan Raju",
      position: "Secretary",
      instagram: "https://www.instagram.com/aadithyan.raju/",
      linkedin: "https://www.linkedin.com/in/aadithyan-raju/",
      github: "https://github.com/AadithyanRaju"
    },
    {
      src: "/dhruvrk.jpg",
      name: "Dhruv R Krishnan",
      position: "SIG AI Lead",
      instagram: "https://www.instagram.com/drk_kai20",
      linkedin: "https://www.linkedin.com/in/dhruv-krishnan-65772923a/",
      github: "https://github.com/DRK-20"
    },
    {
      src: "/krishna.jpeg",
      name: "A P Krishna",
      position: "SIG AI Co Lead",
      linkedin: "https://in.linkedin.com/in/apkrishna",
      github: "https://github.com/apkrishna16"
    },
    {
      src: "/maanav.png",
      name: "Maanav Thalapilly",
      position: "SIG CP Lead",
      instagram: "https://instagram.com/_maanav.mn_?utm_source=qr&igshid=YzU1NGVlODEzOA==",
      linkedin: "https://www.linkedin.com/in/maanav-thalapilly-4718ab24a/",
      github: "https://github.com/MaanavT"
    },
    {
      src: "/kisore.jpg",
      name: "Kisor.G",
      position: "SIG Glitch Lead",
      instagram: "https://instagram.com/_kisor__",
      linkedin: "www.linkedin.com/in/kisor-g"
    },
    {
      src: "/athul.png",
      name: "ATHUL GIREESH",
      position: "Social Media Manager",
      instagram: "https://www.instagram.com/b_l_a_c_ks_a_n_t_a/",
      linkedin: "https://www.linkedin.com/in/athul-gireesh-02b4a8227/",
      github: "https://github.com/Athulg19"
    },
    {
      src: "/gautham.png",
      name: "Gautham Krishna",
      position: "Design Lead",
      instagram: "https://www.instagram.com/i_gauthu",
      linkedin: "https://www.linkedin.com/in/gauthu/",
      github: "https://github.com/gauthu3013"
    },
    {
      src: "/ashwinsabu.png",
      name: "Ashwin Sabu",
      position: "Design Team Co-Lead",
      instagram: "https://www.instagram.com/crosstar_xyvl_001/",
      linkedin: "https://www.linkedin.com/in/ashwin-sabu-31a0a0b4/",
      github: "https://github.com/CROSSTAR001"
    }
  ];

  const renderCards = () => {
    return studentCards.map((student, index) => (
      <div key={index} className="p-4">
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
      </div>
    ));
  };

  return (
    <div className='flex flex-col items-center backstudmanage'>
      <div className='flex justify-center mb-20'>
        <div className="faculty-header-dot h-6 w-3 mr-10 mt-[15px] bg-gradient-to-t from-blue-700 to-blue-400 rounded-sm"></div>
        <div className='text-5xl font-bold text-center text-slate-100/80'>Student Management</div>
      </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          {renderCards()}
        </div>
    </div>
  );
}

export default Students;
