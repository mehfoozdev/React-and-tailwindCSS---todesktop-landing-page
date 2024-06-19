import React, { useEffect, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faLaptopCode, faCheckDouble, faCheck, faDownload, faX, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'; // Correct import for the Twitter icon
import Logo from '../assets/icons/asset 0.png'
import icon1 from '../assets/icons/asset 2.svg'
import cIcon1 from '../assets/icons/asset 3.png'
import cIcon2 from '../assets/icons/asset 4.png'
import cIcon3 from '../assets/icons/asset 5.png'
import cIcon4 from '../assets/icons/asset 6.png'
import cIcon5 from '../assets/icons/asset 7.png'
import cIcon6 from '../assets/icons/asset 8.png'
import cIcon7 from '../assets/icons/asset 9.png'
import cIcon8 from '../assets/icons/asset 10.png'
import cIcon9 from '../assets/icons/asset 11.png'
import cIcon10 from '../assets/icons/asset 12.png'
import cIcon11 from '../assets/icons/asset 13.png'
import cIcon12 from '../assets/icons/asset 14.png'
import cIcon13 from '../assets/icons/asset 15.png'
import cIcon14 from '../assets/icons/asset 16.png'

import cIcon15 from '../assets/icons/asset 17.png'
import cIcon16 from '../assets/icons/asset 18.png'
import cIcon17 from '../assets/icons/asset 19.png'
import cIcon18 from '../assets/icons/asset 20.png'
import cIcon19 from '../assets/icons/asset 21.png'
import cIcon20 from '../assets/icons/asset 22.png'
import cIcon21 from '../assets/icons/asset 23.png'
import cIcon22 from '../assets/icons/asset 24.png'
import cIcon23 from '../assets/icons/asset 25.png'
import cIcon24 from '../assets/icons/asset 26.png'
import img1 from '../assets/icons/asset 66.svg'
import img2 from '../assets/icons/asset 37.png'
import img3 from '../assets/icons/asset 38.png'
import img4 from '../assets/icons/asset 39.png'
import img5 from '../assets/icons/asset 40.png'
import img6 from '../assets/icons/asset 44.svg'
import img7 from '../assets/icons/profile pic.jpg'
import img8 from '../assets/icons/asset 46.png'
import img9 from '../assets/icons/asset 47.png'
import img10 from '../assets/icons/asset 54.svg'




const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

const Index = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Is ToDesktop For Me?",
      answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
    },
    {
      question: "How much does ToDesktop cost?",
      answer: "ToDesktop offers various pricing plans to suit different needs. Visit our pricing page for more details."
    },
    {
      question: "Can I customize the desktop app?",
      answer: "Yes, you can customize various aspects of the desktop app to match your branding and functionality requirements."
    },
    {
      question: "Can I customize the desktop app?",
      answer: "Yes, you can customize various aspects of the desktop app to match your branding and functionality requirements."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  const setupIntersectionObserver = (element, isLTR, speed) => {
    if (!element) return;

    const scrollHandler = () => {
      const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
      let totalTranslate = 0;
      if (isLTR) {
        totalTranslate = translateX + initialTranslateLTR;
      } else {
        totalTranslate = -(translateX + initialTranslateRTL);
      }
      element.style.transform = `translateX(${totalTranslate}px)`;
    };
    
    const intersectionCallback = (entries) => {
      const isIntersecting = entries[0].isIntersecting;
      if (isIntersecting) {
        document.addEventListener('scroll', scrollHandler);
      } else {
        document.removeEventListener('scroll', scrollHandler);
      }
    };

    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);

  };

  useEffect(() => {
    const line1Element = line1Ref.current;
    const line2Element = line2Ref.current;
    const line3Element = line3Ref.current;

    setupIntersectionObserver(line1Element, true, 0.15);
    setupIntersectionObserver(line2Element, false, 0.15);
    setupIntersectionObserver(line3Element, true, 0.15);

    return () => {
      document.removeEventListener('scroll', () => {});
    };

  }, []);

  return (
    <>
        <main className='overflow-x-hidden'>
          {/* Hero Section */}
          <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent">
            
            {/* Main Hero Section */}
            <div className="max-w-4xl mx-auto px-6 pt-6 pb-32 flex flex-col sm:items-center sm:text-center sm:pt-12">
              <div className='flex items-center my-6 gap-2 border border-yellow-300 bg-yellow-50 rounded-full px-4 py-1 w-fit shadow-md hover:shadow-lg hover:translate-y-1 transition group'>
                <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
                <p className='font-display font-medium text-yellow-600'>v0.21.1: <span className='text-yellow-800'>Find-in-page bug fixes</span></p>
                <FontAwesomeIcon icon={faArrowRight} className='text-yellow-600 group-hover:translate-x-1 pr-1 transition duration-300'/>
              </div>

              {/* Section only for desktop view */}
              <div className="hidden sm:flex gap-8 my-6  ">
                <div className='flex justify-center gap-2 items-center text-gray-500'> 
                  <FontAwesomeIcon icon={faCode}/>
                  <p>Code Optional</p>
                </div>

                <div className='flex justify-center gap-2 items-center text-gray-500'> 
                  <FontAwesomeIcon icon={faCheckDouble}/>
                  <p>Drag & drop builder</p>
                </div>

                <div className='flex justify-center gap-2 items-center text-gray-500'> 
                  <FontAwesomeIcon icon={faLaptopCode}/>
                  <p>Windows, Max, Linux</p>
                </div>

              </div>

              {/* Hero Section Content */}
              <h1 className='text-4xl font-display font-semibold leading-snug mt-4 sm:text-6xl sm:leading-normal'>
                Web app to desktop app in minutes
              </h1>
              <p className='text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800'>
                Take your web app codebase and transform it into a cross platform desktop app with native functionality.
              </p>
              <div className='mt-12 flex flex-col gap-4 sm:flex-row'>
                <button className='px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90'>Download Now</button>
                <button className='px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 shadow-sm  hover:border-gray-800'>Read Docs</button>
              </div>

            </div>

            {/* Apps Powered => Slider */}
            <div className='flex flex-col gap-8'>
              <div className='flex justify-center gap-3'>
                <img src={icon1} alt="" className='translate-y-2'/>
                <span className='font-medium'>APPS POWERED BY TODESKTOP</span>
                <img src={icon1} alt="" className='-scale-x-100 translate-y-2'/>
              </div>

              {/* Companies Logo's */}
              {/* Line 1 */}
              <div className='flex flex-col gap-4'>
                <div id='line1' ref={line1Ref}  className='flex gap-4 w-screen -translate-x-48 transition-transform ease-linear'>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon1} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon2} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon3} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon4} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon5} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon6} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>


                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon7} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>


                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon8} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon9} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon10} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon11} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>


                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon12} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>


                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon13} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon14} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>


                </div>
              </div>

              {/* Line 2 */}
              <div className='flex flex-col gap-4'>
                <div id='line2' ref={line2Ref}  className='flex gap-4 w-screen -translate-x-36 transition-transform ease-linear'>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon15} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon16} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon17} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon18} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon19} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon20} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>


                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon21} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>


                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon22} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon23} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon24} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon15} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon1} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon2} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon3} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>


                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon4} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>


                  <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                    <img src={cIcon5} alt="" className='w-12 h-12 md:h-16 md:w-16 ' />
                    <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                  </div>

                  
                </div>
              </div>

            </div>


            

          </div>
          {/* Her Section end here  */}


          {/* How it works - section start */}
          <div className="flex flex-col px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-28">

              <h2 className="text-5xl sm:font-semibold mb-14">How it works</h2>
              
              <div className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row">

                <div className="flex flex-col gap-6 lg:w-1/2">

                  <span className='border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display'>Step 1</span>
                  <h3 className='text-4xl'>Django straight form your web app</h3>
                  <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis quas eligendi aperiam quibusdam. Ut veniam incidunt quisquam libero temporibus?</p>

                  <ul className='grid grid-cols-2 gap-2'>
                    <li className='flex gap-4'>
                      <FontAwesomeIcon icon={faCheck} className='text-gray-700 w-5 h-5 text-light'/>
                      <a className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-75' href=''>Multiple Windows</a>
                    </li>

                    <li className='flex gap-4'>
                      <FontAwesomeIcon icon={faCheck} className='text-gray-700 w-5 h-5 text-light'/>
                      <a className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-75' href=''>Offline Support</a>
                    </li>

                    <li className='flex gap-4'>
                      <FontAwesomeIcon icon={faCheck} className='text-gray-700 w-5 h-5 text-light'/>
                      <a className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-75' href=''>Launch a Startup</a>
                    </li>

                    <li className='flex gap-4'>
                      <FontAwesomeIcon icon={faCheck} className='text-gray-700 w-5 h-5 text-light'/>
                      <a className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-75' href=''>Menubar / Tray Menus</a>
                    </li>

                    <li className='flex gap-4'>
                      <FontAwesomeIcon icon={faCheck} className='text-gray-700 w-5 h-5 text-light'/>
                      <a className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-75' href=''>Customize Menus</a>
                    </li>

                    <li className='flex gap-4'>
                      <FontAwesomeIcon icon={faCheck} className='text-gray-700 w-5 h-5 text-light'/>
                      <a className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-75' href=''>Tabs (Mac Only)</a>
                    </li>

                    
                  </ul>

                </div>

                <div className='pt-12'>
                  <img className='lg:ml-28' src={img1} alt="How it works image" />
                </div>

              </div>

              <div className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row mt-12">

                <div className="flex flex-col gap-6 lg:w-1/2">

                  <span className='border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display'>Step 2</span>
                  <h3 className='text-4xl'>Docker pipelines for your server app</h3>
                  <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores facilis quas eligendi aperiam quibusdam. Ut veniam incidunt quisquam libero temporibus?</p>

                  <ul className='grid grid-cols-2 gap-2'>
                    <li className='flex gap-4'>
                      <FontAwesomeIcon icon={faCheck} className='text-gray-700 w-5 h-5 text-light'/>
                      <a className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-75' href=''>Multiple Windows</a>
                    </li>

                    <li className='flex gap-4'>
                      <FontAwesomeIcon icon={faCheck} className='text-gray-700 w-5 h-5 text-light'/>
                      <a className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-75' href=''>Offline Support</a>
                    </li>

                    <li className='flex gap-4'>
                      <FontAwesomeIcon icon={faCheck} className='text-gray-700 w-5 h-5 text-light'/>
                      <a className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-75' href=''>Launch a Startup</a>
                    </li>

                    <li className='flex gap-4'>
                      <FontAwesomeIcon icon={faCheck} className='text-gray-700 w-5 h-5 text-light'/>
                      <a className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-75' href=''>Menubar / Tray Menus</a>
                    </li>

                    <li className='flex gap-4'>
                      <FontAwesomeIcon icon={faCheck} className='text-gray-700 w-5 h-5 text-light'/>
                      <a className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-75' href=''>Customize Menus</a>
                    </li>

                    <li className='flex gap-4'>
                      <FontAwesomeIcon icon={faCheck} className='text-gray-700 w-5 h-5 text-light'/>
                      <a className='text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-75' href=''>Tabs (Mac Only)</a>
                    </li>

                    
                  </ul>

                </div>

                <div className='pt-12'>
                  <img className='lg:ml-28' src={img1} alt="How it works image" />
                </div>

              </div>

          </div>
          {/* How it works - section ends here */}

          {/* ToDesktop Bento Grid - Section starts */}
          <div className="px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-28">
              <h2 className="text-5xl sm:font-semibold mb-14">ToDesktop handles the details</h2>
              
              <div className='flex flex-col gap-6 lg:grid lg:grid-cols-3' >

                <div className="row-start-1 row-end-3 group rounded-2xl p-[2px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 via-purple-200 hover:to-yellow-200">
                  <div className="gap-4 bg-white rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:from-red-50 via-purple-50 group-hover:to-yellow-50">
                    <h3 className='text-2xl'>Native Notifications</h3>
                    <img src={img2} alt="native" />
                  </div>
                </div>

                <div className="row-start-1 row-end-4 group rounded-2xl p-[2px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 via-purple-200 hover:to-yellow-200">
                  <div className="gap-4 bg-white rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:from-red-50 via-purple-50 group-hover:to-yellow-50">
                    <h3 className='text-2xl'>Native Notifications</h3>
                    <p className='text-lg font-normal text-center text-gray-600'>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                    <img src={img3} alt="native" />
                  </div>
                </div>

                <div className="row-start-1 row-end-3 group rounded-2xl p-[2px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 via-purple-200 hover:to-yellow-200">
                  <div className="gap-4 bg-white rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:from-red-50 via-purple-50 group-hover:to-yellow-50">
                    <h3 className='text-2xl'>Native Notifications</h3>
                    <img src={img4} alt="native" />
                  </div>
                </div>

                <div className="row-start-3 row-end-6 group rounded-2xl p-[2px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 via-purple-200 hover:to-yellow-200">
                  <div className="gap-4 bg-white rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:from-red-50 via-purple-50 group-hover:to-yellow-50">
                    <h3 className='text-2xl'>Native Notifications</h3>
                    <p className='text-lg font-normal text-center text-gray-600'>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                    <img src={img5} alt="native" />
                  </div>
                </div>

                <div className="row-start-4 row-end-6 group rounded-2xl p-[2px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 via-purple-200 hover:to-yellow-200">
                  <div className="gap-4 bg-white rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:from-red-50 via-purple-50 group-hover:to-yellow-50">
                    <h3 className='text-2xl'>Native Notifications</h3>
                    <img src={img2} alt="native" />
                  </div>
                </div>

                <div className="row-start-3 row-end-6 group rounded-2xl p-[2px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 via-purple-200 hover:to-yellow-200">
                  <div className="gap-4 bg-white rounded-2xl w-full h-full p-6 flex flex-col items-center group-hover:from-red-50 via-purple-50 group-hover:to-yellow-50">
                    <h3 className='text-2xl'>Native Notifications</h3>
                    <p className='text-lg font-normal text-center text-gray-600'>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                    <img src={img3} alt="native" />
                  </div>
                </div>

              </div>

          </div>
          {/* ToDesktop Bento Grid  - Section ends  */}

          {/* Companies features line */}
          <div className='px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-20'>
            <div  className="border rounded-lg overflow-hidden flex justify-center p-4">
              <div ref={line3Ref} className='flex p-6'>
                <h3 className="whitespace-nowrap my-0 mx-6 text-2xl font-semibold">Python</h3>
                <span>•</span>

                <h3 className="whitespace-nowrap my-0 mx-6 text-2xl font-semibold">Django</h3>
                <span>•</span>

                <h3 className="whitespace-nowrap my-0 mx-6 text-2xl font-semibold">React.js</h3>
                <span>•</span>

                <h3 className="whitespace-nowrap my-0 mx-6 text-2xl font-semibold">TailwindCSS</h3>
                <span>•</span>

                <h3 className="whitespace-nowrap my-0 mx-6 text-2xl font-semibold">Docker Containerize</h3>
                <span>•</span>

                <h3 className="whitespace-nowrap my-0 mx-6 text-2xl font-semibold">AWS Cloud</h3>
                <span>•</span>

                <h3 className="whitespace-nowrap my-0 mx-6 text-2xl font-semibold">Node.js </h3>
                <span>•</span>

                <h3 className="whitespace-nowrap my-0 mx-6 text-2xl font-semibold">Next.js</h3>
                <span>•</span>

                
              </div>

            </div>
          </div>
          {/* Companies features line - ends here */}

          {/* Customer Stories - starts here */}
          <div className='px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-20'>

            <h2 className="text-5xl sm:font-semibold mb-14">Customer stories</h2>
            <div className="rounded-xl border flex flex-col lg:flex-row items-end">
               {/* Left Part */}
                <div className="flex flex-col gap-10 p-6 ">
                  <div className="h-4 w-fit">
                    <img src={img6} alt=""  />
                  </div>
                  <h3 className='text-xl leading-relaxed'>ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.</h3>

                  {/* Tag Containers */}
                  <div className="flex gap-3 flex-wrap">
                    <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                      <FontAwesomeIcon icon={faCheck} />
                      <span className='font-display font-medium'>Cromeless UI</span>
              
                    </div>

                    <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                      <FontAwesomeIcon icon={faCheck} />
                      <span className='font-display font-medium'>Native spellcheck</span>
                    </div>

                    <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                      <FontAwesomeIcon icon={faCheck} />
                      <span className='font-display font-medium'>Task time in menubar</span>
                    </div>

                    <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                      <FontAwesomeIcon icon={faCheck} />
                      <span className='font-display font-medium'>
                      Notification count in the dock</span>
                    </div>

                    <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                      <FontAwesomeIcon icon={faCheck} />
                      <span className='font-display font-medium'>
                      Global hotkey to create task</span>
                    </div>


                  </div>

                  <p className='text-lg font-light text-gray-500'>
                  “ToDesktop provided us with a <span className='text-gray-800'>polished desktop app</span> in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver <span className='text-gray-800'>new and improved features</span> to our customers within days.”
                  </p>

                  <div className="flex gap-4">
                    <div className="w-16">
                      <img src={img7} alt="" className='rounded-full' />
                    </div>
                    <div className="flex flex-col">
                      <h3 className='text-[20px]'>Mehfooz Ali</h3>
                      <p className='text-gray-500'>CEO & Software Engineer | <a href="" className='hover:underline'>Clickup</a></p>
                    </div>


                  </div>

                </div>

               {/* Right Part */}
               <div className='pt-12'>
                  <img className='pl-12' src={img8} alt="Clickup" />
                </div>
            </div>

            {/* Further Testimonial */}
            <div className="flex flex-col lg:flex-row mt-6 lg:mt-12 justify-between gap-6">
            
              <div className="bg-white rounded-2xl w-full h-full p-12 gap-6 flex flex-col  group  hover:bg-gradient-to-br hover:from-red-100 via-purple-100 hover:to-yellow-100 border hover:border-yellow-500">

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                      <FontAwesomeIcon icon={faCode} className='' />
                    </div>
                      <h3 className='text-2xl font-semibold'>Native APIs</h3>
                  </div>

                  <p className='text-lg font-light'>What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>

                  <div className="flex mt-6">
                    <div className="flex gap-4 ">
                      <div className="-mr-6 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                        <img src={img9} alt="" className='min-w-16 min-h-16' />
                      </div>
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                        <img src={img7} alt="" className='' />
                      </div>
                    </div>

                    <div className="flex flex-col px-3">
                      <h3 className='text-[16px]'>Rick Pastoor</h3>
                      <a href="" className='text-gray-500 hover:underline'>Rise</a>
                    </div>
                  </div>


                    
                  

              </div>

              <div className="bg-white rounded-2xl w-full h-full p-12 gap-6 flex flex-col  group  hover:bg-gradient-to-br hover:from-red-100 via-purple-100 hover:to-yellow-100 border hover:border-yellow-500">

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                      <FontAwesomeIcon icon={faCode} className='' />
                    </div>
                      <h3 className='text-2xl font-semibold'>Native APIs</h3>
                  </div>

                  <p className='text-lg font-light'>What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>

                  <div className="flex mt-6">
                    <div className="flex gap-4 ">
                      <div className="-mr-6 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                        <img src={img9} alt="" className='min-w-16 min-h-16' />
                      </div>
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                        <img src={img7} alt="" className='' />
                      </div>
                    </div>

                    <div className="flex flex-col px-3">
                      <h3 className='text-[16px]'>Rick Pastoor</h3>
                      <a href="" className='text-gray-500 hover:underline'>Rise</a>
                    </div>
                  </div>


                    
                  

              </div>

              <div className="bg-white rounded-2xl w-full h-full p-12 gap-6 flex flex-col  group  hover:bg-gradient-to-br hover:from-red-100 via-purple-100 hover:to-yellow-100 border hover:border-yellow-500">

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                      <FontAwesomeIcon icon={faCode} className='' />
                    </div>
                      <h3 className='text-2xl font-semibold'>Native APIs</h3>
                  </div>

                  <p className='text-lg font-light'>What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>

                  <div className="flex mt-6">
                    <div className="flex gap-4 ">
                      <div className="-mr-6 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                        <img src={img9} alt="" className='min-w-16 min-h-16' />
                      </div>
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                        <img src={img7} alt="" className='' />
                      </div>
                    </div>

                    <div className="flex flex-col px-3">
                      <h3 className='text-[16px]'>Rick Pastoor</h3>
                      <a href="" className='text-gray-500 hover:underline'>Rise</a>
                    </div>
                  </div>


                    
                  

              </div>
              

            </div>

            <div className="rounded-xl bg-black flex flex-col lg:flex-row mt-12 pt-4 lg:pt-8">
                {/* Left Part */}
                <div className="flex flex-col gap-4 p-8 lg:flex-1 lg:gap-8 justify-center">
                  <span className='text-gray-400 font-display font-semibold'>READY TO START BUILDING?</span>
                  <h3 className='text-4xl text-white leading-tight lg:text-5xl'>Create your desktop app for free*</h3>
                  <p className='text-gray-400 font-light text-lg lg:text-xl'>ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>

                  <button className='px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90'>
                    <FontAwesomeIcon icon={faDownload} className='text-white w-5 h-5 px-2'/>
                    <span>Download ToDesktop Builder</span>
                  </button>

                  <p className='text-xs italic leading-tight text-gray-400'>*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>

                </div>

                {/* Right Part */}
                <div className='pt-12 lg:w-1/2'>
                  <img className='pl-12' src={img8} alt="Clickup" />
                </div>
            </div>


          </div>
          {/* Customer Stories - ends here */}

          {/* Pricing - starts here */}
          <div className='px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-20'>
            <h2 className="text-5xl sm:font-semibold mb-14 leading-normal max-w-2xl">Choose a plan that fits your needs</h2>

            <div className="flex flex-col lg:flex-row mt-6 gap-10">

              <div className="border rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6">
                  <h3 className="text-4xl">Free</h3>
                  <p className='text-lg font-light'>For personal use or testing your app before deploying to customers.</p>
                  <p className='text-2xl font-bold'>$0<span className='text-lg font-light '>/month</span></p>
                  <p className='font-semibold'>KEY FEATURES</p>

                  <div className="flex flex-col gap-3">
                    <div className='flex gap-2 items-center text-gray-700'> 
                      <FontAwesomeIcon icon={faCheck}/>
                      <p>Free for personal use</p>
                    </div>
                    <div className='flex gap-2 items-center text-gray-700'> 
                      <FontAwesomeIcon icon={faCheck}/>
                      <p>Free for personal use</p>
                    </div>
                    <div className='flex gap-2 items-center text-red-700'> 
                      <FontAwesomeIcon icon={faX}/>
                      <p>Free for personal use</p>
                    </div>
                    <div className='flex gap-2 items-center text-red-700'> 
                      <FontAwesomeIcon icon={faX}/>
                      <p>Free for personal use</p>
                    </div>
                  </div>

                  <button className='px-8 mt-3 py-3 font-semibold rounded-lg bg-white border border-gray-400 shadow-sm  hover:border-gray-800'>Purchase Plan</button>
                 



              </div>

              <div className="border rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6">
                  <h3 className="text-4xl">Essential</h3>
                  <p className='text-lg font-light'>For simple desktop apps.or testing your app before deploying to customers.</p>
                  <p className='text-2xl font-bold'>$99<span className='text-lg font-light '>/month</span></p>
                  <p className='font-semibold'>KEY FEATURES</p>

                  <div className="flex flex-col gap-3">
                    <div className='flex gap-2 items-center text-gray-700'> 
                      <FontAwesomeIcon icon={faCheck}/>
                      <p>Free for personal use</p>
                    </div>
                    <div className='flex gap-2 items-center text-gray-700'> 
                      <FontAwesomeIcon icon={faCheck}/>
                      <p>Free for personal use</p>
                    </div>
                    <div className='flex gap-2 items-center text-gray-700'> 
                      <FontAwesomeIcon icon={faCheck}/>
                      <p>Free for personal use</p>
                    </div>
                    <div className='flex gap-2 items-center text-red-700'> 
                      <FontAwesomeIcon icon={faX}/>
                      <p>Free for personal use</p>
                    </div>
                  </div>

                  <button className='px-8 mt-3 py-3 font-semibold rounded-lg bg-white border border-gray-400 shadow-sm  hover:border-gray-800'>Purchase Plan</button>
                 
              </div>


              <div className="relative border rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6">
                <div className='absolute top-0 right-8 -translate-y-1/2'>
                  <button className='text-[14px] px-4 py-2 font-semibold rounded-full text-primary text-center bg-blue-200 w-fit '>Most Popular</button>
                </div>

                  <h3 className="text-4xl">Professional</h3>
                  <p className='text-lg font-light'>For sophisticated desktop apps and Testing your app before deploying to customers.</p>
                  <p className='text-2xl font-bold'>$199<span className='text-lg font-light '>/month</span></p>
                  <p className='font-semibold'>KEY FEATURES</p>

                  <div className="flex flex-col gap-3">
                    <div className='flex gap-2 items-center text-gray-700'> 
                      <FontAwesomeIcon icon={faCheck}/>
                      <p>Free for personal use</p>
                    </div>
                    <div className='flex gap-2 items-center text-gray-700'> 
                      <FontAwesomeIcon icon={faCheck}/>
                      <p>Free for personal use</p>
                    </div>
                    <div className='flex gap-2 items-center text-gray-700'> 
                      <FontAwesomeIcon icon={faCheck}/>
                      <p>Free for personal use</p>
                    </div>
                    <div className='flex gap-2 items-center text-gray-700'> 
                      <FontAwesomeIcon icon={faCheck}/>
                      <p>Free for personal use</p>
                    </div>
                  </div>

                  <button className='px-8 mt-3 py-3 font-semibold rounded-lg text-white bg-primary hover:bg-opacity-80 border shadow-sm  '>Purchase Plan</button>
                
              </div>

            </div>

          </div>
          {/* Pricing - ends here */}

          {/* FAQ - Section starts here */}
      
          <div>
            {/* Other components and sections */}

            {/* FAQ - Section starts here */}
            <div className="px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-20">
              <h2 className="text-5xl sm:font-semibold mb-14 leading-normal max-w-2xl">FAQs</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                    <dt
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFaq(index)}
                    >
                      <p className="font-semibold text-lg">{faq.question}</p>
                      <FontAwesomeIcon icon={faChevronUp} className={`${openIndex === index ? '' : '-rotate-180'} transition-transform`} />
                    </dt>
                    <dd className={`mt-2 ${openIndex === index ? 'block' : 'hidden'}`}>
                      <p className="font-light text-lg mt-6">
                        {faq.answer}
                      </p>
                    </dd>
                  </div>
                ))}
              </div>
            </div>
            {/* FAQ - Section ends here */}

            {/* Other components and sections */}
          </div>

          {/* FAQ - Section ends here */}

        </main>

        <footer className='px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-20'>
          {/* Footer Section - starts here*/}
          <div className="rounded-lg border lg:border-none  bg-gray=50 flex flex-col lg:flex-row-reverse items-center px-8 py-12 gap-8">
              <a className='font-light font-display' href="">Documentation</a>
              <div className="flex gap-8 text-xl">
                <a href=""><FontAwesomeIcon icon={faTwitter} className='text-gray-600 hover:text-gray-900'/></a>

                <a href=""><FontAwesomeIcon icon={faGithub} className='text-gray-600 hover:text-gray-900'/></a>
              </div>

              <a href="/" id='brand' className='flex gap-2 items-center flex-1'>
               <img src={ Logo } alt="Logo" className='object-cover max-w-12 max-h-12'/>
              <span className='text-lg font-medium font-display'>ToDesktop</span>
          </a>
          </div>

          <div className="flex flex-col gap-4 items-center justify-content-center my-12">
            <div className="flex gap-2 items-center ">
                <img src={img10} alt="" className='w-4 h-4' />
                <p className='text-sm text-gray-600 '>A.Y. Cimbinator Company.</p>
            </div>
            <p className='text-sm text-gray-400'>© 2024 ToDesktop, Inc. All rights reserved.</p>
          </div>

          

          {/* Footer Section - ends here */}
        </footer>
    </>
  )
}

export default Index