import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../assets/css/price-hyderabad.css'
import Kannur from '../assets/img/kerala/1.jpg'
import Calicut from '../assets/img/kerala/2.jpg'
import Munnar from '../assets/img/kerala/3.jpg'
import Kovalam from '../assets/img/kerala/4.jpg'
import Trivandrum from '../assets/img/kerala/1.jpg'
import Alappuza from '../assets/img/kerala/alappuzha.jpeg'
import Departure from '../assets/img/img/departure.jpg'

function PricesHyderabad() {


  return (
    <div>
      <section className='prices'>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-3 mt-3" data-aos="fade-down" data-aos-offset="10">
              <h2>About Prices</h2>
              <Tabs
                  defaultActiveKey="Information"
                  id="uncontrolled-tab-example"
                  className="mb-3">
                  <Tab eventKey="Information" title="Information">
                    <div className="row">
                      <h3>$ 150 / <span className="fs-18">per person</span></h3>
                      <ol className='d-flex text-decoration-none	mt-3 mb-3'>
                        <li className='me-3 list-style-none'>
                          <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7ZM7 3.0625C7 2.94647 6.95391 2.83519 6.87186 2.75314C6.78981 2.67109 6.67853 2.625 6.5625 2.625C6.44647 2.625 6.33519 2.67109 6.25314 2.75314C6.17109 2.83519 6.125 2.94647 6.125 3.0625V7.875C6.12502 7.95212 6.14543 8.02785 6.18415 8.09454C6.22288 8.16123 6.27854 8.2165 6.3455 8.25475L9.408 10.0048C9.5085 10.0591 9.62626 10.0719 9.73611 10.0406C9.84596 10.0092 9.93919 9.93611 9.99587 9.83692C10.0525 9.73774 10.0682 9.62031 10.0394 9.50975C10.0107 9.39919 9.93982 9.30426 9.842 9.24525L7 7.62125V3.0625Z">
                            </path>
                        </svg>
                        </li>
                        <li className='me-3'>
                          8 Nights / 9 Days
                        </li>
                        <li className='me-3'>
                        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0.43748C14 0.372778 13.9856 0.308889 13.9579 0.250418C13.9302 0.191947 13.8898 0.140348 13.8398 0.0993396C13.7897 0.0583312 13.7312 0.0289339 13.6684 0.0132656C13.6057 -0.00240264 13.5402 -0.00395173 13.4768 0.00872996L9.1875 0.86623L4.89825 0.00872996C4.84164 -0.00258444 4.78336 -0.00258444 4.72675 0.00872996L0.35175 0.88373C0.252608 0.903546 0.163389 0.957088 0.099263 1.03525C0.0351366 1.11342 6.10593e-05 1.21138 0 1.31248L0 13.5625C3.90711e-05 13.6272 0.0144289 13.6911 0.0421328 13.7495C0.0698367 13.808 0.110165 13.8596 0.160212 13.9006C0.210259 13.9416 0.268779 13.971 0.331556 13.9867C0.394332 14.0024 0.459803 14.0039 0.52325 13.9912L4.8125 13.1337L9.10175 13.9912C9.15836 14.0025 9.21664 14.0025 9.27325 13.9912L13.6482 13.1162C13.7474 13.0964 13.8366 13.0429 13.9007 12.9647C13.9649 12.8865 13.9999 12.7886 14 12.6875V0.43748ZM4.375 12.3287V0.97123L4.8125 0.88373L5.25 0.97123V12.3287L4.89825 12.2587C4.84165 12.2474 4.78335 12.2474 4.72675 12.2587L4.375 12.3287ZM8.75 13.0287V1.67123L9.10175 1.74123C9.15836 1.75254 9.21664 1.75254 9.27325 1.74123L9.625 1.67123V13.0287L9.1875 13.1162L8.75 13.0287Z"></path>
                        </svg>
                        </li>
                        <li>Kerala</li>
                      </ol>
                      <p className='mt-2 mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nihil voluptates dolores, sit ipsam recusandae repellendus cum itaque? Amet dolores deleniti nisi corporis aliquam. Debitis cupiditate necessitatibus assumenda harum odio consequatur, tenetur nostrum et pariatur libero ex ipsum numquam est, labore voluptatibus culpa provident dolores sapiente. Neque velit molestiae ipsam.</p>
                      <div className="col-md-3">
                      <h4 className='mt-3 mb-3'>package includes</h4>
                        <ul>
                          <li>Pick up & Drop</li>
                          <li>Food</li>
                          <li>Lorem, ipsum dolor.</li>
                          <li>Lorem, ipsum dolor.</li>
                          <li>Lorem, ipsum dolor.</li>
                          <li>Lorem, ipsum dolor.</li>
                          <li>Lorem, ipsum dolor.</li>
                          <li>Lorem, ipsum dolor.</li>

                        </ul>
                      </div>
                      <div className="col-md-3">
                      <h4 className='mt-3 mb-3'>package includes</h4>
                        <ul>
                          <li>Pick up & Drop</li>
                          <li>Food</li>
                          <li>Lorem, ipsum dolor.</li>
                          <li>Lorem, ipsum dolor.</li>
                          <li>Lorem, ipsum dolor.</li>
                          <li>Lorem, ipsum dolor.</li>
                          <li>Lorem, ipsum dolor.</li>
                          <li>Lorem, ipsum dolor.</li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <img src={Calicut} className="package-img" />
                      </div>
                      <div className="col-12  mb-3 border-top">
                          <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, adipisci Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nisi deleniti tempore nam ipsam repellat iure inventore qui reprehenderit, dolorum saepe sapiente iusto aliquid voluptate quibusdam ad accusamus dicta delectus cupiditate? Deserunt nobis distinctio explicabo facere fuga similique mollitia illo! Ut sunt sint ex at ratione, ipsum amet blanditiis, quidem distinctio excepturi placeat nihil quibusdam enim exercitationem velit non accusantium?</p>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="Paln" title="Tour Plan">
                    <dov className="row justify-content-center">
                      <div className="col-xl-10">
                        <h3>Tour Plan</h3>
                        <div className="d-md-flex border-bottom">
                          <div className="num me-4 mt-3">
                           <h3> 01</h3>
                          </div>
                          <div className="cont">
                            <h4 className='mt-3 mb-3'>Day 01 : Calicut</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum velit sequi quae molestiae quibusdam repellendus, voluptatibus cum culpa. Beatae velit necessitatibus deserunt sed amet. Nulla explicabo, aliquid tempora asperiores labore debitis deleniti tenetur quod iusto corporis hic quibusdam in amet exercitationem recusandae dolorem minima magnam eveniet rem error nisi maxime.</p>
                          </div>
                          <div className="img-div plan-img mb-3 mt-3">
                            <img src={Calicut} className="img-plan" />
                          </div>
                        </div>
                        <div className="d-md-flex border-bottom">
                          <div className="num me-4 mt-3">
                           <h3> 02</h3>
                          </div>
                          <div className="cont">
                            <h4 className='mt-3 mb-3'>Day 02 : Munnar</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum velit sequi quae molestiae quibusdam repellendus, voluptatibus cum culpa. Beatae velit necessitatibus deserunt sed amet. Nulla explicabo, aliquid tempora asperiores labore debitis deleniti tenetur quod iusto corporis hic quibusdam in amet exercitationem recusandae dolorem minima magnam eveniet rem error nisi maxime.</p>
                          </div>
                          <div className="img-div plan-img mb-3 mt-3">
                            <img src={Munnar} className="img-plan" />
                          </div>
                        </div>
                        <div className="d-md-flex border-bottom">
                          <div className="num me-4 mt-3">
                           <h3> 03</h3>
                          </div>
                          <div className="cont">
                            <h4 className='mt-3 mb-3'>Day 03 : Kovalam</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum velit sequi quae molestiae quibusdam repellendus, voluptatibus cum culpa. Beatae velit necessitatibus deserunt sed amet. Nulla explicabo, aliquid tempora asperiores labore debitis deleniti tenetur quod iusto corporis hic quibusdam in amet exercitationem recusandae dolorem minima magnam eveniet rem error nisi maxime.</p>
                          </div>
                          <div className="img-div plan-img mb-3 mt-3">
                            <img src={Kovalam} className="img-plan" />
                          </div>
                        </div>
                        <div className="d-md-flex border-bottom">
                          <div className="num me-4 mt-3">
                           <h3> 04</h3>
                          </div>
                          <div className="cont">
                            <h4 className='mt-3 mb-3'>Day 04 : Trivandrum</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum velit sequi quae molestiae quibusdam repellendus, voluptatibus cum culpa. Beatae velit necessitatibus deserunt sed amet. Nulla explicabo, aliquid tempora asperiores labore debitis deleniti tenetur quod iusto corporis hic quibusdam in amet exercitationem recusandae dolorem minima magnam eveniet rem error nisi maxime.</p>
                          </div>
                          <div className="img-div plan-img mb-3 mt-3">
                            <img src={Trivandrum} className="img-plan" />
                          </div>
                        </div>
                        <div className="d-md-flex border-bottom">
                          <div className="num me-4 mt-3">
                           <h3> 05</h3>
                          </div>
                          <div className="cont">
                            <h4 className='mt-3 mb-3'>Day 05 : Alappuzha</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum velit sequi quae molestiae quibusdam repellendus, voluptatibus cum culpa. Beatae velit necessitatibus deserunt sed amet. Nulla explicabo, aliquid tempora asperiores labore debitis deleniti tenetur quod iusto corporis hic quibusdam in amet exercitationem recusandae dolorem minima magnam eveniet rem error nisi maxime.</p>
                          </div>
                          <div className="img-div plan-img mb-3 mt-3">
                            <img src={Alappuza} className="img-plan" />
                          </div>
                        </div>
                        <div className="d-md-flex ">
                          <div className="num me-4 mt-3">
                           <h3> 06</h3>
                          </div>
                          <div className="cont">
                            <h4 className='mt-3 mb-3'>Day 06 : Kannur</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum velit sequi quae molestiae quibusdam repellendus, voluptatibus cum culpa. Beatae velit necessitatibus deserunt sed amet. Nulla explicabo, aliquid tempora asperiores labore debitis deleniti tenetur quod iusto corporis hic quibusdam in amet exercitationem recusandae dolorem minima magnam eveniet rem error nisi maxime.</p>
                          </div>
                          <div className="img-div plan-img mb-3 mt-3">
                            <img src={Kannur} className="img-plan" />
                          </div>
                        </div>
                        <div className="d-md-flex ">
                          <div className="num me-4 mt-3">
                           <h3> 07</h3>
                          </div>
                          <div className="cont">
                            <h4 className='mt-3 mb-3'>Day 06 : Kannur</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum velit sequi quae molestiae quibusdam repellendus, voluptatibus cum culpa. Beatae velit necessitatibus deserunt sed amet. Nulla explicabo, aliquid tempora asperiores labore debitis deleniti tenetur quod iusto corporis hic quibusdam in amet exercitationem recusandae dolorem minima magnam eveniet rem error nisi maxime.</p>
                          </div>
                          <div className="img-div plan-img mb-3 mt-3">
                            <img src={Departure} className="img-plan" />
                          </div>
                        </div>
                      </div>
                    </dov>
                  </Tab>
                  <Tab eventKey="Location" title="Location" >
                    <div className="row justify-content-center">
                      <div className="col-xl-10">
                      <h3 className='mt-3 mb-3'>Location Map</h3>
                      <iframe title='jaz-travels' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31319.544813540382!2d76.09145449709601!3d11.117615649355466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6367a09827289%3A0xa5bab8b1f3018ca4!2sManjeri%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714159612523!5m2!1sen!2sin" width="100%" height="450" border="none" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>  
                      <p className='mt-3 mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia architecto quam dolore error id dignissimos quas possimus molestias dolores, quidem rem soluta corporis obcaecati, sit saepe eos ullam commodi suscipit voluptatem. Quas corporis ipsum molestiae doloremque non repellat officiis quia exercitationem praesentium vero. Ullam illo laudantium voluptatum qui ad consequuntur!</p>
                      </div>
                    </div>
                  </Tab>
               </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricesHyderabad;
