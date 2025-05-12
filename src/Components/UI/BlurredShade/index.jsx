function BlurredShade({ className = "", right }) {
    return (
        <div className={`absolute -bottom-2 ${right ? "-right-4" : "-left-4"} w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#08c8cd] to-transparent blur-3xl z-10 ${className}`}>
        </div>
    )
}

export default BlurredShade