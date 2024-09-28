import React from 'react';
import "./style/contact.css"
const Contact = () => {
  return (
    <>
      <div className='container-fluid contact-container py-5'>
        <div className='row'>
          <div className='col-6'>
            <h1 className='h1'>Let’s talk!</h1>
          </div>
          <div className='col-6'>
            <form className='contactForm'>
              {/* Row 1: Name / Company Email */}
              <div className='row mb-3'>
                <div className='col'>
                  <input
                    type='text'
                    className='form-control custom-input'
                    placeholder='Name'
                  />
                </div>
                <div className='col'>
                  <input
                    type='email'
                    className='form-control custom-input'
                    placeholder='Company Email'
                  />
                </div>
              </div>

              {/* Row 2: Company Name (optional) */}
              <div className='row mb-3'>
                <div className='col'>
                  <input
                    type='text'
                    className='form-control custom-input'
                    placeholder='Company Name (optional)'
                  />
                </div>
              </div>

              {/* Row 3: Project Description */}
              <div className='row mb-3'>
                <div className='col'>
                  <textarea
                    className='form-control custom-input'
                    placeholder='Project Description'
                    rows='1'
                  />
                </div>
              </div>

              {/* Row 4: Budget Range (optional) */}
              <div className='row mb-3'>
                <div className='col'>
                  <input
                    type='text'
                    className='form-control custom-input'
                    placeholder='Budget Range (optional)'
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className='row'>
                <div className='col'>
                  <button type='submit' className='btn btn-white border border-secondary-subtle rounded-pill px-3 '>
                    Submit <span><img src="\media\smalll-icons\rigthArrow.webp" alt="" width={24} /></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
