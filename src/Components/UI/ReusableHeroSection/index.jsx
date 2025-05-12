const ReusableHeroSection = ({
  title = "Default Title",
  subtitle = "Default subtitle goes here",
  className = "",
}) => {
  return (
    <section className={`bg-hero-gradient text-white py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="w-full text-center">
          <h1 className="h2 mb-6">{title}</h1>
          <p className="text-base md:text-xl mb-8 text-gray-300">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default ReusableHeroSection;
