import { AiFillHome } from "react-icons/ai";
import {FiSettings} from "react-icons/fi";
import {FaShippingFast} from "react-icons/fa";
import {MdProductionQuantityLimits} from "react-icons/md";

const menuData = [
    {icon:<AiFillHome />, name:"Home", url:"/admin", subMenuList: []},
    {
        icon: <FiSettings />,
        name: "Settings",
        url: "#",
        subMenuList: [
            {icon:<MdProductionQuantityLimits />, name:"Create Producer Firm", url:"/admin/create/producer"},
            {icon:<FaShippingFast />, name:"Create Shipper Firm", url:"/admin/create/shipper"},
        ]
    },
]

export default menuData;