import React from 'react';
import { useParams } from 'react-router-dom';
import { ServiceDetailedPageData } from './serviceApi'; // Ensure to import your data here

const ServiceDetailedPage = () => {
    const { serviceId } = useParams();
    const service = ServiceDetailedPageData.find((item) => {
      const serviceSlug = item.title
        .toLowerCase()
        .replace(/[\/]/g, '-')
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, ''); // Normalize the title for comparison
    
      return serviceSlug === serviceId;
    });
    
        
  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <main>
      <div className="container" style={{ padding: '20px' }}>
        <p className="h3">Services</p>
        <h1 style={{ fontSize: '2rem' }}>{service.title}</h1>
      </div>
      
      <div className="container-fluid">
        <img src={`${process.env.PUBLIC_URL}/media/services/${service.img1}`} alt={service.title} className="img-fluid py-5" width={'100%'} />
      </div>
      
      <div className="container-fluid questionSection">
        <div className="row flex-column">
          <div className="row">
            <h5 className="col-6">What is {service.title}?</h5>
            <p className="col-6">{service.AboutItem.section1.item1.answer}</p>
          </div>
          <div className="row">
            <h5 className="col-6">Why do we need {service.title}?</h5>
            <div className="col-6">
              {Object.keys(service.AboutItem.section1.item2.answer).map((key, index) => (
                <div key={index}>
                  <h6>{service.AboutItem.section1.item2.answer[key].title}</h6>
                  <p>{service.AboutItem.section1.item2.answer[key].description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "106px 106px" }}>
        <img src={`${process.env.PUBLIC_URL}/media/services/${service.img2}`} alt={service.title} className="img-fluid py-5" width={'100%'} />
      </div>

      <div className="container-fluid questionSection">
        <div className="row flex-column">
          <div className="row">
            <h5 className="col-6">When should I consider {service.title}?</h5>
            <div className="col-6">
              {Object.keys(service.AboutItem.section2.item1.answer).map((key, index) => (
                <div key={index}>
                  <h6>{service.AboutItem.section2.item1.answer[key].title}</h6>
                  <p>{service.AboutItem.section2.item1.answer[key].description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <h5 className="col-6">How is {service.title} executed?</h5>
            <div className="col-6">
              {Object.keys(service.AboutItem.section2.item2.answer).map((key, index) => (
                <div key={index}>
                  <h6>{service.AboutItem.section2.item2.answer[key].title}</h6>
                  <p>{service.AboutItem.section2.item2.answer[key].description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetailedPage;
