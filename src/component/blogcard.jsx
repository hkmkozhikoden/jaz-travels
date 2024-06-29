import React from 'react';
import '../assets/css/blog-card.css';
import Blog1 from '../assets/img/world/1.jpg'; 
import Blog2 from '../assets/img/world/2.jpg'; 
import Blog3 from '../assets/img/world/3.jpg'; 
import Blog4 from '../assets/img/world/4.jpg'; 
import Blog5 from '../assets/img/world/5.jpg'; 
import { Link } from 'react-router-dom';




const BlogCardPage = () => {
  const blogs = [
    {
      title: 'First Blog Title',
      date:'01/04/2024',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia at similique inventore quidem temporibus doloribus nemo exercitationem necessitatibus corporis nam deserunt. Eveniet voluptate quos aperiam laboriosam excepturi numquam nihil.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia at similique inventore quidem temporibus doloribus nemo exercitationem necessitatibus corporis nam deserunt. Eveniet voluptate ',
      image: Blog1
    },
    {
      title: 'Second Blog Title',
      date:'01/04/2024',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia at similique inventore quidem temporibus doloribus nemo exercitationem necessitatibus corporis nam deserunt. Eveniet voluptate quos aperiam laboriosam excepturi numquam nihil.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia at similique inventore quidem temporibus doloribus nemo exercitationem necessitatibus corporis nam deserunt. Eveniet voluptate ',
      image: Blog2
    },
    {
      title: 'Third Blog Title',
      date:'01/04/2024',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia at similique inventore quidem temporibus doloribus nemo exercitationem necessitatibus corporis nam deserunt. Eveniet voluptate quos aperiam laboriosam excepturi numquam nihil.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia at similique inventore quidem temporibus doloribus nemo exercitationem necessitatibus corporis nam deserunt. Eveniet voluptate quos aperiam ',
      image: Blog3
    },
    {
        title: 'Third Blog Title',
        date:'01/04/2024',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia at similique inventore quidem temporibus doloribus nemo exercitationem necessitatibus corporis nam deserunt. Eveniet voluptate quos aperiam laboriosam excepturi numquam nihil.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia at similique inventore quidem temporibus doloribus nemo exercitationem necessitatibus corporis nam deserunt. Eveniet voluptate quos aperiam ',
        image: Blog4
      },
      {
        title: 'Third Blog Title',
        date:'01/04/2024',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia at similique inventore quidem temporibus doloribus nemo exercitationem necessitatibus corporis nam deserunt. Eveniet voluptate quos aperiam laboriosam excepturi numquam nihil.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia at similique inventore quidem temporibus doloribus nemo exercitationem necessitatibus corporis nam deserunt. Eveniet voluptate quos aperiam ',
        image: Blog5
      }
  ];

  return (
    <div>
     <section className='blog-card'>
        <div className="container">
          {blogs.map((blog, index) => (
            <div key={index} className={`row align-items-center justify-content-center mt-2 mb-2 mt-md-3 mb-md-3 border-bottom ${index % 2 === 0 ? 'even-blog' : 'odd-blog'}`}>
              <div className={`col-md-6  ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-offset="10">
               <Link to={'/'}>
               <div className="blog-conts">
                  <h3>{blog.title}</h3>
                  <h6 className='text-primary'>{blog.date}</h6>
                  <p>{blog.content}</p>
                </div></Link>
              </div>
              <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`} data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} data-aos-offset="10">
                <div className="blog-img">
                  <img src={blog.image} alt="blog-img" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogCardPage;
