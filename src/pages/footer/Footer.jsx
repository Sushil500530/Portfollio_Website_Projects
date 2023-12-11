import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './footer.css'


const Footer = () => {
    return (
        <div className="footer footer-center p-10  rounded text-white">
            <footer className="flex flex-col gap-3 w-full h-full">
                <nav>
                    <ul className=" flex items-center justify-center">
                        <li><a href="#"><FaFacebook className="w-8 h-8 cursor-pointer icon" /></a></li>
                        <li><a href="#"><FaLinkedinIn className="w-8 h-8 cursor-pointer icon" /></a></li>
                        <li><a href="#"><FaInstagramSquare className="w-8 h-8 cursor-pointer icon" /></a></li>
                        <li><a href="#"><FaTwitter className="w-8 h-8 cursor-pointer icon" /></a></li>
                        <li><a href="#"><FaGithub className="w-8 h-8 cursor-pointer icon" /></a></li>
                    </ul>
                </nav >
                <aside className="text-base font-medium">
                    <p>Copyright © 2023 - All right reserved by Sushil Hemrom</p>
                </aside>
            </footer >
        </div >
    );
};

export default Footer;