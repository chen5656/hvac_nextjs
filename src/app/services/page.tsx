import React from 'react';

const services = [
  {
    title: "Heating Services",
    items: [
      "Furnace installation, repair, and maintenance",
      "Heat pump installation, repair, and maintenance",
      "Boiler installation, repair, and maintenance",
      "Radiant heating system installation and repair",
      "Ductless heating system installation and repair",
    ],
  },
  {
    title: "Cooling Services",
    items: [
      "Air conditioner installation, repair, and maintenance",
      "Ductless mini-split system installation, repair, and maintenance",
      "Evaporative cooler installation, repair, and maintenance",
      "Heat pump installation, repair, and maintenance",
    ],
  },
  {
    title: "Ventilation Services",
    items: [
      "Air duct cleaning and sanitization",
      "Air duct sealing and repair",
      "Whole-house ventilation system installation, repair, and maintenance",
      "Indoor air quality assessment and solutions",
      "Exhaust fan installation and repair",
    ],
  },
  {
    title: "Commercial HVAC Services",
    items: [
      "Rooftop unit installation, repair, and maintenance",
      "Packaged system installation, repair, and maintenance",
      "Commercial ventilation system design, installation, and repair",
      "Preventive maintenance programs tailored to your business needs",
    ],
  },
  {
    title: "HVAC Maintenance Plans",
    items: [
      "Regular inspection, cleaning, and tuning of your HVAC system",
      "Priority scheduling for service calls",
      "Discounts on parts and labor for repairs",
      "Improved energy efficiency and extended equipment lifespan",
    ],
  },
  {
    title: "Emergency Services",
    items: [
      "24/7 emergency repair services to ensure your comfort and safety",
      "Rapid response times by our skilled technicians",
      "Service for all major HVAC brands and models",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <div className="services-container mb-5">
        <h3 className="m-5 text-center">OUR SERVICES</h3>
        <p>
          At Greentech Engineering, we provide a comprehensive range of HVAC
          services to meet all your heating, ventilation, and air conditioning
          needs. Our team of certified and experienced technicians is committed
          to delivering exceptional quality and customer satisfaction. We work
          with both residential and commercial clients, ensuring comfort and
          energy efficiency in every project we undertake.
        </p>

        <div className="service-sections">
          {services.map((service, index) => (
            <div className="service" key={index}>
              <h4>{service.title}</h4>
              <ul>
                {service.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .services-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        
        .service-sections {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-gap: 20px;
        }
        
               .service {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
        
        .service h2 {
          margin-top: 0;
        }
        
        .service ul {
          padding-left: 20px;
        }
        
        .service ul li {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
