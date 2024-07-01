import Link from "next/link";

const Footer = () => {
  return (
    <div class="container mx-auto text-center pb-6 flex flex-row items-center justify-between px-2">
      <span>Ty Jacalan &copy; 2024</span>
      <div class="space-x-4">
        <Link href="https://github.com/TyJacalan" target="_blank">
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/ty-j-2772281a4/"
          target="_blank"
        >
          LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default Footer;
