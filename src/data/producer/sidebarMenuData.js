import { AiFillHome, AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import {BsListTask} from "react-icons/bs";
import {MdProductionQuantityLimits} from "react-icons/md";

const menuData = [
    {icon:<AiFillHome />, name:"Home", url:"/producer", subMenuList: []},
    {icon:<AiOutlineCheck />, name:"Pending Verify", url:"/producer/pending-verify", subMenuList: []},
    {icon:<MdProductionQuantityLimits />, name:"Create Product", url:"/producer/create/product", subMenuList: []},
    {icon:<AiOutlinePlus />, name:"Add Sub Product", url:"/producer/add-sub-product", subMenuList: []},
    {icon:<BsListTask />, name:"List Products", url:"/producer/list/products", subMenuList: []},
]

export default menuData;