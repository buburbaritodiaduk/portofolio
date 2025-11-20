import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "PT. Solusindo Energi Utama",
        role: "Document Control and Editor",
        period: "2021 - Present",
        description: [
            "Mengelola dan menyunting dokumen.",
            "Mengatur arsip dokumen masuk dan keluar perusahaan (digital & fisik).",
            "Melakukan pemindaian, penyusunan, dan penyimpanan dokumen internal."
        ]
    },
    {
        company: "PT. Sirclo Teknologi Indonesia",
        role: "Project Based Computer Operator",
        period: "2025 - Present",
        description: [
            "Mengoperasikan dan memantau sistem komputer selama fase proyek tertentu.",
            "Memegang penuh tanggung jawab penggunaan aplikasi OBS Studio."
        ]
    },
    {
        company: "PT. WKB Suka Rasa",
        role: "Tim Pengawasan Intern",
        period: "2025 - Present",
        description: [
            "Berperan sebagai penghubung antara kebutuhan restoran dengan pemilik.",
            "Mengawasi kebersihan area, ketersediaan bahan, dan kualitas pelayanan kepada pelanggan."
        ]
    }
];

const organizations = [
    {
        name: "BEM Fasilkom UI",
        role: "Divisi Seni Budaya",
        period: "July 2025 - Present",
        description: "Penanggungjawab program kerja Laskar Biru Merah, Sekolah BEM Fasilkom, dan Gelar Karya."
    },
    {
        name: "BEM Fasilkom UI",
        role: "Internship Divisi Seni Budaya",
        period: "Sep 2024 - Nov 2024",
        description: "Bertanggung Jawab dalam melaksanakan program kerja Musik Kantin dan Gelar Karya Universitas Indonesia."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-32 bg-[#050505] text-white">
            <div className="container mx-auto px-4">
                <div className="mb-20">
                    <span className="block text-sm uppercase tracking-widest text-gray-500 mb-4">Career Path</span>
                    <h2 className="text-[10vw] leading-[0.8] font-bold font-['Syne'] tracking-tighter uppercase">
                        Experience
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Work Experience */}
                    <div>
                        <h3 className="text-2xl font-bold font-['Syne'] mb-8 text-gray-300 uppercase tracking-wider">Work</h3>
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border-l-2 border-white/10 pl-8 relative"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#050505] border-2 border-white/20"></div>
                                    <span className="text-sm text-gray-500 mb-2 block">{exp.period}</span>
                                    <h4 className="text-xl font-bold mb-1">{exp.company}</h4>
                                    <p className="text-gray-400 mb-4 italic">{exp.role}</p>
                                    <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
                                        {exp.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Organization Experience */}
                    <div>
                        <h3 className="text-2xl font-bold font-['Syne'] mb-8 text-gray-300 uppercase tracking-wider">Organization</h3>
                        <div className="space-y-12">
                            {organizations.map((org, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border-l-2 border-white/10 pl-8 relative"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#050505] border-2 border-white/20"></div>
                                    <span className="text-sm text-gray-500 mb-2 block">{org.period}</span>
                                    <h4 className="text-xl font-bold mb-1">{org.name}</h4>
                                    <p className="text-gray-400 mb-4 italic">{org.role}</p>
                                    <p className="text-gray-500 text-sm">{org.description}</p>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
