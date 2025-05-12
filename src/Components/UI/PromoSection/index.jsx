import OutlinedButton from "../OutlinedButton";

/**
 * Reusable PromoSection Component with stain background
 * @param {string} title - Main heading
 * @param {string} subtitle - Subheading or description
 * @param {string} buttonText - CTA button text
 * @param {Array} features - List of feature objects with title and description
 */
const PromoSection = ({
  title,
  subtitle,
  buttonText,
  features = [],
}) => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-black text-white p-8 flex flex-col md:flex-row items-center justify-center">
      {/* Stain Mark Background */}
      <div className="absolute left-[-10%] top-[20%] w-[400px] h-[400px] z-0 opacity-30 pointer-events-none blur-2xl">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            fill="#04919b"
            d="M40.2,-64.7C50.3,-56.6,56.9,-42.2,62.1,-28.2C67.3,-14.2,71.2,0.4,67.2,12.9C63.3,25.4,51.5,35.8,39.2,45.4C26.9,55.1,13.4,64.1,-1.9,66.7C-17.2,69.3,-34.4,65.5,-48.1,56.5C-61.8,47.5,-72,33.3,-74.2,18.1C-76.3,2.9,-70.3,-13.3,-61.9,-26.4C-53.6,-39.6,-43,-49.7,-30.6,-58.2C-18.1,-66.8,-9,-73.8,3,-78.1C15.1,-82.5,30.2,-84.8,40.2,-64.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Left Section */}
      <div className="relative z-10 md:w-1/2 p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-6">{subtitle}</p>

        <div className="flex justify-start text-black">
          <OutlinedButton
            type="link"
            to={"/services"}
            text={buttonText}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="relative z-10 md:w-1/2 p-6 space-y-6">
        {features.map((feature, idx) => {
          const LucideIcon = feature.icon
          return (
            <div key={idx} className="flex items-start space-x-4">
              <div className="bg-none border-2 border-white text-white rounded-full p-3">
                <LucideIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>



                <p className="text-gray-200 font-thin mt-1">{feature.description}</p>
                <hr className="my-6  border-t-[0.5px] w-full mx-auto opacity-70" />

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PromoSection;
