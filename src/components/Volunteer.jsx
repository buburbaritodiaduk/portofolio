import React from 'react';
import { motion } from 'framer-motion';

const volunteers = [
    { role: "PIC, Divisi Logistik Equipment & Security", event: "Compfest UI 2025" },
    { role: "PIC, Divisi Operasional", event: "Open House Fasilkom UI 2025" },
    { role: "VPIC, Divisi Operasional", event: "Dasar-Dasar Pemrograman 0 UI 2025" },
    { role: "Penanggung Jawab Logistik", event: "Gelar Karya Fasilkom UI 2024" },
    { role: "Staff Operasional", event: "Open House Fasilkom UI 2024" },
    { role: "Staff Operasional", event: "TEDx Universitas Indonesia 2025" },
    { role: "Staff Humas & Publikasi", event: "Campus Expo SMAN 47 Jakarta 2025" },
    { role: "Staff Mentor dan Peserta", event: "BETIS Fasilkom UI 2025" },
    { role: "Staff Mentor", event: "Dasar-Dasar Pemrograman 0 UI 2025" },
    { role: "Staff Showrunner Festival", event: "Pesta Rakyat Fasilkom UI 2025" },
    { role: "Staff Runner", event: "Futuremakers Youth Employability Programme PLAN International 2025" },
    { role: "Penanggung Jawab", event: "Laskar Biru Merah 2025" },
];

const Volunteer = () => {
    return (
        <section id="volunteer" className="py-32 bg-[#050505] text-white border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="mb-20">
                    <span className="block text-sm uppercase tracking-widest text-gray-500 mb-4">Community & Service</span>
                    <h2 className="text-[10vw] leading-[0.8] font-bold font-['Syne'] tracking-tighter uppercase">
                        Volunteer
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                    {volunteers.map((vol, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex flex-col border-b border-white/10 pb-6"
                        >
                            <h4 className="text-xl font-bold font-['Syne'] mb-2">{vol.event}</h4>
                            <span className="text-gray-500 italic">{vol.role}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Volunteer;
