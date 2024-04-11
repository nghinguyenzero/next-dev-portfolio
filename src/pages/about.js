import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import { Head } from "next/head";
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/luffy-gear-5-3.png";
import {
    useSpring, useMotionValue, useInView
} from 'framer-motion';

const AnimateNumber = ({value}) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once:true})
    useEffect(()=>{
        if(isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])


    useEffect(()=>{
        springValue.on('change', (latest) => {
            // console.log(latest);
            if(ref.current && latest.toFixed(0)<= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [ springValue, value])

    return<span ref={ref}></span>


}


const about = () => {
    return (
        <>
            {/* <Head>
                <title>ZN | About Page</title>
                <meta name="description" content="any description"/>
            </Head> */}
            <main className="flex w-full flex-col items-center justify-center">
                <AnimatedText text='Passion Fuels Purpose!' className="mb-16"/>
                <Layout className={'pt-16'}>
                <div className="grid w-full grid-cols-8 gap-16">
                    <div className="col-span-3 flex flex-col items-start justify-start">
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Medical</h2>
                        <p className="font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam sit cumque nisi deserunt obcaecati eveniet fugiat atque consequatur nam, corrupti magni consequuntur aliquam commodi velit. Ad nobis ab ipsa?
                        </p>
                        <p className="my-4 font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam sit cumque nisi deserunt obcaecati eveniet fugiat atque consequatur nam, corrupti magni consequuntur aliquam commodi velit. Ad nobis ab ipsa?
                        </p>
                        <p className="font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam sit cumque nisi deserunt obcaecati eveniet fugiat atque consequatur nam, corrupti magni consequuntur aliquam commodi velit. Ad nobis ab ipsa?
                        </p>
                    </div>
                    <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8">
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"></div>
                        <Image src={profilePic} alt={'ZERO'} className='w-full h-auto rounded-2xl'/>
                    </div>
                    <div className="col-span-2 flex flex-col items-end justify-between">
                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold">
                                <AnimateNumber value={50}/> +
                            </span>
                            <h2 className="text-xl font-medium capitalize text-dark/75">Satisfied Clients</h2>
                        </div>
                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold">
                            <AnimateNumber value={40}/> +
                            </span>
                            <h2 className="text-xl font-medium capitalize  text-dark/75">Projects completed</h2>
                        </div>
                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold">
                            <AnimateNumber value={4}/> +
                            </span>
                            <h2 className="text-xl font-medium capitalize  text-dark/75">Years of experience</h2>
                        </div>
                    </div>

                </div>


                </Layout>
            </main>
        </>
    );
}

export default about;