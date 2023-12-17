import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="footer footer-center mt-8 lg:p-10  rounded text-white">
            <footer className="w-full h-full">
                <nav>
                    <ul className=" flex items-center justify-center gap-6">
                        <span className="tooltip" data-tip="Facebook">
                            <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><a href="https://tinyurl.com/46j32cs7" target="_blank" ><FaFacebook className="w-full h-full p-1 cursor-pointer " /></a></li>
                        </span>
                        <span className="tooltip" data-tip="Linkedin">
                            <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><a href="https://tinyurl.com/46j32cs7" target="_blank"><FaLinkedinIn className="w-full h-full p-1 cursor-pointer " /></a></li>
                        </span>
                        <span className="tooltip" data-tip="Github">
                            <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><a href="https://github.com/Sushil500530" target="_blank"><FaGithub className="w-full h-full p-1 cursor-pointer " /></a></li>
                        </span>
                        <span className="tooltip" data-tip="Instagram">
                            <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><a href="#"><FaInstagramSquare className="w-full h-full p-1 cursor-default " /></a></li>
                        </span>
                        <span className="tooltip" data-tip="Twitter">
                            <li className="w-10 h-10 rounded-full border-2 hover:text-[#1974ec] transition ease-in-out hover:border-fuchsia-500"><a href="#"><FaTwitter className="w-full h-full p-1 cursor-default " /></a></li>
                        </span>
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