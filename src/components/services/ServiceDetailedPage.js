import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ServiceDetailedPageData } from './serviceApi'; // Ensure to import your data here
import "../style/services.css"
import StartProject from "../common/StartProject"
const ServiceDetailedPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  // Find the current service based on the slug
  const currentServiceIndex = ServiceDetailedPageData.findIndex((item) => {
    const serviceSlug = item.title
      .toLowerCase()
      .replace(/[\/]/g, '-')
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, ''); // Normalize the title for comparison

    return serviceSlug === serviceId;
  });

  const service = ServiceDetailedPageData[currentServiceIndex];

  if (!service) {
    return <h2>Service not found</h2>;
  }

  // Handler for navigating to a different service
  const navigateToService = (index) => {
    const nextService = ServiceDetailedPageData[index];
    const nextServiceSlug = nextService.title
      .toLowerCase()
      .replace(/[\/]/g, '-')
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, ''); // Normalize the title for URL
    navigate(`/services/${nextServiceSlug}`);
  };

  return (
    <main>
      <div className="container" style={{ padding: '20px' }}>
        <p className="h3">Services</p>
        <h1 style={{ fontSize: '2rem' }}>{service.title}</h1>
      </div>

      <div className="container-fluid">
        <img
          src={`${process.env.PUBLIC_URL}/media/services/${service.img1}`}
          alt={service.title}
          className="img-fluid py-5"
          width={'100%'}
        />
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
              {Object.keys(service.AboutItem.section1.item2.answer).map(
                (key, index) => (
                  <div key={index}>
                    <h6>{service.AboutItem.section1.item2.answer[key].title}</h6>
                    <p>{service.AboutItem.section1.item2.answer[key].description}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '106px 106px' }}>
        <img
          src={`${process.env.PUBLIC_URL}/media/services/${service.img2}`}
          alt={service.title}
          className="img-fluid py-5"
          width={'100%'}
        />
      </div>

      <div className="container-fluid questionSection">
        <div className="row flex-column">
          <div className="row">
            <h5 className="col-6">When should I consider {service.title}?</h5>
            <div className="col-6">
              {Object.keys(service.AboutItem.section2.item1.answer).map(
                (key, index) => (
                  <div key={index}>
                    <h6>{service.AboutItem.section2.item1.answer[key].title}</h6>
                    <p>{service.AboutItem.section2.item1.answer[key].description}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="row">
            <h5 className="col-6">How is {service.title} executed?</h5>
            <div className="col-6">
              {Object.keys(service.AboutItem.section2.item2.answer).map(
                (key, index) => (
                  <div key={index}>
                    <h6>{service.AboutItem.section2.item2.answer[key].title}</h6>
                    <p>{service.AboutItem.section2.item2.answer[key].description}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid NavigateService">
  <div className="row">
    <div className="col-6 d-flex flex-column align-items-start">
      {/* Previous Service Section */}
      {currentServiceIndex > 0 && (
        <div
          className="previous-service"
          style={{ cursor: 'pointer', background: 'transparent' }}
          onClick={() => navigateToService(currentServiceIndex - 1)}
        >
          <h6 className='text-black-50'>previous Service</h6>
          <h5 style={{ margin: 0, marginBottom: '10px'}}  >
            {ServiceDetailedPageData[currentServiceIndex - 1].title}
          </h5>
          <img
            src="/media/smalll-icons/LeftSideArrow.svg"
            alt="Previous Service"
            
          />

        </div>
      )}
    </div>

    <div className="col-6 d-flex flex-column align-items-end">
      {/* Next Service Section */}
      {currentServiceIndex < ServiceDetailedPageData.length - 1 && (
        <div
          className="next-service text-end"
          style={{ cursor: 'pointer', background: 'transparent' }}
          onClick={() => navigateToService(currentServiceIndex + 1)}
        >
          <h6 className='text-black-50'>Next Service</h6>
          <h5 style={{ margin: 0 }}>
            {ServiceDetailedPageData[currentServiceIndex + 1].title}
          </h5>
          <img
            src="/media/smalll-icons/RightSideArrow.svg"
            alt="Next Service"
            style={{ marginTop: '10px' }}
          />
        </div>
      )}
    </div>
  </div>
</div>

  <StartProject />
    </main>
  );
};

export default ServiceDetailedPage;
