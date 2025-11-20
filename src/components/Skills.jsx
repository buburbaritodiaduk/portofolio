import React from 'react';
import { motion } from 'framer-motion';

const skills = {
    technical: [
        "Python", "Java", "HTML", "JavaScript", "CSS",
        "React.js", "Django", "Canva", "Figma", "OBS"
    ],
    soft: [
        "Leadership", "Public Speaking", "Teamwork", "Communication"
    ],
    languages: [
        "Bahasa Indonesia (Native)", "Bahasa Inggris"
    ],
    sports: [
        "Sportsmanship", "Discipline", "Strategic Thinking", "Resilience"
    ],
    arts: [
        "Creativity", "Artistic Vision", "Harmony", "Expression"
    ]
};

const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-[#050505] text-white border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <span className="block text-sm uppercase tracking-widest text-gray-500 mb-4">Expertise</span>
                        <h2 className="text-6xl font-bold font-['Syne'] tracking-tighter uppercase mb-8">
                            Skills
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            A mix of technical proficiency and leadership abilities honed through projects and organizational experience.
                        </p>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-gray-300">Technical</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.technical.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="px-4 py-2 bg-white/5 rounded-lg text-gray-300 hover:bg-white hover:text-black transition-colors duration-300"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold mb-6 text-gray-300">Soft Skills</h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.soft.map((skill, index) => (
                                        <span key={index} className="px-4 py-2 border border-white/10 rounded-lg text-gray-400">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-6 text-gray-300">Languages</h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.languages.map((lang, index) => (
                                        <span key={index} className="text-gray-400">
                                            {lang}{index !== skills.languages.length - 1 && ","}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-6 text-gray-300">Sports & Values</h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.sports.map((skill, index) => (
                                        <span key={index} className="px-4 py-2 border border-white/10 rounded-lg text-gray-400 hover:border-white/30 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-6 text-gray-300">Arts & Creativity</h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.arts.map((skill, index) => (
                                        <span key={index} className="px-4 py-2 border border-white/10 rounded-lg text-gray-400 hover:border-white/30 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
