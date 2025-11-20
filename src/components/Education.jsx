import React from 'react';
import { motion } from 'framer-motion';

const education = [
    {
        school: "Universitas Indonesia",
        degree: "Ilmu Komputer, Fakultas Ilmu Komputer",
        period: "2024 - Present",
        achievements: [
            "Juara 3 pada kompetisi Business Case Competition FIK FAIR 2025"
        ]
    },
    {
        school: "SMA Negeri 47 Jakarta",
        degree: "Jurusan MIPA",
        period: "2021 - 2024",
        achievements: [
            "Nilai Akhir 92.77",
            "Medali emas South East Asian Olympiad of Science and Medicine 2023 (Bahasa Indonesia)",
            "Medali perak Olimpiade Sains Nusantara 2023 (Informatika)",
            "Peringkat 7 nilai ijazah paralel"
        ]
    },
    {
        school: "SMP Strada Bhakti Utama",
        degree: "",
        period: "2018 - 2021",
        achievements: [
            "Ketua OSIS SMP Strada Bhakti Utama 2019-2020"
        ]
    }
];

const Education = () => {
    return (
        <section id="education" className="py-32 bg-[#050505] text-white">
            <div className="container mx-auto px-4">
                <div className="mb-20">
                    <span className="block text-sm uppercase tracking-widest text-gray-500 mb-4">Academic Background</span>
                    <h2 className="text-[10vw] leading-[0.8] font-bold font-['Syne'] tracking-tighter uppercase">
                        Education
                    </h2>
                </div>

                <div className="space-y-16">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col md:flex-row gap-8 border-t border-white/10 pt-8"
                        >
                            <div className="md:w-1/4">
                                <span className="text-gray-500 font-mono">{edu.period}</span>
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-3xl font-bold font-['Syne'] mb-2">{edu.school}</h3>
                                {edu.degree && <p className="text-xl text-gray-400 mb-4">{edu.degree}</p>}

                                <div className="flex flex-wrap gap-3">
                                    {edu.achievements.map((achievement, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full border border-white/20 text-sm text-gray-400 hover:bg-white hover:text-black transition-colors duration-300 cursor-default">
                                            {achievement}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
