import { useRef } from "react"
import "./Gallery.scss";
import{motion, useScroll, useSpring, useTransform} from "framer-motion"


const items = [
    {
        id:1,
        title:"Youth Week",
        img:"/Youth_week.jpeg",
        desc:"This is one of the most memorable events in my head. How we were able to achieve al of that TOGETHER in such short time is something I will not forget soon. I really LOVED working with you. I love and cherish every moment in it.",  
    },
    {
        id:2,
        title:"Your All Back",
        img:"/allback.jpeg",
        desc:"I'll never forget the moment you walked into the media room in that 'all back'. OmG, you looked so beautiful, I kept staring and hoping someone else won't see me and wonder what was going on lol. If I keep going, you'll say I am exaggerating. I have shown my friends this particular picture too"
    },
    {
        id:3,
        title:"My favorite Picture",
        img:"/fave.JPG",
        desc: "I don't know what it is about this picture. I love it so much. You and your 'lighting up the room' smile. Please never stop smiling"
    },
    {
        id:4,
        title:"Independece day",
        img:"/Independence.JPG",
        desc:"I added this picture because we look good together lol. Don't we?"
    },
    {
        id:5,
        title:"Sister Chi's Wedding",
        img:"/sischi2.jpeg",
        desc:"On this paticular day, I was in my feelings a lot. But as a hard guy, you no fit know. I also had the most beautiful girl in the room by my side. How we played, made jokes and gossiped are one of my most cherished memories in recent times. I'll have to say also that I like this picture a lot too. hmmmmm 🌚"
    },
]

const Single =({item}) =>{
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        // offset:["start start", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
       <section >
    <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>
        <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{y}}>
            <h2 >{item.title}</h2>
            <p>{item.desc}</p>
        </motion.div>
        </div>
    </div>

       </section> 
    )
}

const Gallery = () => {


    const ref =useRef ()

    const {scrollYProgress} =useScroll({target:ref,
        offset:["end end", "start start"],
    });

const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping: 30,
})

  return (
    <div className="portfolio">
        <div className="progress">
            <h1>Gallery</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item =>(
            <Single item={item} key={item.id}/>
        ))}
        </div>
  )
}

export default Gallery