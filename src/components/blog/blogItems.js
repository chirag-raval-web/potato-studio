import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";


const styles = {
    container: 
    {
        width: '100%',
        maxWidth: '1440px',
        height: 'auto',
        padding: '140px 106px 140px 106px',
        gap: '120px',
    },
    h2 : 
    {
 
        fontFamily: 'Sora',
        fontSize: '80px',
        fontWeight: 600,
        lineHeight: '104px',
        letterSpacing: '-0.04em',
        textAlign: 'left',

    }


}
const BlogData = [
    { 
      id: 1,
      img: 'media/blog/mainblog.webp', // Special image for id 1
      link: 'AI in ux design',
      title: 'AI in UX Design: Embracing Change and Enhancing User Experiences',
      blogInfo: {
        date: '4th Jan 2024',
        readTime: '10 mins'
      }
    },
    { 
      id: 2,
      img: 'media/blog/blg1.webp',
      link: 'emotional design',
      title: 'Designing for Emotion: The Role of UX in Customer Loyalty',
      blogInfo: {
        date: '4th Jan 2024',
        readTime: '10 mins'
      }
    },
    { 
      id: 3,
      img: 'media/blog/blg2.webp',
      link: 'remote work in design',
      title: 'Building a Remote UX Team: Best Practices for Success',
      blogInfo: {
        date: '4th Jan 2024',
        readTime: '9 mins'
      }
    },
    { 
      id: 4,
      img: 'media/blog/blg3.webp',
      link: 'user research',
      title: 'The Importance of User Research in UX Design',
      blogInfo: {
        date: '4th Jan 2024',
        readTime: '10 mins'
      }
    },
    { 
      id: 5,
      img: 'media/blog/blg4.webp',
      link: 'saas design',
      title: 'SaaS UX: Designing for Subscription Success',
      blogInfo: {
        date: '4th Jan 2024',
        readTime: '11 mins'
      }
    },
    { 
      id: 6,
      img: 'media/blog/blg5.webp',
      link: 'interaction design',
      title: 'The Role of Microinteractions in Enhancing UX',
      blogInfo: {
        date: '4th Jan 2024',
        readTime: '7 mins'
      }
    },
    { 
      id: 7,
      img: 'media/blog/blg6.webp',  
      link: 'accessibility in design',
      title: 'The Importance of Accessibility in UX Design',
      blogInfo: {
        date: '4th Jan 2024',
        readTime: '10 mins'
      }
    }
  ];
  

  export const Blogs = () => {
    return (
      <>
        <div className='container-fluid blog-container'>
          <div className='row'>
            {
              BlogData.map((blog) => {
                if (blog.id === 1) {
                  // Special layout for id = 1
                  return (
                    <div className='col-md-12 row' key={blog.id}>
                      <div className='col-6'>
                        <img src={blog.img} alt={blog.title} className='img-fluid' />
                      </div>
                      <div className='blogInfo col-6'>
                        <a href="" className='text-decoration-none text-black-50'>
                          {blog.link}
                        </a>
                        <h4>{blog.title}</h4>
                        <p className='text-black-50'>
                          {`Posted on ${blog.blogInfo.date} • ${blog.blogInfo.readTime}`}
                        </p>
                      </div>
                    </div>
                  );
                } else {
                  // Regular layout for other blog posts
                  return (
                    <div className='col-md-4 blogItems' key={blog.id}>
                      <div className='blogImg'>
                        <img src={blog.img} alt={blog.title} className='img-fluid' />
                      </div>
                      <div className='blogInfo'>
                        <a href="" className='text-decoration-none text-black-50'>
                          {blog.link}
                        </a>
                        <h5>{blog.title}</h5>
                        <p className='text-black-50'>
                          {`Posted on ${blog.blogInfo.date} • ${blog.blogInfo.readTime}`}
                        </p>
                      </div>
                    </div>
                  );
                }
              })
            }
          </div>
        </div>
      </>
    );
  };

  const BlogItems = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // Add a delay to trigger the animation after the page loads
      setTimeout(() => {
        setIsVisible(true);
      }, 100); // 100ms delay before animation starts
    }, []);
  
    return (
      <>
        <div className='container-fluid' style={styles.container}>
          <h1 className={isVisible ? 'fade-slide-in active' : 'fade-slide-in'} style={styles.h2}>
            Blogs
          </h1>
          <p className={`text-black-50 ${isVisible ? 'fade-slide-in active' : 'fade-slide-in'}`}>
            Words of wisdom and experience, curated as blogs.
          </p>
        </div>
        <Blogs />
      </>
    );
  };
  
  

export default BlogItems
