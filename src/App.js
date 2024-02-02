// site url :- https://demo.templatemonster.com/demo/101273.html

import './App.css';
import { FaPhone, FaLocationDot, FaPhoneVolume, FaRightLong } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { BsGlobe, BsPersonRolodex } from "react-icons/bs";
import { RiBox3Line } from "react-icons/ri";
import { GrStorage } from "react-icons/gr";
import { FaFacebookF, FaTwitter, FaPinterest, FaLinkedinIn, FaLaptopCode, FaApple, FaLaptop, FaMobileAlt, FaCamera } from "react-icons/fa";

function App() {
    return (
        <div className="main-body">
            <div className="body">
                <div className="nav">
                    <div className="top-nav theme f-clr">
                        <div className="cont">
                            <div className="nav-par flex">
                                <div className="left">
                                    <span><MdMailOutline></MdMailOutline> example@gmail.com</span>
                                    <span><FaLocationDot></FaLocationDot> 24/5, 1st Floor, Kurigram</span>
                                    <span><FaPhone></FaPhone>  + (1800) 456 7890</span>
                                </div>
                                <div className='right'>
                                    <a><FaFacebookF></FaFacebookF></a>
                                    <a><FaTwitter></FaTwitter></a>
                                    <a><FaPinterest></FaPinterest></a>
                                    <a><FaLinkedinIn></FaLinkedinIn></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header'>
                    <div className='cont'>
                        <div className='head-par flex'>
                            <div className='left-head'>
                                <div className='head-img'>
                                    <img src={require(`./images/logo.png`)}></img>
                                </div>
                            </div>
                            <div className='right-head'>
                                <div className='manu'>
                                    <ul className='main-manu'>
                                        <li>Home</li>
                                        <li>Company</li>
                                        <li>Service</li>
                                        <li>It Solution</li>
                                        <li>Element</li>
                                        <li>Blog</li>
                                        <li>Contact</li>
                                        <div className='head-btn'>
                                            <button className='theme f-clr'>Get A Quote</button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slider'>
                    <div className='slider-box'>
                        <div className='img-box'>
                            <img src={require(`./images/1.jpg`)}></img>
                            <div className='slider-txt'>
                                <div className='txt-box'>
                                    <h3 className='f-clr'>We Provide Outsourced</h3>
                                    <h1 className='f-clr'>IT Services</h1>
                                    <h3 className='f-clr'>for Small & Mid-sized Businesses</h3>
                                </div>
                                <div className='slider-btn'>
                                    <button className='f-clr theme'>OUR SERVICE</button>
                                    <button className='f-clr b2'>ABOUT US</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section1 sec1'>
                    <div className='cont'>
                        <div className='s1-par flex'>
                            <div className='box1 w25'>
                                <div className='bx-1'>
                                    <div className='icon-box'>
                                        <span className='theme f-clr'><FaLaptopCode></FaLaptopCode></span>
                                    </div>
                                    <div className='bx-txt'>
                                        <h3 className='t-clr'>Responsive Design</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='box1 w25'>
                                <div className='bx-1'>
                                    <div className='icon-box'>
                                        <span className='theme f-clr'><FaPhoneVolume></FaPhoneVolume></span>
                                    </div>
                                    <div className='bx-txt'>
                                        <h3 className='t-clr'>24/7 Online Support</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='box1 w25'>
                                <div className='bx-1'>
                                    <div className='icon-box'>
                                        <span className='theme f-clr'><BsPersonRolodex></BsPersonRolodex></span>
                                    </div>
                                    <div className='bx-txt'>
                                        <h3 className='t-clr'>Quality Product</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='box1 w25'>
                                <div className='bx-1'>
                                    <div className='icon-box'>
                                        <span className='theme f-clr'><BsGlobe></BsGlobe></span>
                                    </div>
                                    <div className='bx-txt'>
                                        <h3 className='t-clr'>Productivi Software</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section2 sec'>
                    <div className='cont'>
                        <div className='about-box flex'>
                            <div className='a-left w50'>
                                <div className='a-head'>
                                    <p className='f-colr'>ABOUT US</p>
                                    <h2 className='t-head'>Preparing For Your Success</h2>
                                    <h2 className='t-head'>Provide Best <span className='t-head f-colr'>IT Solutions.</span></h2>
                                </div>
                                <div className='a-info'>
                                    <p>
                                        Voice and Data Systems are crucial to the success or failure of most businesses. any companies provide laptops, cell phones.
                                    </p>
                                </div>
                                <div className='l-info'>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is and reproduced below for those interested. Sections 1.10.32 and also 1.10.33 from “de Finibus Bonorum et Malorum" by Cicero are alse reproduced in their exact original form, accompanied </p>
                                    <br></br><p>The standard chunk of Lorem Ipsum used since the 1500s is and reproduced below for those interested</p>
                                    <div className='a-btn'>
                                        <button className='f-clr theme'>More Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className='a-right w50'>
                                <div className='abox-img'>
                                    <img src={require(`./images/2.png`)}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section3 sec'>
                    <div className='cont'>
                        <div className='service'>
                            <div className='ser-head'>
                                <h3 className='f-colr'>SERVICES</h3>
                                <h2 className='t-head'>Service We Provide</h2>
                            </div>
                            <div className='ser-info'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim advis minim veniam, quis nostrud exercitat</p>
                            </div>
                            <div className='detail-box flex'>
                                <div className='d1 w33'>
                                    <div className='d-box'>
                                        <div className='ic-box'>
                                            <span className='f-colr'><FaApple></FaApple></span>
                                        </div>
                                        <div className='d-head'>
                                            <h3 className='f-colr'>Apple Products Repair</h3>
                                        </div>
                                        <div className='f-info'>
                                            <p>Whether bringing new amazing products and services to market discovering new ways to make mature products.</p>
                                        </div>
                                        <div className='d-btn'>
                                            <button>Read More  <FaRightLong></FaRightLong></button>
                                        </div>
                                    </div>
                                </div>
                                <div className='d1 w33'>
                                    <div className='d-box'>
                                        <div className='ic-box'>
                                            <span className='f-colr'><FaLaptop></FaLaptop></span>
                                        </div>
                                        <div className='d-head'>
                                            <h3 className='f-colr'>Smartphone Repair</h3>
                                        </div>
                                        <div className='f-info'>
                                            <p>Whether bringing new amazing products and services to market discovering new ways to make mature products.</p>
                                        </div>
                                        <div className='d-btn'>
                                            <button>Read More  <FaRightLong></FaRightLong></button>
                                        </div>
                                    </div>
                                </div>
                                <div className='d1 w33'>
                                    <div className='d-box'>
                                        <div className='ic-box'>
                                            <span className='f-colr'><RiBox3Line></RiBox3Line></span>
                                        </div>
                                        <div className='d-head'>
                                            <h3 className='f-colr'>Web Development</h3>
                                        </div>
                                        <div className='f-info'>
                                            <p>Whether bringing new amazing products and services to market discovering new ways to make mature products.</p>
                                        </div>
                                        <div className='d-btn'>
                                            <button>Read More  <FaRightLong></FaRightLong></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='detail-box flex'>
                                <div className='d1 w33'>
                                    <div className='d-box'>
                                        <div className='ic-box'>
                                            <span className='f-colr'><FaMobileAlt></FaMobileAlt></span>
                                        </div>
                                        <div className='d-head'>
                                            <h3 className='f-colr'>Mobile Application</h3>
                                        </div>
                                        <div className='f-info'>
                                            <p>Whether bringing new amazing products and services to market discovering new ways to make mature products.</p>
                                        </div>
                                        <div className='d-btn'>
                                            <button>Read More  <FaRightLong></FaRightLong></button>
                                        </div>
                                    </div>
                                </div>
                                <div className='d1 w33'>
                                    <div className='d-box'>
                                        <div className='ic-box'>
                                            <span className='f-colr'><GrStorage></GrStorage></span>
                                        </div>
                                        <div className='d-head'>
                                            <h3 className='f-colr'>Domain & Hosting Service</h3>
                                        </div>
                                        <div className='f-info'>
                                            <p>Whether bringing new amazing products and services to market discovering new ways to make mature products.</p>
                                        </div>
                                        <div className='d-btn'>
                                            <button>Read More  <FaRightLong></FaRightLong></button>
                                        </div>
                                    </div>
                                </div>
                                <div className='d1 w33'>
                                    <div className='d-box'>
                                        <div className='ic-box'>
                                            <span className='f-colr'><FaCamera></FaCamera></span>
                                        </div>
                                        <div className='d-head'>
                                            <h3 className='f-colr'>Graphics Design</h3>
                                        </div>
                                        <div className='f-info'>
                                            <p>Whether bringing new amazing products and services to market discovering new ways to make mature products.</p>
                                        </div>
                                        <div className='d-btn'>
                                            <button>Read More  <FaRightLong></FaRightLong></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section4 sec theme'>
                    <div className='bimg'>
                        <div className='cont'>
                            <div className='b-line'>
                                <h4 className='f-clr'>+880 013 143 206</h4>
                                <h2 className='f-clr t-head'>To make requests for the</h2>
                                <h2 className='f-clr t-head'>further information</h2>
                            </div>
                            <div className='b-btn'>
                                <button className='f-colr'>Join With Now <FaRightLong></FaRightLong></button>
                            </div>
                            <div className='status'>
                                <div className='flex d-fram'>
                                    <div className='f-1'>
                                        <span>15K</span>
                                        <h4 className='f-colr'>Happy Client</h4>
                                    </div>
                                    <div className='f-1'>
                                        <span>1280+</span>
                                        <h4 className='f-colr'>Account Number</h4>
                                    </div>
                                    <div className='f-1'>
                                        <span>10K</span>
                                        <h4 className='f-colr'>Finished Projects</h4>
                                    </div>
                                    <div className='f-1'>
                                        <span>992+</span>
                                        <h4 className='f-colr'>Win Awards</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section5 sec'>
                    <div className='cont'>
                        <div className='work'>
                            <div className='w-head'>
                                <p className='f-colr'>PORTFOLIO</p>
                                <h2 className='t-head'>Our Latest Works For</h2>
                                <h2 className='t-head'>Your Business</h2>
                            </div>
                            <div className='w-slidbtn'>
                                <button>All Works</button>
                                <button>Branding</button>
                                <button>Prototype</button>
                                <button>UX Research</button>
                                <button>Web Design</button>
                            </div>
                            <div className='w-img flex'>
                                <div className='wimg1 w33'>
                                    <img src={require(`./images/4.jpg`)}></img>
                                </div>
                                <div className='wimg1 w33'>
                                    <img src={require(`./images/5.jpg`)}></img>
                                </div>
                                <div className='wimg1 w33'>
                                    <img src={require(`./images/6.jpg`)}></img>
                                </div>
                            </div>
                            <div className='w-img flex'>
                                <div className='wimg1 w33'>
                                    <img src={require(`./images/7.jpg`)}></img>
                                </div>
                                <div className='wimg1 w33'>
                                    <img src={require(`./images/8.jpg`)}></img>
                                </div>
                                <div className='wimg1 w33'>
                                    <img src={require(`./images/9.jpg`)}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section6 sec'>
                    <div className='cont'>
                        <div className='team'>
                            <div className='team-head'>
                                <p className='f-colr'>TEAM MEMBER</p>
                                <h2 className='t-head'>Our Awesome Creative</h2>
                                <h2 className='t-head'>Team Member</h2>
                            </div>
                            <div className='team-member flex'>
                                <div className='team-img w25'>
                                    <img src={require(`./images/11.jpg`)}></img>
                                    <div className='m-info'>
                                        <h5>David Malaan</h5>
                                        <p className='f-colr'>CEO</p>
                                    </div>
                                </div>
                                <div className='team-img w25'>
                                    <img src={require(`./images/12.jpg`)}></img>
                                    <div className='m-info'>
                                        <h5>Andres Jhohne</h5>
                                        <p className='f-colr'>DIRECTOR</p>
                                    </div>
                                </div>
                                <div className='team-img w25'>
                                    <img src={require(`./images/13.jpg`)}></img>
                                    <div className='m-info'>
                                        <h5>Michel Balak</h5>
                                        <p className='f-colr'>FOUNDER</p>
                                    </div>
                                </div>
                                <div className='team-img w25'>
                                    <img src={require(`./images/14.jpg`)}></img>
                                    <div className='m-info'>
                                        <h5>Jemes Rodrigez</h5>
                                        <p className='f-colr'>MANAGER</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section7 sec'>
                    <div className='cont'>
                        <div className='plan'>
                            <div className='p-head'>
                                <p className='f-colr'>PRICING AND PLAN</p>
                                <h2 className='t-head'>Choose Your Best Plan</h2>
                            </div>
                            <div className='price'>
                                <div className='p-box flex'>
                                    <div className='w33 p1'>
                                        <div className='ph'>
                                            <h4 className='f-colr'>Basic Plan</h4>
                                        </div>
                                        <div className='pinfo'>
                                            <p>30 Days Trial Features Synced To Cloud Database 10 Hours Of Support Social Media Integration Unlimited Features</p>
                                        </div>
                                        <div className='pri'>
                                            <span className='f-colr pri-font'>$49.99/</span><span className='f-colr'>month</span>
                                        </div>
                                        <div className='pribtn'>
                                            <button>Choose Plan</button>
                                        </div>
                                    </div>
                                    <div className='w33 p1'>
                                        <div className='ph'>
                                            <h4 className='f-colr'>Premium Plan</h4>
                                        </div>
                                        <div className='pinfo'>
                                            <p>30 Days Trial Features Synced To Cloud Database 10 Hours Of Support Social Media Integration Unlimited Features</p>
                                        </div>
                                        <div className='pri'>
                                            <span className='f-colr pri-font'>$99.77/</span><span className='f-colr'>month</span>
                                        </div>
                                        <div className='pribtn'>
                                            <button>Choose Plan</button>
                                        </div>
                                    </div>
                                    <div className='w33 p1'>
                                        <div className='ph'>
                                            <h4 className='f-colr'>Ultra Plan</h4>
                                        </div>
                                        <div className='pinfo'>
                                            <p>30 Days Trial Features Synced To Cloud Database 10 Hours Of Support Social Media Integration Unlimited Features</p>
                                        </div>
                                        <div className='pri'>
                                            <span className='f-colr pri-font'>$89.49/</span><span className='f-colr'>month</span>
                                        </div>
                                        <div className='pribtn'>
                                            <button>Choose Plan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section8 sec'>
                    <div className='cont'>
                        <div className='test flex'>
                            <div className='test1 w33'>
                                <div className='te1'>
                                    <div className='t-info'>
                                        <p>Dignissim per dis dignissim mi nibh a parturient habitasse suspendisse ut a feugiat morbi neque don't is tortor.Tellus volutpat scelerisque techno tempor.</p>
                                    </div>
                                </div>
                                <div className='photo'>
                                    <div className='iflx flex'>
                                        <div className='tim'>
                                            <img src={require(`./images/15.jpg`)}></img>
                                        </div>
                                        <div className='tinf'>
                                            <p>Clare Olsone</p>
                                            <span className='f-colr'>Financial Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='test1 w33'>
                                <div className='te1'>
                                    <div className='t-info'>
                                        <p>Dignissim per dis dignissim mi nibh a parturient habitasse suspendisse ut a feugiat morbi neque don't is tortor.Tellus volutpat scelerisque techno tempor.</p>
                                    </div>
                                </div>
                                <div className='photo'>
                                    <div className='iflx flex'>
                                        <div className='tim'>
                                            <img src={require(`./images/16.jpg`)}></img>
                                        </div>
                                        <div className='tinf'>
                                            <p>Jamal Vuiyan</p>
                                            <span className='f-colr'>Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='test1 w33'>
                                <div className='te1'>
                                    <div className='t-info'>
                                        <p>Dignissim per dis dignissim mi nibh a parturient habitasse suspendisse ut a feugiat morbi neque don't is tortor.Tellus volutpat scelerisque techno tempor.</p>
                                    </div>
                                </div>
                                <div className='photo'>
                                    <div className='iflx flex'>
                                        <div className='tim'>
                                            <img src={require(`./images/15.jpg`)}></img>
                                        </div>
                                        <div className='tinf'>
                                            <p>Israt Jahan</p>
                                            <span className='f-colr'>Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section9 sec'>
                    <div className='cont'>
                        <div className='artical'>
                            <div className='a-par flex'>
                                <div className='art-left'>
                                    <h3 className='f-colr'>LATEST ARTICLE</h3>
                                    <h2 className='t-head'>See Our Latest</h2>
                                    <h2 className='t-head'>Blog Posts</h2>
                                </div>
                                <div className='art-btn'>
                                    <button className='theme'>See All Blogs</button>
                                </div>
                            </div>
                            <div className='main-art flex'>
                                <div className='art-box w33'>
                                    <div className='art-img'>
                                        <img src={require(`./images/17.jpg`)}></img>
                                    </div>
                                    <div className='art-info'>
                                        <p>Techno | January 3, 2023</p>
                                        <h4>The five devices you need to work anytime</h4>
                                        <p>Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod tempor incididunt on labore et dolore.</p>
                                        <button>Read More</button>
                                    </div>
                                </div>
                                <div className='art-box w33'>
                                    <div className='art-img'>
                                        <img src={require(`./images/18.jpg`)}></img>
                                    </div>
                                    <div className='art-info'>
                                        <p>Techno | December 3, 2023</p>
                                        <h4>How to learn PHP 10 tips to get you started</h4>
                                        <p>Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod tempor incididunt on labore et dolore.</p>
                                        <button>Read More</button>
                                    </div>
                                </div>
                                <div className='art-box w33'>
                                    <div className='art-img'>
                                        <img src={require(`./images/19.jpg`)}></img>
                                    </div>
                                    <div className='art-info'>
                                        <p>Techno | August 3, 2023</p>
                                        <h4>The five devices you need to work anytime</h4>
                                        <p>Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod tempor incididunt on labore et dolore.</p>
                                        <button>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section10'>
                    <div className='cont'>
                        <div className='comp'>
                            <img src={require(`./images/23.png`)}></img>
                            <img src={require(`./images/24.png`)}></img>
                            <img src={require(`./images/25.png`)}></img>
                            <img src={require(`./images/26.png`)}></img>
                            <img src={require(`./images/27.png`)}></img>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <div className='f-img'>
                        <div className='cont sec'>
                            <div className='footer-info flex'>
                                <div className='f1 w25'>
                                    <div className='f1-img'>
                                        <img src={require(`./images/logo1.png`)}></img>
                                    </div>
                                    <div className='f-data'>
                                        <p>Condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus.</p>
                                    </div>
                                    <div className='follow'>
                                        <span>Follow Us</span><span><FaFacebookF></FaFacebookF></span><span><FaTwitter></FaTwitter></span><span><FaLinkedinIn></FaLinkedinIn></span><span><FaPinterest></FaPinterest></span>
                                    </div>
                                </div>
                                <div className='f1 w25'>
                                    <h4>Our Services</h4>
                                    <ul className='market'>
                                        <li>Marketing Strategy</li>
                                        <li>Interior Design</li>
                                        <li>Digital Services</li>
                                        <li>Product Selling</li>
                                        <li>Product Design</li>
                                        <li>Social Marketing</li>
                                    </ul>
                                </div>
                                <div className='f1 w25'>
                                    <h4>Company Address</h4>
                                    <p className='p parg'>Porem awesome dolor sitework amet, consetur acing elit, sed do eiusmod ligal</p>
                                    <p className='add p'>Address :54/1 New dhas sorini Asut, Melbord Austria.</p>
                                    <p className='p pho'>Phone :54786547521</p>
                                    <p className='p'>Email :demo@example.com</p>
                                </div>
                                <div className='f1 w25'>
                                    <h4>Popular Post</h4>
                                    <div className='f-flex fl-1 flex'>
                                        <div className='foo-img'>
                                            <img src={require(`./images/21.jpg`)}></img>
                                        </div>
                                        <div className='foo-info'>
                                            <p>Tiktok Illegally collecting data sharing</p>
                                            <span>December 12, 2023</span>
                                        </div>
                                    </div>
                                    <div className='f-flex fl-2 flex'>
                                        <div className='foo-img'>
                                            <img src={require(`./images/22.jpg`)}></img>
                                        </div>
                                        <div className='foo-info'>
                                            <p>How can use our latest news by</p>
                                            <span>December 15, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cont'>
                            <div className='copyright'>
                                <div className='copy flex'>
                                    <div className='left-cp'>
                                        <p>© 2023 Techno.All Rights Reserved.</p>
                                    </div>
                                    <div className='right-copy'>
                                        <p>Privacy Policy Terms / Conditions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;