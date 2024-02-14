import { useRef } from "react";
import "./Letter.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
            To you, my Valentine
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            Hi, <motion.b whileHover={{color:"orange"}}>Moyin</motion.b> 
          </h1>
        </div>
        <div className="title">
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <p>
          How is the family ma? I have struggled so much for what to write. I really do not know what to write. 
                Safe to say you have made me speechless. <br/>Anyway, my suya in a world full of small chops, my puff puff in a sea of
                boli, I wanted to let you know you are really beautiful. Mumu, I know you are probably whispering "duurh, I know". But 
                from the shape of your eyes to how wide you smile to your complexion to your loading fresh skin, I notice and I love so much. Happy to
                see the woman you are becoming I might 
                just be your secret admirer, you never know. I love how hardworking you are, how even as a hard guy you listen and 
                want to be better, consistently learning and trying. Your love for the things of God,
                how easy you make it to gossip with you and how you always have gist for me are things I love the most about you. Love how hardworking you get too.
                <br/><br/>
                I am ALWAYS rooting for you, readily holding your hands when you need me to, arms wide when you need a hug, and will always be in your corner when you need
                someone to remind you everything will be alright.
                <br/>
               My beautiful Valentine. It's Valentines' day, allow me to call you baby.
               <br/>
               Never stop smiling baby!
          </p>
         
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;