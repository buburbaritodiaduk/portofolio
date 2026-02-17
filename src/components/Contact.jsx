import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github } from 'lucide-react';

const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/nandapascua?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/aryandana-pascua-patiung-a49b7b330/' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/buburbaritodiaduk' },
];

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-[#050505] min-h-[60vh] flex flex-col justify-between">
            <div className="container mx-auto px-4">
                <div className="mb-20">
                    <span className="block text-sm uppercase tracking-widest text-gray-500 mb-4">Get in touch</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[4vw] leading-[1.1] font-bold font-['Syne'] tracking-tighter uppercase mix-blend-difference hover:text-gray-500 transition-colors duration-500 cursor-pointer"
                    >
                        <a href="mailto:aryandana.pascua@ui.ac.id">aryandana.pascua@ui.ac.id</a>
                    </motion.h2>

                    <div className="flex flex-col md:flex-row gap-8 mt-8 ml-1 items-start md:items-center">
                        <div className="flex gap-8">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-white transition-colors"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <social.icon size={28} />
                                </motion.a>
                            ))}
                        </div>

                        <motion.a
                            href="https://docs.google.com/document/d/10jYcFzPkqnMfrtSwqigcuxAuIWT5wRClT5FGHWQEdkE/edit?tab=t.0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-white/20 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            CV
                        </motion.a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">&copy; 2025 Aryandana Pascua Patiung.</p>
            </div>
        </section>
    );
};

export default Contact;
