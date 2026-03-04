function Hero () {
    return(
        <section className="min-h-screen flex flex-col justify-center relative px-10 pt-35 pb-20 overflow-hidden">
            <div 
                className="animate-[gridshift_20s_linear_infinite]"
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "linear-gradient(rgba(91, 255, 195, 0.04) 1px, transparent 1px),linear-gradient(90deg, rgba(91, 255, 195, 0.04) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}>
            </div>
        </section>
    )
}

export default Hero