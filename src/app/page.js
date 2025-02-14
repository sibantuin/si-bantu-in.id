"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const services = [
    { title: "Mobile app", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Desktop app", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Multiple users", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Integrations", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Monthly reports", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Granular permissions", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Cloud storage", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Security compliance", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "API support", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Real-time updates", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "Custom workflows", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." },
    { title: "AI integration", description: "Lorem ipsum dolor sit amet consecte tur adipiscing..." }
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
        <section className="hero flex items-center justify-between py-16">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              A dedicated team to grow your company
            </h1>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit pharellus mollis sit aliquam sit nullam neque ultrices.
            </p>
            <button className="mt-6 bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-900 flex items-center">
              Get started →
            </button>
          </div>
          <div className="w-96 h-96 bg-blue-300 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">📷</span>
          </div>
        </section>

        {/* Team Section */}
        <section className="team text-center py-16">
          <h2 className="text-3xl font-bold text-gray-900">Meet our team members</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida malesuada quam commodo id integer nam.
          </p>
          <div className="flex justify-center gap-8 mt-12">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                  📷
                </div>
                <h3 className="text-blue-800 font-bold mt-4">Lorem ipsum</h3>
                <p className="text-gray-600 text-sm">{index === 0 ? "CEO & Co-Founder" : index === 1 ? "CTO & Co-Founder" : index === 2 ? "VP of Marketing" : index === 3 ? "VP of Marketing" : "VP of Design"}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="services text-center py-16">
          <h2 className="text-3xl font-bold text-gray-900">Service</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
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
            <button onClick={serviceSlider} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-3 rounded-full shadow-lg">
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
              <p className="font-semibold text-gray-700">Customer satisfaction</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit eget quamumto.</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800">32M</h3>
              <p className="font-semibold text-gray-700">Active users</p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit eget quamumto.</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800">240%</h3>
              <p className="font-semibold text-gray-700">Company growth</p>
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
