function Hero () {
    return(
        <section className="min-h-screen flex flex-col lg:flex-row justify-center relative px-16 pt-35 pb-20 overflow-hidden">
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

            <div className="relative z-10 flex-1">
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
            
            <div className="relative z-10 flex-1 flex justify-center items-center animate-[fadein_1s_1s_forwards]">
                <div className="w-full max-w-120 bg-(--surface) border border-(--border) rounded-md overflow-hidden"
                    style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,229,255,0.05)' }}
                >
                    <div className="px-4 py-3 bg-(--border) flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"/>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"/>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"/>
                        <span className="mx-auto text-[0.6rem] tracking-widest uppercase text-(--muted)">
                            developer.json
                        </span>
                    </div>

                    <div className="p-6 text-[0.75rem] leading-loose font-dm-mono">
                        <div><span className="text-[#5a6780]">{'{'}</span></div>
                        <div>&nbsp;&nbsp;
                            <span className="text-[#7b61ff]">"name"</span>
                            <span className="text-[#5a6780]">:</span> 
                            <span className="text-[#ffd97d]">"Maleesha Prabash"</span>
                            <span className="text-[#5a6780]">,</span>
                        </div>

                        <div>&nbsp;&nbsp;
                            <span className="text-[#7b61ff]">"role"</span>
                            <span className="text-[#5a6780]">:</span> 
                            <span className="text-[#ffd97d]">"MERN Developer"</span>
                            <span className="text-[#5a6780]">,</span>
                        </div>

                        <div>&nbsp;&nbsp;
                            <span className="text-[#7b61ff]">"experience"</span>
                            <span className="text-[#5a6780]">:</span> 
                            <span className="text-[#00e5ff]">2</span>
                            <span className="text-[#5a6780]">,</span>
                        </div>

                        <div>&nbsp;&nbsp;
                            <span className="text-[#7b61ff]">"stack"</span>
                            <span className="text-[#5a6780]">:</span> 
                            <span className="text-[#5a6780]">[</span>
                        </div>
                        
                        {['MongoDB', 'Express.js', 'React', 'Node.js'].map((item, i) => (
                            <div key={item}>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffd97d]">"{item}"</span>{i < 3 && <span className="text-[#5a6780]">,</span>}</div>
                        ))}
                        <div>&nbsp;&nbsp;
                            <span className="text-[#5a6780]">],</span>
                        </div>

                        <div>&nbsp;&nbsp;
                            <span className="text-[#7b61ff]">"available"</span>
                            <span className="text-[#5a6780]">:</span> 
                            <span className="text-[#00ffa3]">true</span>
                        </div>

                        <div>
                            <span className="text-[#5a6780]">{'}'}</span>
                            <span className="inline-block w-2 h-3.5 bg-[#00e5ff] ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeIn_1s_1.5s_forwards] z-10">
                <span className="text-[0.55rem] tracking-[0.2em] uppercase text-(--muted)">Scroll</span>
                <div className="w-px h-10 bg-(--border) relative overflow-hidden">
                    <span className="absolute -top-full left-0 w-full h-full bg-(--accent) animate-[scrollDown_1.5s_ease-in-out_infinite]" />
                </div>
            </div>
        </section>
    )
}

export default Hero