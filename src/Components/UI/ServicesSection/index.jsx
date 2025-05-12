import OutlinedButton from "../OutlinedButton";

const ServicesSection = ({ services }) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {services.map((service, index) => {
        return (
          <div
            key={index}
            className="mb-20 flex flex-col md:flex-row md:items-start md:justify-between gap-8"
          >
            {/* Left: Heading and Button */}
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                {service.title}
              </h2>
              <div className="mt-10 flex justify-start">
                <OutlinedButton
                  type="link"
                  to="/blogs"
                  text="Get Started"
                />
              </div>
            </div>

            {/* Right: Paragraphs */}
            <div className="md:w-1/2 text-left text-gray-700 text-base leading-relaxed">
              {service.description?.map((para, index) => (
                <p
                  key={index}
                  className={`mb-4 font-bold ${index === 0 ? "mb-4 font-bold" : "font-normal"}`}>{para}</p>
              ))}
              <hr className="border-t border-gray-300 my-4" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
