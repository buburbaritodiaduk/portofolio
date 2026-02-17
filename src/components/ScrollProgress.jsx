import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const [progress, setProgress] = useState(0);

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setProgress(Math.round(latest * 100));
        });
    }, [scrollYProgress]);

    return (
        <div className="fixed top-8 right-8 z-[100] font-sans font-bold text-xl mix-blend-difference pointer-events-none">
            {progress}%
        </div>
    );
};

export default ScrollProgress;
