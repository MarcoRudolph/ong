const PricingList = ({}) => {
  const prices = [
    {
      price: 120,
      service: "massage",
    },
    {
      price: 50,
      service: "Tigerbalm",
    },
  ];

  return (
    <div className="p-4 w-full">
      <h2 className="text-2xl font-bold">Preisliste</h2>
      <ul>
        {prices.map((price, index) => (
          <li key={index} className="py-2">
            {price.service}: €{price.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingList;
