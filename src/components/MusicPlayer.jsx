import React, { useState, useRef, useEffect } from 'react';
import { Disc, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const audioRef = useRef(null);
    const popupTimer = useRef(null);

    // Using a relaxing lofi track
    // Playlist configuration
    const playlist = [
        {
            title: "Lobby Time",
            src: "/jazz.mp3"
        },
        {
            title: "Faster Does It",
            src: "/jazz2.mp3"
        },
        {
            title: "Opportunity Walks",
            src: "/jazz3.mp3"
        },
        {
            title: "Walking Along",
            src: "/jazz4.mp3"
        },
        {
            title: "Cool Vibes",
            src: "/jazz5.mp3"
        },
        {
            title: "I Knew a Guy",
            src: "/jazz6.mp3"
        }
    ];

    const [currentTrackIndex, setCurrentTrackIndex] = useState(() =>
        Math.floor(Math.random() * playlist.length)
    );
    const currentTrack = playlist[currentTrackIndex];

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setShowPopup(false);
        } else {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Playback failed:", error);
                    setIsPlaying(false);
                });
            }
            triggerPopup();
        }
        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => {
        const nextIndex = (currentTrackIndex + 1) % playlist.length;
        setCurrentTrackIndex(nextIndex);
        // Auto-play next track
        setIsPlaying(true);
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch(e => console.error(e));
            triggerPopup();
        }
    }, [currentTrackIndex]);

    const triggerPopup = () => {
        setShowPopup(true);
        if (popupTimer.current) clearTimeout(popupTimer.current);
        popupTimer.current = setTimeout(() => {
            setShowPopup(false);
        }, 5000); // Hide after 5 seconds
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            // Attempt to autoplay
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                    triggerPopup();
                }).catch(error => {
                    console.log("Autoplay prevented:", error);
                    setIsPlaying(false);
                    // Show prompt to user
                    setShowPopup(true);
                });
            }
        }

        // Global click listener to start audio if prevented
        const handleGlobalClick = () => {
            if (audioRef.current && audioRef.current.paused && !isPlaying) {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                    triggerPopup();
                }).catch(e => console.error("Global play failed:", e));
            }
        };

        document.addEventListener('click', handleGlobalClick, { once: true });

        return () => {
            if (popupTimer.current) clearTimeout(popupTimer.current);
            document.removeEventListener('click', handleGlobalClick);
        };
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex items-center justify-end pointer-events-none">
            <audio
                ref={audioRef}
                src={currentTrack.src}
                onEnded={nextTrack}
                onError={(e) => {
                    console.error("Audio failed to load:", e);
                    setShowPopup(true);
                }}
            />

            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: -16, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="bg-black/80 backdrop-blur-md border border-white/10 py-2 px-4 rounded-full flex items-center gap-3 shadow-2xl mr-2 pointer-events-auto"
                    >
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-wider text-white/50 font-bold">
                                {isPlaying ? "Now Playing" : "Paused"}
                            </span>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-white whitespace-nowrap">
                                    {isPlaying ? currentTrack.title : "Click Disc to Play"}
                                </span>
                            </div>
                        </div>
                        {/* Equalizer bars */}
                        {isPlaying && (
                            <div className="flex items-end gap-[2px] h-4 mb-1">
                                <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-0.5 bg-green-400 rounded-full" />
                                <motion.div animate={{ height: [8, 16, 6] }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} className="w-0.5 bg-green-400 rounded-full" />
                                <motion.div animate={{ height: [6, 10, 4] }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }} className="w-0.5 bg-green-400 rounded-full" />
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={togglePlay}
                className="group relative size-12 flex items-center justify-center transition-transform active:scale-95 pointer-events-auto"
            >
                {/* Vinyl Disc Look */}
                <div className={`relative size-12 rounded-full bg-black border-2 border-zinc-800 shadow-xl overflow-hidden ${isPlaying ? 'animate-spin-slow' : ''}`}>
                    {/* Disc Grooves */}
                    <div className="absolute inset-0 rounded-full border-[6px] border-zinc-900 opacity-50"></div>
                    <div className="absolute inset-[8px] rounded-full border-[4px] border-zinc-800 opacity-50"></div>

                    {/* Inner Label */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-4 bg-red-600 rounded-full flex items-center justify-center">
                        <div className="size-1 bg-black rounded-full text-center"></div>
                    </div>

                    {/* Shine/Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                </div>
            </button>

        </div>
    );
};

export default MusicPlayer;
