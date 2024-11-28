import { FaDiscord, FaTwitter, FaInstagram, FaTwitch } from "react-icons/fa";

const links = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://twitch.tv", icon: <FaTwitch /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-800 py-4 text-zinc-200">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; 2024 <span className="font-bold">Bumboobee</span> Inc. Todos os direitos reservados.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a href="#privacy-policy" className="text-center text-sm hover:underline  md:text-right">
          Política de Privacidade
        </a>
      </div>
    </footer>
  );
};
export default Footer;
