import {motion, useInView} from "framer-motion"
import { useRef } from "react";

const Framer = ({text, el: Wrapper="h1" })=>{

    const ref = useRef(null);
    const inView = useInView(ref, {amount: 0.5})

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
                { text && text.split(" ").map((t)=>(
                    <motion.span key={t} variants={animateTextVariants}>{`${t} `}</motion.span>
                ))}
            </motion.span>
        </Wrapper>
    )
}

export default Framer