import Button from "./button";
import PropTypes from "prop-types";

const ImageClipBox = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
      <img src={src} alt="Image" />
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contato" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox src="img/contact-1.webp" clipClass="contact-clip-path-1" />
          <ImageClipBox src="img/contact-2.webp" clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60" />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox src="img/swordman-partial.webp" clipClass="absolute md:scale-125" />
          <ImageClipBox src="img/swordman.webp" clipClass="sword-man-clip-path md:scale-125" />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">Junte-se à {import.meta.env.VITE_APP_NAME}</p>

          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            Vamos cons<b>t</b>ruir a <br /> nova era de j<b>o</b>gos <br /> juntos
          </p>

          <Button title="Entre em Contato" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

ImageClipBox.propTypes = {
  src: PropTypes.string,
  clipClass: PropTypes.string,
};

export default Contact;
