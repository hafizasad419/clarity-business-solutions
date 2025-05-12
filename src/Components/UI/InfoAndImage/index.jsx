const InfoAndImage = ({
    title,
    paragraphs = [],
    imageSrc,
    altText = 'Story Image' }) => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="h2 text-gray-800">{title}</h2>
                        <div className="space-y-4">
                            {paragraphs.map((text, idx) => (
                                <p key={idx} className="text-gray-600">{text}</p>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden h-80">
                        <img
                            src={imageSrc}
                            alt={altText}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoAndImage;
