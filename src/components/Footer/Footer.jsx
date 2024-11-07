import Layout from "../Layout/Layout";
import footerBg from '../../assets/images/Footer Image/footerBg.jpg';
import { IoTimeOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneVolume, FaTwitter } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
    const footerItems = [
        {
            icon: <IoTimeOutline />,
            title: "Opening Hours",
            paragraph1: "Monday - Sunday",
            paragraph2: "9:00 AM to 11:30 PM"
        },
        {
            icon: <FaPhoneVolume />,
            title: "LET'S TALK",
            paragraph1: "Phone: 1-800-222-4545",
            paragraph2: "Fax: 1-800-222-4545"
        },
        {
            icon: <FaRegEnvelope />,
            title: "Email",
            paragraph1: "info@restaurant.com",
            paragraph2: "support@restaurant.com"
        },
        {
            icon: <IoLocationOutline />,
            title: "Location",
            paragraph1: "123 Main Street",
            paragraph2: "City, Country"
        }
    ];

    return (
        <div
            style={{ backgroundImage: `url(${footerBg})` }}
            id='contact'
            className='bg-center bg-cover bg-no-repeat w-full h-auto md:h-[500px] relative text-white flex justify-start items-center'
        >
            <div className="w-full h-full absolute bg-black bg-opacity-70 z-0"></div>
            <div className="relative space-y-16 z-10 max-w-6xl mx-auto  py-10 md:py-0 px-5 md:px-0">
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold mb-8 text-4xl uppercase text-center">We ready to have you the best dining experiences</h1>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {footerItems.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="text-3xl text-[#FEBF00] mb-3">{item.icon}</div>
                                <h2 className="text-xl uppercase font-bold mb-2">{item.title}</h2>
                                <p>{item.paragraph1}</p>
                                <p>{item.paragraph2}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="flex flex-col gap-5">
                    <div className="flex justify-center items-center gap-5">
                        <div className="flex justify-center items-center border border-white p-2 rounded-full">
                            <FaFacebook className="text-xl text-white"></FaFacebook>
                        </div>
                        <div className="flex justify-center items-center border border-white p-2 rounded-full">
                            <FaLinkedin className="text-xl text-white"></FaLinkedin>
                        </div>
                        <div className="flex justify-center items-center border border-white p-2 rounded-full">
                            <FaTwitter className="text-xl text-white"></FaTwitter>
                        </div>
                        <div className="flex justify-center items-center border border-white p-2 rounded-full">
                            <FaInstagram className="text-xl text-white"></FaInstagram>
                        </div>
                    </div>


                    <p className="text-center">&copy; 2023 <span className="text-[#FEBF00]">Niomax</span> All Rights Reserved </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
