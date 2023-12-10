
const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('your submission is granted')
    }
    return (
        <div id="contact" className="pt-12">
            <h1 className="text-2xl font-bold text-[#7d5fff] ml-5">Contect Me</h1>
            <hr className='w-44 border-b-2 border-fuchsia-600 mt-2' />
            <div className="w-full flex bg-gradient-to-l from-[#40407a] to-black text-gray-400 px-6 rounded-r-lg py-12 items-center justify-center space-y-3 gap-5 mt-10">
                <div className="w-1/2">
                    <div className="contact-title">
                        <h2 className="text-2xl font-bold mb-3 text-fuchsia-700">CONTACT ME</h2>

                    </div>
                </div>
                <div className="w-1/2 ">
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5 space-y-3">
                                <label className="text-base font-medium">Name*</label>
                                <input type="text" name="name" className="input w-full" placeholder='Enter Your Name....' id="name" required />
                            </div>
                            <div className="mb-5 space-y-3">
                                <label className="font-medium">Email Address*</label>
                                <input type="email" name="email" className="input w-full" placeholder='Enter Your Email....' id="email" required />
                            </div>
                            <div className="space-y-3">
                                <label className="font-medium mt-3">Message*</label>
                                <textarea placeholder="Send Message..." className="textarea textarea-bordered textarea-md w-full " required ></textarea>
                            </div>
                            <button className="btn mt-5">CONTACT ME</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;