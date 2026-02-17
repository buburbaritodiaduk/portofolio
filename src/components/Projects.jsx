import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Hai Animal!",
        category: "AI & Mobile App",
        year: "2023",
        description: "Aplikasi untuk mendeteksi penyakit hewan berbasis AI melalui foto dan deskripsi teks singkat. Dirancang untuk mempercepat proses identifikasi penyakit demi penanganan darurat pada hewan peliharaan.",
        role: "Founder",
        link: "#" // No link provided yet
    },
    {
        id: 2,
        title: "Skillfoy",
        category: "Web Development & AI",
        year: "2025",
        description: "Website berbasis AI yang membantu pengguna menemukan jalur karir sesuai minat hanya dengan mengetikkan nama pekerjaan yang diinginkan. Tech Stack: Figma, React.js, HTML, CSS.",
        role: "Front End Developer & UI/UX Designer",
        link: "https://github.com/inoperatingsystem/setelan-juara"
    },
    {
        id: 3,
        title: "Visionlab Wear",
        category: "E-Commerce & Branding",
        year: "2023 - Present",
        description: "Proyek usaha rintisan di bidang clothing yang mengusung desain autentik dan personal. Bertanggung jawab dalam branding, desain, dan operasional bisnis digital.",
        role: "Co-Founder",
        link: "https://linktr.ee/VisionlabWear?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn9VN2AcNNT5ScnsUlS1OI9Ir6Js-RVZmP19SzfCRP2QBb_-Urwlz0t3tyPmI_aem__gfqS_Bi7AdQQTNBhTBbrA"
    },
    {
        id: 4,
        title: "2030 SUKSES!",
        category: "Social Movement & Tech",
        year: "2025 - Present",
        description: "Gerakan kolaboratif yang berfokus pada pengembangan kapasitas generasi muda Indonesia menuju visi kesuksesan tahun 2030. Tech Stack: React.js, Django, HTML, CSS, JavaScript.",
        role: "Co-Founder & CTO",
        link: "https://www.instagram.com/2030.sukses?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    // {
    //     id: 5,
    //     title: "QIOS",
    //     category: "Web Development & AI",
    //     year: "2025 - Present",
    //     description: "Gerakan kolaboratif yang berfokus pada pengembangan kapasitas generasi muda Indonesia menuju visi kesuksesan tahun 2030. Tech Stack: React.js, Django, HTML, CSS, JavaScript.",
    //     role: "Co-Founder & CTO",
    //     link: "https://www.instagram.com/2030.sukses?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    // }
];

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section id="projects" className="py-32 bg-[#050505] text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-20">
                    <span className="block text-sm uppercase tracking-widest text-gray-500 mb-4">Selected Works</span>
                    <h2 className="text-[10vw] leading-[0.8] font-bold font-['Syne'] tracking-tighter uppercase">
                        Projects
                    </h2>
                </div>

                <div className="flex flex-col">
                    {projects.map((project) => (
                        <motion.a
                            key={project.id}
                            href={project.link}
                            target={project.link !== "#" ? "_blank" : "_self"}
                            rel={project.link !== "#" ? "noopener noreferrer" : ""}
                            className={`group relative block border-t border-white/10 py-12 transition-colors duration-500 hover:bg-white/5 ${project.link === "#" ? "cursor-default" : "cursor-pointer"}`}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
                                <div className="md:w-1/2">
                                    <h3 className="text-3xl md:text-5xl font-bold font-['Syne'] mb-2 group-hover:translate-x-4 transition-transform duration-500">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm text-gray-500 uppercase tracking-widest">{project.category}</span>
                                </div>

                                <div className="md:w-1/4 text-right md:text-left">
                                    <span className="text-sm text-gray-500">{project.role}</span>
                                </div>

                                <div className="md:w-1/4 flex justify-end">
                                    <span className="text-sm text-gray-500 mr-4">{project.year}</span>
                                    {project.link !== "#" && (
                                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    )}
                                </div>
                            </div>

                            <AnimatePresence>
                                {hoveredProject === project.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pt-6 text-gray-400 max-w-2xl text-lg leading-relaxed">
                                            {project.description}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.a>
                    ))}
                    <div className="border-t border-white/10"></div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
