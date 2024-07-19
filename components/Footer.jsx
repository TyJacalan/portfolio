import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mx-auto text-center pb-6 flex flex-row items-center justify-between px-2">
      <span>Ty Jacalan &copy; 2024</span>
      <div className="space-x-4">
        <Link
          href="https://github.com/TyJacalan"
          target="_blank"
          className="hover:font-semibold"
        >
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/ty-j-2772281a4/"
          target="_blank"
          className="hover:font-semibold"
        >
          LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default Footer;
