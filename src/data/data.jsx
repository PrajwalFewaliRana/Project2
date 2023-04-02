import {BiSearch} from "react-icons/bi"
import { AiOutlineUser,AiFillHeart,AiOutlinePlus} from "react-icons/ai"
import {RiShoppingBasketFill,Ri24HoursFill,RiSecurePaymentFill} from "react-icons/ri"

import {FaShippingFast} from "react-icons/fa"




import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"


export const servicesapi = [
    {
        id:21,
        icon:<RiSecurePaymentFill />,
        title:"Secure Payment",
        text:"Secure on order"
    },
    {
        id:22,
        icon:<Ri24HoursFill />,
        title:"24/7 support",
        text:"Contact us 24 hrs a day"
    },
    {
        id:23,
        icon:<FaShippingFast />,
        title:"Fast Delivery",
        text:"Fast delivery on order"
    },
    
]

export const navlink=[
    {
        id:101,
        title:"Home",
        icon:<BiSearch />,
    },
    {
        id:202,
        title:"About",
        icon:<AiOutlineUser />
    },
    {
        id:303,
        title:"Products",
        icon:<RiShoppingBasketFill />
    },
    {
        id:404,
        title:"Infinity",
        
    },
    {
        id:505,
        title:"Testimonials",
        
    },
    {
        id:606,
        title:"Blogs",
        
    },
]


export const catalogapi =[
    {
        id:11,
        img:img1,
        name:"Blue Sneakers",
        price:"$150",
        icon1:<AiFillHeart />,
        icoon2:<AiOutlinePlus />
    },
    {
        id:12,
        img:img2,
        name:"Green Sneakers",
        price:"$180",
        icon1:<AiFillHeart />,
        icoon2:<AiOutlinePlus />
    },
    {
        id:13,
        img:img3,
        name:"Black Sneakers",
        price:"$165",
        icon1:<AiFillHeart />,
        icoon2:<AiOutlinePlus />
    },
]