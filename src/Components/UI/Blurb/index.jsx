const Blurb = ({ title, subtitle, blurb }) => {
    return (
        <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{title}</h2>
                    <p className="text-gray-400 text-lg">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {blurb.map((value, index) => (
                        <div 
                        key={index}
                         className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 blurb-shadow">
                            <h3 className="text-xl font-extrbold text-gray-300 mb-4">{value.heading}</h3>
                            <p className="text-gray-400">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blurb;
