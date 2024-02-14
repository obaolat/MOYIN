import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className ="navbar">
       {/* Sidebar */} 
       <Sidebar/>
       <div className="wrapper">
        <div className="Name">
            <motion.img 
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.5}} 
            src="/Moyin.jpg" alt="" width="70" height ="70
            
            "/>
        </div>
       </div>
    </div>
  ) 
}

export default Navbar