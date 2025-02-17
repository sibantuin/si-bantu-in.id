"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const services = [
    { title: "IT", description: "Menyediakan layanan berupa solving bug, UI/UX, website, mobile app serta berbagai bahasa pemrograman" },
    { title: "Penulisan", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Skripsi & KTI", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Design Grafis", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Photo & Video Editing", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Video Tutorial", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "CV", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Voice Over/Transkrip", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Skripsi & KTI", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Mind Mapping", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Photo & Video", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Animasi", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." }
  ];

  const faqs = [
    { question: "What is Webflow and why is it the best website builder?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes." },
    { question: "When did Webflow was founded?", answer: "Webflow was founded in 2013 with the mission to empower designers to build professional websites without writing code." },
    { question: "How do you clone a Webflow Template?", answer: "Cloning a Webflow template is as simple as clicking the clone button available on the template page." },
    { question: "Why is BRIX Templates the best Webflow agency?", answer: "BRIX Templates provides high-quality, professional Webflow templates with excellent design and functionality." },
  ];

  const serviceSlider = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
  };
  
  const testiSlider = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };


  return (
    <>
      <Navbar />
      <main className="container mx-auto px-8">
        {/* Hero Section */}
        <section className="hero flex items-center justify-between py-5 px-10">
          <div className="max-w-lg pl-20">
            <h1 className="text-[40px] font-bold text-gray-900 leading-tight text-left">
              A dedicated team to <br/>grow your company
            </h1>
            <p className="text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit pharellus mollis sit aliquam sit nullam neque ultrices.
            </p>
            <button className="mt-6 primary-color text-white font-bold px-6 py-3 rounded-full hover:bg-blue-900 flex items-center">
              GRATIS Konsultasi
              <svg
                className="w-5 h-5 ml-2 mt-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
              </svg>
            </button>
          </div>
          <div className="w-110 h-96 rounded-xl flex items-center justify-center pr-20">
            <Image
              src="/assets_heroes.png"
              alt={""}
              className="object-contain h-full w-full"
              width={1000}
              height={1000}
            />
          </div>
        </section>

        {/* Team Section */}
        <section className="team text-center py-16">
          <h2 className="text-3xl font-bold text-gray-900">Meet our team members</h2>
          <p className="text-[#9795B5] mt-4 max-w-2xl mx-auto">
            Part of SIBANTUIN, dedicated to serving you wholeheartedly. Each Team <br />Member Brings Their Own Uniqueness – Together, We Create Magic.
          </p>
          <div className="flex justify-center gap-8 gap-x-[120px] mt-[55px]">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                <Image
                  src="/assets_han.png"
                  alt={""}
                  className="h-full w-full object-cover rounded-full"
                  width={100}
                  height={100}
                />
                </div>
                <h3 className="text-[#1E3A8A] font-bold mt-4">{index === 0 ? "John Doe" : index === 1 ? "Jane Doe" : index === 2 ? "Han" : index === 3 ? "Wan" : "Emily Davis"}</h3>
                <p className="text-[#9795B5] text-sm">{index === 0 ? "CEO & Co-Founder" : index === 1 ? "CTO & Co-Founder" : index === 2 ? "Lead Project" : index === 3 ? "VP of Technology" : "VP of Design"}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Layanan Bimbingan Section */}
        <section className="services text-center py-[36px]">
          <h2 className="text-[#1E1E1E] text-3xl font-bold">Layanan Bimbingan</h2>
          <p className="text-[#9795B5] mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
          </p>
          <div className="relative mt-12 overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {[0, 1].map((i) => (
                <div key={i} className="grid grid-cols-3 gap-6 flex-shrink-0 w-full">
                  {services.slice(i * 6, i * 6 + 6).map((service, index) => (
                    <div key={index} className="p-6 border rounded-lg shadow-sm ">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4">
                      <Image
                        src="/assets_img_placeholder.png"
                        alt={""}
                        className="h-full w-full object-cover rounded-2xl"
                        width={100}
                        height={100}
                      />
                      </div>
                      <h3 className="text-[#5D5A88] text-lg font-bold flex">{service.title}</h3>
                      <p className="text-[#9795B5] text-sm mt-2 flex text-left">{service.description}</p>
                      <a href="#" className="text-[#8D8BA7] font-semibold mt-4 inline-block flex items-center">
                        Learn more
                        <svg
                          className="w-5 h-5 ml-2 mt-3.5 text-[#8D8BA7]"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <button onClick={serviceSlider} className="absolute right-0 top-1/2 transform -translate-y-1/2 primary-color text-white p-3 rounded-full shadow-lg">
            <svg
              className="w-5 h-5 ml-4 mt-3 mb-2 text-[#8D8BA7]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
            </button>
          </div>
        </section>

        {/* Results in Numbers Section */}
        <section className="results text-center py-16">
          <h2 className="text-3xl font-bold text-[#5D5A88]">Our results in numbers</h2>
          <div className="grid grid-cols-3 gap-8 mt-8">
            {/* Point 1 */}
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#5D5A88]">
                <span className="text-[#5D5A88]">99</span>
                <span className="text-[#BCBACD]">%</span>
              </h3>
              <p className="font-semibold mt-[20px] mb-[10px] text-[#5D5A88]">Kepuasa Pengguna</p>
              <p className="text-[#9795B5]">Lorem ipsum dolor sit amet consectetur <br/> adipiscing elit eget quamumto.</p>
              <a href="#" className="text-[#ADABC3] font-semibold mt-4 inline-block flex justify-center">
                Learn more
                <svg
                  className="w-5 h-5 ml-2 mt-[9px] text-[#ADABC3]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
              </a>
            </div>
            {/* Point 2 */}
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#5D5A88]">10+</h3>
              <p className="font-semibold mt-[20px] mb-[10px] text-[#5D5A88]">Team Pengajar</p>
              <p className="text-[#9795B5]">Lorem ipsum dolor sit amet consectetur <br/> adipiscing elit eget quamumto.</p>
              <a href="#" className="text-[#ADABC3] font-semibold mt-4 inline-block flex justify-center">
                Learn more
                <svg
                  className="w-5 h-5 ml-2 mt-[9px] text-[#ADABC3]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            {/* Point 3 */}
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#5D5A88]">
                <span className="text-[#5D5A88]">240</span>
                <span className="text-[#BCBACD]">%</span>
              </h3>
              <p className="font-semibold mt-[20px] mb-[10px] text-[#5D5A88]">Rating Pengguna</p>
              <p className="text-[#9795B5]">Lorem ipsum dolor sit amet consectetur <br/> adipiscing elit eget quamumto.</p>
              <a href="#" className="text-[#ADABC3] font-semibold mt-4 inline-block flex justify-center">
                Learn more
                <svg
                  className="w-5 h-5 ml-2 mt-[9px] text-[#ADABC3]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials text-left py-16">
          <h2 className="text-3xl font-bold pl-[96px] text-[#5D5A88]">What our clients say</h2>
          <p className="text-[#5D5A88] mt-4 max-w-2xl pl-[96px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit <br/> semper dalar elementum tempus hac tellus libero accumsan.
          </p>
          <div className="flex gap-8 overflow-hidden mt-12 pl-[96px] relative">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="p-8 border rounded-2xl shadow-sm w-1/4 flex-shrink-1">
                <div className="flex justify-left mb-2">
                  <Image
                    src="/assets_5stars.png"
                    alt={""}
                    className="h-[23px] w-[155px] object-cover rounded-full"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className="text-[#9795B5] italic">
                  "Lorem ipsum dolor sit amet consectetur adipiscing lectus a nunc mauris scelerisque."
                </p>
                <h3 className="text-[#5D5A88] font-bold mt-4">John Carter</h3>
                <p className="text-[#8D8BA7] text-sm">Web Designer</p>
              </div>
            ))}
            <button onClick={testiSlider} className="absolute right-0 top-1/2 transform -translate-y-1/2 primary-color text-white p-3 rounded-full shadow-lg">
            <svg
              className="w-5 h-5 ml-4 mt-3 mb-2 text-[#8D8BA7]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq text-center pt-16 mb-[200px]">
          <h2 className="text-3xl font-bold text-[#5D5A88]">Frequently Asked Questions</h2>
          <p className="text-[#9795B5] mt-4 mb-12 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.
          </p>
          <div className="mt-8 max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
              key={index} 
              className={`border ${
                openFAQ === index ? 'border-[1px] border-[#5D5A88]' : 'border-[#E5E5EF]'
              } rounded-lg mb-4 overflow-hidden transition-all duration-300`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-[#5D5A88] text-left pt-8 px-8 mb-7 font-bold flex justify-between items-center"
              >
                {faq.question}
                <span>
                  {openFAQ === index ? (
                    <svg
                      className="w-6 h-6 ml-2 text-[#5D5A88] transform rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 ml-2 text-[#8D8BA7]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {openFAQ === index && (
                <div className="px-8 text-[#9795B5] text-justify mb-6 pb-4]">
                  {faq.answer}
                </div>
              )}
            </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}