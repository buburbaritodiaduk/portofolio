import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/hero.jpg';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
            </div>

            <div className="w-full px-4 relative z-10 mix-blend-difference">
                <div className="flex flex-col items-center justify-center w-full">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[12vw] md:text-[13vw] leading-[0.8] font-extrabold font-['Syne'] tracking-tighter text-white text-center w-full"
                    >
                        ARYANDANA
                    </motion.h1>

                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[12vw] md:text-[13vw] leading-[0.8] font-extrabold font-['Syne'] tracking-tighter text-white text-center w-full"
                    >
                        PATIUNG
                    </motion.h1>
                </div>

                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-10 left-0 w-full flex justify-between px-8 text-xs font-mono uppercase tracking-widest text-gray-300"
                >
                    <span>Scroll</span>
                    <span>Based in Indonesia</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
