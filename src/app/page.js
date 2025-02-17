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
    { question: "How do you clone a Webflow Template?", answer: "Cloning a Webflow template is as simple as clicking the clone button available on the template page." },
    { question: "What is Webflow and why is it the best website builder?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes." },
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
            <button className="mt-6 primary-color text-white px-6 py-3 rounded-full hover:bg-blue-900 flex items-center">
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
                    stroke-linecap="round"
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
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Part of SIBANTUIN, dedicated to serving you wholeheartedly. Each Team <br />Member Brings Their Own Uniqueness – Together, We Create Magic.
          </p>
          <p>
            
          </p>
          <div className="flex justify-center gap-8 mt-12">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                  📷
                </div>
                <h3 className="text-blue-800 font-bold mt-4">Lorem ipsum</h3>
                <p className="text-gray-600 text-sm">{index === 0 ? "CEO & Co-Founder" : index === 1 ? "CTO & Co-Founder" : index === 2 ? "Lead Project" : index === 3 ? "VP of Technology" : "VP of Design"}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Layanan Bimbingan Section */}
        <section className="services text-center py-16">
          <h2 className="text-3xl font-bold text-gray-900">Layanan Bimbingan</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
          </p>
          <div className="relative mt-12 overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {[0, 1].map((i) => (
                <div key={i} className="grid grid-cols-3 gap-6 flex-shrink-0 w-full">
                  {services.slice(i * 6, i * 6 + 6).map((service, index) => (
                    <div key={index} className="p-6 border rounded-lg shadow-sm">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        📷
                      </div>
                      <h3 className="text-lg font-bold text-blue-800">{service.title}</h3>
                      <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                      <a href="#" className="text-blue-800 font-semibold mt-4 inline-block">Learn more →</a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <button onClick={serviceSlider} className="absolute right-0 top-1/2 transform -translate-y-1/2 primary-color text-white p-3 rounded-full shadow-lg">
              →
            </button>
          </div>
        </section>

        {/* Results in Numbers Section */}
        <section className="results text-center py-16">
          <h2 className="text-3xl font-bold text-gray-900">Our results in numbers</h2>
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800">99%</h3>
              <p className="font-semibold text-gray-700">Kepuasa Pengguna</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit eget quamumto.</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800">10+</h3>
              <p className="font-semibold text-gray-700">Team Pengajar</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit eget quamumto.</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800">240%</h3>
              <p className="font-semibold text-gray-700">Rating Pengguna</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit eget quamumto.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials text-center py-16">
          <h2 className="text-3xl font-bold text-gray-900">What our clients say</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
          </p>
          <div className="flex gap-8 overflow-hidden mt-12 relative">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-sm w-1/4 flex-shrink-0">
                <div className="flex justify-center mb-2">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-600 italic">
                  "Lorem ipsum dolor sit amet consectetur adipiscing lectus a nunc mauris scelerisque."
                </p>
                <h3 className="text-blue-800 font-bold mt-4">John Carter</h3>
                <p className="text-gray-600 text-sm">Web Designer</p>
              </div>
            ))}
            <button onClick={testiSlider} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-3 rounded-full shadow-lg">
              →
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq text-center py-16">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.
          </p>
          <div className="mt-8 max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg mb-4 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 bg-gray-100 font-semibold flex justify-between items-center"
                >
                  {faq.question}
                  <span>{openFAQ === index ? "▼" : "►"}</span>
                </button>
                {openFAQ === index && (
                  <div className="p-4 text-gray-700 bg-white">{faq.answer}</div>
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