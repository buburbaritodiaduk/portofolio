import React from 'react';
import { motion } from 'framer-motion';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import gallery7 from '../assets/gallery7.png';
import gallery8 from '../assets/gallery8.jpg';

const About = () => {
    const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

    return (
        <section id="about" className="py-32 bg-[#050505]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="block text-sm uppercase tracking-widest text-gray-500 mb-8"
                        >
                            About Me
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold font-['Syne'] leading-tight mb-8 text-white"
                        >
                            Mahasiswa Ilmu Komputer Universitas Indonesia dengan ketertarikan pada bidang penggalian data dan UI/UX.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-400 leading-relaxed mb-12"
                        >
                            Memiliki pengalaman dalam pengembangan proyek digital, organisasi, serta kemampuan komunikasi dan kepemimpinan.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-gray-400 leading-relaxed mb-6"
                        >
                            Selain itu, saya memiliki ketertarikan besar dalam dunia olahraga yang telah mengasah soft skills saya seperti sportivitas, disiplin, dan kerja sama tim yang solid.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-gray-400 leading-relaxed mb-12"
                        >
                            Seni dan musik juga menjadi bagian penting dalam hidup saya, memberikan keseimbangan dan memicu kreativitas yang saya terapkan dalam setiap karya digital.
                        </motion.p>
                    </div>

                    <div className="md:w-1/2 grid grid-cols-6 gap-4 auto-rows-[200px]">
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                className={`overflow-hidden rounded-lg ${index < 2 ? 'col-span-3' : 'col-span-2'
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`About ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
