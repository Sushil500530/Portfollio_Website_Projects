import { MdContactPhone } from "react-icons/md";
const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('your submission is granted')
    }
    return (
        <div id="contact" className="pt-12">
            <h1 className="text-2xl font-bold text-[#7d5fff] ml-5">Contect Me</h1>
            <hr className='w-44 border-b-2 border-fuchsia-600 mt-2' />
            <div className="w-full flex-col lg:flex-row flex bg-gradient-to-l from-[#40407a] to-black text-gray-400 px-6 rounded-lg py-12 items-center justify-center space-y-3 gap-10 mt-10">
                <div className="w-full lg:w-1/2">
                    <div className="contact-title">
                        <div>
                            <img src="https://i.ibb.co/cgcYzH1/Contact-Us-png-1.png" alt="Contact" />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="form text-white">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5 space-y-3">
                                <label className="text-base font-medium">Name*</label>
                                <input type="text" name="name" className=" w-full h-12 bg-black px-3 text-[18px] focus:border outline-none focus:border-[#7d5fff]" placeholder='Enter Your Name....' id="name" required />
                            </div>
                            <div className="mb-5 space-y-3">
                                <label className="font-medium">Email Address*</label>
                                <input type="email" name="email" className="w-full h-12 bg-black px-3 text-[18px] focus:border outline-none focus:border-[#7d5fff] " placeholder='Enter Your Email....' id="email" required />
                            </div>
                            <div className="space-y-3">
                                <label className="font-medium mt-3">Message*</label>
                                <textarea placeholder="Send Message..." className="textarea textarea-bordered focus:border-[#7d5fff] textarea-md w-full bg-black px-3 text-[18px]" required ></textarea>
                            </div>
                            <button className='btn bg-gradient-to-l from-[#17c0eb] to-[#8e71ff] px-8 flex items-center justify-center rounded-full text-[18px] dark:hover:text-black font-medium py-2 transform hover:-translate-y-[2px] transition-all ease-in hover:scale-100 text-xl text-black border-none mt-5 hover:text-[#3b26a4] hover:ease-in-out'><span><MdContactPhone /></span>Contact Me</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;