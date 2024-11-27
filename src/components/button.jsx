import PropTypes from "prop-types";

const Button = ({ id, title, leftIcon, rightIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}

      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">{title}</span>
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  containerClass: PropTypes.string,
};

export default Button;
