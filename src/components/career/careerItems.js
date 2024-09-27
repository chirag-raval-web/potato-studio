import React from "react";
import SectionText from "../common/sectionText";

const styles = {
    CoverImg:{
        width: "100%",
        height: "auto",
        padding: "0px 106px 140px 106px",
        gap: "8.32px",
    },
    LifeAtPotato: {
    container:{
        maxWidth: "1440px",
        width: "100%",
        height: "auto",
        padding: "140px 106px 140px 106px",
        gap: "100px",
    },
    items: {
        width: '100%',
        height: 'auto',
        gap: '80px',


    },
    description: {
        width: '345px',
        height: 'auto',
        gap: '16px',
    }

    },
    openings:{
        container:{
            width: '100%',
            height: 'auto',
            maxWidth: '1228px',
            gap: '12px',
        },
        arrow:{
            float:'right',
            marginLeft:'auto'
        }
    }
}

const LifeAtPotato = ({ title, description }) => {
  return (
    <>
      <div className="col-xl-auto " >
        <h5>{title}</h5>
        <p className="text-black-50" style={styles.LifeAtPotato.description} >{description}</p>
      </div>
    </>
  );
};
const Openings = ({title,description,link})=>{
    return (
    <>
    <div className="col-12">
        <a href={link} className="text-decoration-none text-black  d-flex align-items-center" >
                <div >
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div style={styles.openings.arrow} className="float-right">
                    <img src="/media/smalll-icons/rigthArrow.webp" alt="rightArrow"  width={24}  />
                </div>   
        </a>
    </div>
    </>
    )
}
const CareerItems = () => {
  return (
    <>
      <div style={styles.CoverImg}>
        <img src="/media/video.webp" alt="img" className="img-fluid" />
      </div>
      <div className="container-fluid" style={styles.LifeAtPotato.container}>
        <SectionText title={"Life at The Potato Studio"} />
        <div className="row display-flex justify-content-center" style={styles.LifeAtPotato.items}>
          <LifeAtPotato
            title={"Culture of innovation"}
            description={
              "We empower individuals to continuously learn, adapt, and explore the latest trends and embrace them in our work."
            }
          />
          <LifeAtPotato
            title={"Supportive workplace"}
            description={
              "We thrive on teamwork, share ideas, listen to each other and support the growth of one another."
            }
          />
          <LifeAtPotato
            title={"Knowledge sharing"}
            description={
              "We have monthly knowledge sharing sessions to facilitate mutual learning and peer to peer interactions."
            }
          />
          <LifeAtPotato
            title={"Get togethers"}
            description={
              "Every once in a while, we get together for an outing or team lunch to strengthen our bonds outside of work."
            }
          />
        </div>
      </div>
      <div className="container-fluid" style={styles.LifeAtPotato.container}>
            <SectionText title={"Current Openings"} />
            <div className="row" style={styles.openings.container}>
                <Openings 
                title={"UX Designer"}
                description={"3+ years, Degree / Bachelor in Arts or Design is preferred | Bangalore"}
                link={""}/>
                <Openings 
                title={"Design Director"}
                description={"10+ years experience | Bangalore"}
                link={""}/>
                <Openings 
                title={"Senior Visual Designer"}
                description={"4+ years experience, Degree / Bachelors in Arts or Design is preferred | Bangalore"}
                link={""}/>
                <Openings 
                title={"Design Specialist (Business)"}
                description={"5+ years of experience | Bangalore"}
                link={""}/>
                <Openings 
                title={"Graphic Designer"}
                description={"3+ years, Degree / Bachelor in Arts or Design is preferred | Bangalore"}
                link={""}/>
            </div>
      </div>
    </>
  );
};

export default CareerItems;
