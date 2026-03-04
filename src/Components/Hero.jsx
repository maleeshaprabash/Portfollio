function Hero () {
    return(
        <section className="min-h-screen flex flex-col justify-center relative px-16 pt-35 pb-20 overflow-hidden">
            <div 
                className="animate-[gridshift_20s_linear_infinite]"
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "linear-gradient(rgba(91, 255, 195, 0.04) 1px, transparent 1px),linear-gradient(90deg, rgba(91, 255, 195, 0.04) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}>
            </div>
        
            <div className="absolute h-125 w-125 rounded-full pointer-events-none right-25 animate-[orbpulse_6s_ease-in-out_infinite]"
                style={{
                    background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)',
                }}>
            </div>
            <div className="absolute h-125 w-125 bg-(--accent) rounded-full pointer-events-none bottom-[10%] left-25 animate-[orbpulse_6s_ease-in-out_infinite]"
                style={{
                    background: 'radial-gradient(circle, rgba(123,97,255,0.07) 0%, transparent 70%)',
                }}>
            </div>

            <div className="relative z-10">
                <div className="flex items-center text-(--accent) gap-3 text-[0.65rem] tracking-[0.2em] uppercase mb-7 opacity-0 animate-[fadeUp_0.8s_0.2s_forwards]">
                    <span className="inline-block h-px w-8 bg-(--accent)"></span>
                    Full Stack MERN Developer
                </div>

                <h1 className="font-syne text-[clamp(3.5rem,7vw,6rem)] font-extrabold text-(--text) max-w-[10ch] tracking-tight leading-none opacity-0 animate-[fadeUp_0.8s_0.4s_forwards] mb-6">
                    Maleesha{' '}
                    <span className="relative text-(--accent)">Prabash</span>
                </h1>

                <p className="text-[0.85rem] leading-[1.8] text-(--muted) max-w-115 tracking-wider font-dm-mono mb-12 opacity-0 animate-[fadeUp_0.8s_0.6s_forwards]">
                    Building scalable web applications with MongoDB, Express, React &amp; Node.js.
                    Turning complex problems into elegant digital experiences.
                </p>

                <div className="flex gap-4 items-center font-dm-mono text-[0.7rem] uppercase opacity-0 animate-[fadeUp_0.8s_0.8s_forwards]">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-(--accent) text-(--bg) tracking-[0.15em] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,229,255,0.25)] cursor-none"
                        >
                        View Work
                    </a>
                    <a 
                        href="#contacts"
                        className="text-(--muted) px-8 py-3 border border-(--border) tracking-[0.15em] transition-all duration-200 hover:border-[#5a6780] hover:text-(--text) hover:-translate-y-0.5 cursor-none">
                        Contact Me
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Hero