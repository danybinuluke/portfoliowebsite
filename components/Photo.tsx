"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import hero from "@/images/hero.png"; // Ensure the path is correct

const Photo = () => {
    const circleColors = ["#00ff99"];
    
    const circleVariants: Variants = {
        initial: {
            strokeDasharray: "24 10 0 0",
            rotate: 0,
            opacity: 0,
        },
        animate: (index: number) => ({
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'], 
            rotate: [120, 360],
            opacity: 1,
            transition: {
                strokeDasharray: {
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse" as const,
                },
                rotate: {
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse" as const,
                },
                opacity: {
                    duration: 0.4,
                    delay: 2 + index * 0.4,
                    ease: "easeIn",
                }
            }
        })
    };

    return (
        <div className="w-full h-full flex items-center justify-center relative">
            <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="relative w-[500px] h-[500px] lg:w-[550px] lg:h-[550px] flex items-center justify-center -mt-5 ml-10"
                >
                    {/* Circular Border */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 600 600"
                        fill="none"
                        className="absolute inset-0 w-full h-full"
                    >
                        {circleColors.map((color, index) => (
                            <motion.circle
                                key={index}
                                cx="300"
                                cy="300"
                                r={290 - index * 15}
                                stroke={color}
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial="initial"
                                animate="animate"
                                variants={circleVariants}
                                custom={index}
                            />
                        ))}
                    </svg>

                    {/* Image inside the Circle */}
                    <div className="absolute w-[92%] h-[92%] rounded-full overflow-hidden">
                        <Image
                            src={hero}
                            alt="Profile Picture"
                            className="w-full h-full object-cover rounded-full"
                            sizes="(max-width: 600px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Photo;