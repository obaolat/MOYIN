import "./Moy.scss"
import {motion} from "framer-motion"



const textVariants= {
    initial:{
        x: -500,
        opacity: 0,
     },
     animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        },
     },
     scrollButton: {
        opacity:0,
        y:10,
        transition:{
            duration: 2,
            repeat: Infinity
        }
     }
}

const sliderVariants= {
    initial:{
        x: 0,
     },
     animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType: "mirror",
            duration:20,
        },
     },     
};


const Moy = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer" variants ={textVariants} initial ="initial" animate = "animate">
            <motion.h2 variants ={textVariants}>MOYINOLUWA LANIYAN</motion.h2>
            <motion.h1 variants ={textVariants}>Happy Valentines Day to You</motion.h1>
            <motion.h3 variants ={textVariants}>You're really awesome, you know, right?</motion.h3>
            <motion.img variants ={textVariants} animate ="scrollButton" src="/scroll.png" alt="" />

        </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            The best
        </motion.div>
        <div className="imageContainer">
            <img src="/girl.png" alt="" />
        </div>

    </div>
  )
}

export default Moy