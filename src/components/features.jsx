import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

import PropTypes from "prop-types";

const BentoTilt = ({ children, className = "", id = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 15;
    const tiltY = (relativeX - 0.5) * -15;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      id={id}
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className="relative size-full">
      <video src={src} loop muted autoPlay className="absolute left-0 top-0 size-full object-cover object-center" />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>

          {description ? <p className="mt-3 max-w-64 text-xs">{description}</p> : null}
        </div>
      </div>

      {isComingSoon ? (
        <div
          className="absolute right-0 bottom-0 flex items-center justify-center bg-violet-500 bg-opacity-100 px-3 py-1 text-xs text-white"
          style={{
            clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)", // Creates the transversal cut
          }}
        >
          <p className="text-xs special-font uppercase italic font-semibold">Coming Soon</p>
        </div>
      ) : null}
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">Dentro da Camada Metajogo</p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Mergulhe em um universo rico e em constante expansão onde uma vibrante gama de produtos converge em uma
            experiência sobreposta interconectada no seu mundo.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>te
              </>
            }
            description="Um aplicativo metajogo multiplataforma que transforma suas atividades em jogos Web2 e Web3 em uma aventura recompensadora."
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="Uma coleção NFT inspirada em anime e jogos - a propriedade intelectual pronta para expansão."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0" id="nexus">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="Um hub social gamificado, adicionando uma nova dimensão de jogo à interação social para comunidades Web3."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  bl<b>u</b>e
                </>
              }
              description="Um Agente de IA entre mundos - elevando sua jogabilidade para ser mais divertida e produtiva."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video src="videos/feature-5.mp4" loop muted autoPlay className="size-full object-cover object-center" />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

BentoCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  isComingSoon: PropTypes.bool,
};

BentoTilt.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Features;
