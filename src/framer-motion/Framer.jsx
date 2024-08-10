import {motion, useInView} from "framer-motion"
import { useRef } from "react";

const Framer = ({text, el: Wrapper="h1" })=>{

    const ref = useRef(null);
    const inView = useInView(ref, {amount: 0.5})
    const textArray = Array.isArray(text) ? text : [text]

    const animateTextVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <Wrapper>
            <motion.span 
                ref={ref}
                initial="hidden" 
                animate={inView ? "visible" : "hidden"}
                transition={{staggerChildren: 0.2}}
                >
                { textArray.map((t, index)=>(
                    <span key={`${t}-${index}`}>{t.split(" ").map((char, charIndex)=>(
                        <span key={`${char}-${charIndex}`}>{char.split(" ").map((texts, textsIndex)=>(
                            <motion.span key={`${texts}-${textsIndex}`} variants={animateTextVariants}>{`${texts} `}</motion.span>
                        ))}</span>
                    ))}</span>
                ))}
            </motion.span>
        </Wrapper>
    )
}

export default Framer