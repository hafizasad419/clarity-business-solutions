const List = ({
  heading,
  items = [],
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        
          <div className="space-y-8">
              <h2 className="h2 text-gray-800">{heading}</h2>
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

export default List;
