import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open('https://aseam.acm.org/join', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mx-auto xl:mx-0 relative z-50">
      <Link
        href="https://aseam.acm.org/join"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group cursor-pointer touch-manipulation block"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        style={{ touchAction: 'manipulation' }}
      >
        <Image
          src="/rounded-text.png"
          alt="rounded text"
          width={141}
          height={148}
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] pointer-events-none select-none"
          style={{ animation: 'spin 12s linear infinite' }}
          draggable={false}
        />
        <HiArrowRight
          className="absolute text-4xl group-hover:translate-x-2 group-active:translate-x-2 transition-all duration-300 pointer-events-none"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;