import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import gsap from "gsap";
import AnimatedTitle from "./animatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100%",
      height: "100%",
      borderRadius: 0,
    });
  });

  return (
    <div id="sobre" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">Bem-vindo a {import.meta.env.VITE_APP_NAME}</h2>
        <AnimatedTitle
          title={"D<b>e</b>scubra o maior m<b>u</b>ndo compartilhad<b>o</b>"}
          containerClass="mt-5 !text-black text-center"
        />
        <div className="about-subtext">
          <p>O Jogo dos Jogos começa — sua vida, agora um MMORPG épico</p>

          <p>{import.meta.env.VITE_APP_NAME} une todos os jogadores de incontáveis jogos e plataformas</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img src="img/about.webp" alt="About Background" className="absolute left-0 top-0 size-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default About;
