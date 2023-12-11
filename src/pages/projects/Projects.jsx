// import AOS from 'aos';
import { FaCloudDownloadAlt } from 'react-icons/fa';
const Projects = () => {
    // AOS.init({
    //     duration: 2500,
    //     throttleDelay: 99,
    // })
    // data-aos="zoom-in-up"
    // data-aos-offset="200"
    // data-aos-delay="50"
    // data-aos-duration="1000"
    // data-aos-easing="ease-in-out"
    // data-aos-anchor-placement="right-center"
    return (
        <div id="projects" className="pt-12">
            <h1 className="text-2xl font-bold text-[#7d5fff] ml-5">Projects</h1>
            <hr className='w-32 border-b-2 border-fuchsia-600 mt-2' />
            <div className="mt-10">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odio reiciendis adipisci! Ratione commodi cupiditate eligendi! Tempore incidunt aliquid eos id praesentium adipisci, veritatis nesciunt deleniti quidem dolores dicta dolorem sint beatae aliquam natus! Ab cupiditate maxime voluptate praesentium laborum, sed accusantium deleniti eius incidunt ex. Iure, cum asperiores voluptatibus consequuntur corporis rem a nemo, at modi, voluptate explicabo odit magni consequatur qui quibusdam? Odit perspiciatis molestias eum hic similique quibusdam libero nesciunt ratione iste fuga, commodi minima quo beatae ad nulla voluptates quaerat molestiae a, explicabo consequatur iure mollitia rem maxime. Dolores iure facilis fugiat totam sapiente fugit assumenda!</p>
            </div>
            <div className='m-20 grid grid-cols-2 gap-4'>
                <div className=" bg-gray-50 my-5 cursor-pointer shodow overflow-hidden ">
                    <div className="relative rounded-md group h-[350px]">
                      <figure>
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                    </figure>
                           
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 rounded-md transition">
                                <h2 className="text-white text-lg w-9 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition ">
                                    <FaCloudDownloadAlt className="w-full text-5xl font-bold"></FaCloudDownloadAlt>
                                </h2>
                            </div>
                    </div>
                  
                </div>
            <div className="card bg-base-300 shadow-xl relative">
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 rounded-md transition">
                    <h2 className="text-white text-lg w-9 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition ">
                        <FaCloudDownloadAlt className="w-full text-5xl font-bold"></FaCloudDownloadAlt>
                    </h2>
                </div>
                {/* <figure>
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                    </figure> */}
                {/* <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div> */}
            </div>

        </div>
        </div >
    );
};

export default Projects;