

const Manulist = () => {
    return (
        <div>
            <MenuList address={'manager'} linkTitle={'Product Manager'} icon={AiFillHome} />
            <MenuList address={'product-add'} linkTitle={'Product Add'} icon={MdAddShoppingCart} />
            <MenuList address={'products-section'} linkTitle={'Products Section'} icon={FaProductHunt} />
            <MenuList address={'sale-Collection'} linkTitle={'Sale Collection'} icon={MdOutlineCollectionsBookmark} />
            <MenuList address={'checkout'} linkTitle={'Checkout'} icon={IoBagCheckOutline} />
            <MenuList address={'subscription-and-payment'} linkTitle={'Subscription and Payment'} icon={MdOutlinePayment} />
            <MenuList address={'sale-summary'} linkTitle={'Sale Summary'} icon={FaBook} />
        </div>
    );
};

export default Manulist;