import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <div  className="footer footer-center p-10  rounded text-white">
            <footer className="flex flex-col gap-3">
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a><FaFacebook className="w-8 h-8 cursor-pointer" /></a>
                        <a><FaLinkedinIn className="w-8 h-8 cursor-pointer" /></a>
                        <a><FaInstagramSquare className="w-8 h-8 cursor-pointer" /></a>
                        <a><FaTwitter className="w-8 h-8 cursor-pointer" /></a>
                        <a><FaGithub className="w-8 h-8 cursor-pointer" /></a>
                    </div>
                </nav>
                <aside className="text-base font-medium">
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;