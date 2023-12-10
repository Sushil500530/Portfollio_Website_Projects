import image from '../../assets/profile.png'

const About = () => {
    return (
        <div id='about' className='pt-12'>
            <h1 className="text-2xl font-bold text-[#7d5fff] ml-5">About Me</h1>
            <hr className='w-40 border-b-2 border-fuchsia-600 mt-2' />
            <div className="flex flex-col md:flex-row lg:flex-row gap-5 w-full h-auto items-center pt-10">
                <div className='w-1/4 md:w-full lg:w-1/3 mx-0'>
                    <div className='border-4 hover:border-fuchsia-600 transition cursor-pointer border-[#7d5fff] rounded-full w-full'>
                        <img src={image} className='w-full h-full rounded-full' alt="" />
                    </div>
                </div>
                <div className='border p-4 bg-gradient-to-l from-[#40407a] to-black rounded-md'>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam facere fuga atque assumenda molestias rerum voluptas quo? Harum eaque perferendis laboriosam molestiae at nulla amet aut placeat asperiores, odio saepe aliquid architecto ullam reiciendis provident temporibus deleniti ad culpa enim nisi et accusamus excepturi unde voluptate! Mollitia, aspernatur? Sequi explicabo unde molestiae eveniet, facilis dolor consequatur cupiditate dolores dolore nemo harum tempora iusto saepe rerum
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;