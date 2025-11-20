import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
        }
    };

    return (
        <>
            <motion.div
                className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4
                }}
            />
            <motion.div
                className="cursor-outline fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                variants={variants}
                animate="default"
                transition={{
                    type: "spring",
                    mass: 0.6,
                    stiffness: 100,
                    damping: 20,
                    restDelta: 0.001
                }}
            />
        </>
    );
};

export default Cursor;
