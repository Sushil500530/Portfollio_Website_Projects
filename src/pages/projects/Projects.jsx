import ProjectHeader from '../../components/shared/ProjectHeader';


const Projects = () => {
    // inventory management 
    const data = [
        {
            id: 1,
            modalId:'my_modal_1',
            bgImage : 'https://i.ibb.co/NjyZrQ0/Screenshot-2023-12-12-125201.png',
            showImage: 'https://i.ibb.co/CsCjmhv/Screenshot-2023-12-12-123943.png',
            liveLink: "https://clever-reading.surge.sh",
            clientSite: "https://github.com/Sushil500530/Inventory_Management_System_Client_Side",
            serverSite : "https://github.com/Sushil500530/Inventory_Management_System_Server_Side",
            title: "Inventory Management System",
            description : "Here basically the project is made with different types of cars. Here anyone can buy the car of his choice, Here anyone can open a shop and buy and sell by adding their products. There are special types of actions for system admins that they can apply. Apart from this, different types of benefits are available according to the role of the user. Something more extra here..."
        },
        {
            id: 2,
            modalId:'my_modal_2',
            bgImage:'https://i.ibb.co/0DSDhzd/Screenshot-2023-12-17-001153.png',
            showImage:'https://i.ibb.co/PNMf2z6/Screenshot-2023-12-17-001419.png',
            liveLink: "https://five-steel.surge.sh",
            clientSite: "https://github.com/Sushil500530/Library_Management_System_Project_Client_Side",
            serverSite : "https://github.com/Sushil500530/Library_Management_System_Project_Server_Side",
            title: "Library Management System",
            description : "Cataloging: An LMS allows libraries to catalog their collections, which means adding information about each item, such as the title, author, publisher, and subject. This information can then be used to search for items in the catalog. Circulation: An LMS allows libraries to track the circulation of their items, which means who has borrowed them and when they are due back"
        },
        {
            id: 3,
            modalId:'my_modal_3',
            bgImage: 'https://i.ibb.co/NjyZrQ0/Screenshot-2023-12-12-125201.png',
            showImage: 'https://i.ibb.co/CsCjmhv/Screenshot-2023-12-12-123943.png',
            liveLink: "https://technology-a42db.web.app",
            clientSite: "https://github.com/Sushil500530/Technology_and_Electronics_Client_Side",
            serverSite : "https://github.com/Sushil500530/Technology_and_Electronics_Server_Side",
            title: "Technology and Electronics",
            description : "There are many categories including Apple, Samsung, Time, Google, Intel etc. When a category is clicked it will show the products accordingly and you can select. Also, there are 2 extra sections below, click on them to see the details and add can take cart to my court. User can add products as per their wish and view them. finally you visite this website and show fevorite technology or electronics and add to cart it which that you like..."
        }
        //  {
        //     id: 2,
        //     modalId:'my_modal_2',
        //     bgImage:'https://i.ibb.co/pRZSYyN/Screenshot-2023-12-12-145822.png',
        //     showImage:'https://i.ibb.co/5WySHkJ/Screenshot-2023-12-12-144630.png',
        //     liveLink: "https://five-steel.surge.sh",
        //     clientSite: "https://github.com/Sushil500530/Library_Management_System_Project_Client_Side",
        //     serverSite : "https://github.com/Sushil500530/Library_Management_System_Project_Server_Side",
        //     title: "Library Management System",
        //     description : "Cataloging: An LMS allows libraries to catalog their collections, which means adding information about each item, such as the title, author, publisher, and subject. This information can then be used to search for items in the catalog. Circulation: An LMS allows libraries to track the circulation of their items, which means who has borrowed them and when they are due back. This information can be used to prevent items from being lost or stolen. Acquisitions: An LMS allows libraries to acquire new items for their collections. This includes ordering items, tracking their progress, and adding them to the catalog."
        // }
    ]
    return (
        <div id="projects" className="pt-12">
            <h1 className="text-2xl font-bold text-[#7d5fff] ml-5">Projects</h1>
            <hr className='w-32 border-b-2 border-fuchsia-600 mt-2' />
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10' >
                {
                    data?.map(item => <ProjectHeader
                         key={item.id}
                      item={item} 
                      />)
                }
            </div>
        </div >
    );
};

export default Projects;