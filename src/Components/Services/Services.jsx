import React from "react";
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const Services_Data = [
    {
      s_no: "01",
      s_name: "MS Excel",
      s_desc: "Data organization, analysis, and visualization using formulas, pivot tables, and charts.",
    },
    {
      s_no: "02",
      s_name: "SQL",
      s_desc: "Database management, querying, and data manipulation using Structured Query Language.",
    },
    {
      s_no: "03",
      s_name: "Web Development",
      s_desc: "Creating responsive and dynamic websites using modern web technologies.",
    },
    {
      s_no: "04",
      s_name: "Content Writing",
      s_desc: "Crafting clear, engaging, and SEO-friendly content for websites and digital platforms.",
    },
  {
  s_no: "05",
  s_name: "Database Development",
  s_desc: "Designing and managing NoSQL databases using MongoDB for scalable web applications.",
},

    {
      s_no: "06",
      s_name: "SEO Optimization",
      s_desc: "Improving website visibility and ranking on search engines.",
    }
  ];

  return (
    <div>
      <div id='Services' className="services">
        <div className="services-title">
          <h1>My Services</h1>
          <img src={theme_pattern} alt="pattern" />
        </div>
        <div className="services-container">
          {Services_Data.map((service, index) => (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
