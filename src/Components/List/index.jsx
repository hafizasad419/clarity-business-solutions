import React from "react";


const InfoSection = ({
  heading,
  items = [],
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Dynamic stuff */}
          <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-800">{heading}</h3>
            {items.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-c-zinc font-bold text-xl">{item.number}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default InfoSection;
