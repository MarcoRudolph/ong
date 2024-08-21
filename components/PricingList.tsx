import React from "react";
import MassagePricing from "./MassagePricing";

type Service = {
  service: string;
  price30: number;
  price60: number;
  price90: number;
};

const prices: Service[] = [
  {
    service: "Thai-Massage",
    price30: 38,
    price60: 68,
    price90: 98,
  },
  {
    service: "Öl-Wellness-Massage",
    price30: 0,
    price60: 68,
    price90: 98,
  },
  {
    service: "Thai-Yoga-Massage",
    price30: 0,
    price60: 68,
    price90: 98,
  },
  {
    service: "Rückenmassage",
    price30: 38,
    price60: 0,
    price90: 0,
  },
  {
    service: "Fußreflexzonenmassage",
    price30: 38,
    price60: 68,
    price90: 0,
  },
];

const ServiceGrid: React.FC = () => {
  return (
    <div className="p-4 bg-background min-h-screen">
      <div className="flex justify-center mb-4">
        <div className="w-full md:w-1/2">
          <ServiceCard service={prices[0]} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prices.slice(1).map((item, index) => (
          <ServiceCard key={index} service={item} />
        ))}
      </div>
    </div>
  );
};

type ServiceCardProps = {
  service: Service;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="border border-secondary p-4 rounded-md flex flex-col items-start bg-white shadow-lg">
      <h3 className="font-sans italic text-lg mb-2 text-primary">
        {service.service}
      </h3>
      {service.price30 !== 0 && (
        <p className="text-text">30 min: {service.price30}€</p>
      )}
      {service.price60 !== 0 && (
        <p className="text-text">60 min: {service.price60}€</p>
      )}
      {service.price90 !== 0 && (
        <p className="text-text">90 min: {service.price90}€</p>
      )}
    </div>
  );
};

export default ServiceGrid;
