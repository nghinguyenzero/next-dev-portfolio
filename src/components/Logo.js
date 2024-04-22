import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'
import Image from 'next/image';

import sunBulb2 from "../../public/images/svgs/crown.png";

const MotionLink = motion(Link)

const Logo = () => {
    return (
        <motion.div className='flex items-center justify-center mt-2'>
            <MotionLink href='/'
                className='w-16 h-16 bg-dark text-light flex items-center justify-center
                rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light
                transform rotate-0 transition-transform duration-500 dark:rotate-360'
                whileHover={{
                    backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                    transition: { duration: 1, repeat: Infinity }
                }}
            >
          <Image src={sunBulb2} alt='nextjs' className="w-[80%] h-auto animate-rubberBandBounce dark:animate-none"/>
            </MotionLink>
        </motion.div>

    );
}

export default Logo;