"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [testiIndex, setTestiIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const teamData = [
    { img: "/assets_default.png", name: "Unknown", role: "Worker" },
    { img: "/assets_default.png", name: "Unknown", role: "Worker" },
    { img: "/assets_han.png", name: "Han", role: "Lead Project" },
    { img: "/assets_wan.png", name: "Wan", role: "VP of Technology" },
    { img: "/assets_default.png", name: "Unknown", role: "Worker" },
  ];

  const services = [
    { 
      title: "IT", 
      description: "Website, UI/UX, Mobile app, Solving Bug dan berbagai project bahasa pemrograman lainnya.",
      img: "/Assets_IT.png" 
    },
    { 
      title: "Penulisan", 
      description: "Dapat merapikan All Formating, Nomor halaman, Daftar Pustaka, Tabel, Gambar, Layout, Margin dll",
      img: "/Assets_P.png" 
    },
    { 
      title: "Skripsi & Laporan dkk", 
      description: "Layanan bimbingan Skripsi, PPT, Mind Mapping, Laporan Magang, Resume KTI, Essay, Jurnal serta penerbitan.",
      img: "/Assets_S.png" 
    },
    { 
      title: "Desain Grafis", 
      description: "Poster, Infografis, Feeds, Banner, Twibbon, Logo, Mockup, Background, Spanduk, Brosur, Menu, Id Card dll.",
      img: "/Assets_DG.png" 
    },
    { 
      title: "Foto & Video", 
      description: "Jasa edit Photo & Video serta pembuatan seperti video tutorial, Reels, Youtube dll.",
      img: "/Assets_PV.png" 
    },
    { 
      title: "CV ATS Friendly", 
      description: "Pembuatan CV sesuai kebutuhan seperti lamar kerja, magang ataupun beasiswa.",
      img: "/Assets_CV.png" 
    },
    { 
      title: "Voice Over/Transkrip", 
      description: "Pembuatan Voice Over dan Script untuk kebutuhan dubbing, animasi, komersial dll.",
      img: "/Assets_VO.png" 
    },
    { 
      title: "Motion Graphic", 
      description: "Membantu pembuatan video motion graphic untuk berbagai keperluan, seperti promosi di media sosial.",
      img: "/Assets_MG.png" 
    },
    { 
      title: "Animation", 
      description: "Menyediakan jasa pembuatan video animasi 2D dan 3D untuk keperluan promosi, iklan, video pembelajaran dll.",
      img: "/Assets_A.png" 
    },
    { 
      title: "Request Service", 
      description: "Tim kita yang selalu siap bantu lo!😎 Kapan aja dan lo butuh apapun, tinggal chat kita. 🚀✨ ",
      img: "/Assets_RS.png" 
    },
  ];

  const faqs = [
    { question: "Bisa request layanan?", answer: "SIBANTUIN menerima berbagai request bimbingan pengerjaan project namun harap dikonfirmasi terlebih dahulu ke admin agar dapat disesuaikan dengan team yang dibutuhkan." },
    { question: "Apakah project dapat dikerjakan mepet deadline?", answer: "Tersedia layanan KILAT! Kami beroperasi semaksimal mungkin dan didukung oleh team expert untuk membimbing kalian hingga selesai!" },
    { question: "Adakah batasan jumlah revisi pengerjaan?", answer: "Tidak ada batasan jumlah revisi, kami dengan senantiasa membantu sepenuh hati." },
    { question: "Bagaimana dengan privasi?", answer: "Privasi project anda akan kami jaga 100% kerahasiaanya" },
    { question: "Apakah SIBANTUIN melayani bimbingan ketika ujian?", answer: "Maaf, SIBANTUIN tidak dapat memimbingin atau melayani tugas berkategorikan Ujian" },
  ];

  const serviceSlider = () => {
    setServiceIndex((prevIndex) => (prevIndex + 1) % 2);
  };
  
  const testiSlider = () => {
    setTestiIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col lg:flex-row items-center justify-between py-8 lg:py-16 gap-8">
          <div className="lg:flex-1 text-center lg:text-left mb-[36px] lg:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Apapun itu situasinya,<br className="hidden lg:block"/>SIBANTUIN solusinya!
            </h1>
            <p className="text-[#959595] text-base sm:text-lg mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Kita selalu siap terima permintaan lo, bahkan yang paling random sekalipun.<br className="hidden lg:block"/> Yuk, serahkan ke kita
            </p>
            <button onClick={() => window.location.href = "http://wa.me/6285183148307"} className="bg-[#1E3A8A] text-white font-medium px-8 py-3 rounded-full hover:bg-blue-900 inline-flex items-center mx-auto lg:mx-0 shadow-lg hover:bg-[#0D2A6B] transition-colors">
              GRATIS Konsultasi
              <svg className="w-5 h-5 ml-2 mt-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
          </div>
          <div className="lg:flex-1 w-full max-w-2xl">
            <Image
              src="/assets_heroes.png"
              alt="Hero Illustration"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 lg:py-16 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Meet our team members</h2>
          <p className="text-[#959595] mb-8 max-w-2xl mx-auto px-4">
            Kenalin, tim kita yang selalu siap bantu lo! 🚀✨ Yuk, kenalan lebih dekat sama mereka. Siapa tau lo bisa ketemu temen baru di sini. 😎
          </p>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-[96px] px-4">
            {teamData.map((member, index) => (
              <div key={index} className="w-1/2 sm:w-1/3 md:w-auto px-2">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[#1E3A8A] font-bold text-sm lg:text-base">{member.name}</h3>
                <p className="text-[#9795B5] text-xs lg:text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="service" className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-4">Service</h2>
            <p className="text-[#959595] text-center mb-8 max-w-3xl mx-auto px-4">
              Yuk, eksplor layanan kita! Semua ada di sini.<br className="hidden lg:block"/> Jangan ragu buat chat kita kalo lo butuh SIBANTUIN 😎✨
            </p>
            <div className="relative px-[16px]">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${serviceIndex * 100}%)` }}>
                  {[0, 1].map((i) => (
                    <div key={i} className="w-full flex-shrink-0 py-10 pr-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.slice(i * 6, i * 6 + 6).map((service, index) => (
                          <div key={index} className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative z-0 hover:z-10">
                            <div className="w-16 h-16 rounded-xl mb-4 overflow-hidden">
                              <Image
                                src={service.img}
                                alt={service.title}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="text-lg font-bold text-[#1E1E1E] mb-2">{service.title}</h3>
                            <p className="text-sm text-[#1E1E1E] mb-4">{service.description}</p>
                            <a href="#" className="text-[#959595] font-medium inline-flex items-center hover:text-[#1E3A8A]">
                              Learn more
                              <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                              </svg>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={serviceSlider}
                className="absolute top-1/2 -translate-y-1/2 right-0 bg-[#1E3A8A] text-white p-3 rounded-full shadow-lg hover:bg-[#0D2A6B] transition-colors"
              >
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 lg:py-16 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1E3A8A] mb-8">Our results in numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#1E3A8A] mb-2">4</h3>
              <p className="font-semibold text-[#686868]">Jumlah Pengguna</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#1E3A8A] mb-2">10+</h3>
              <p className="font-semibold text-[#686868]">Team Pengajar</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-[#1E3A8A] mb-2">4.8/5</h3>
              <p className="font-semibold text-[#686868]">Rating Pengguna</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq text-center pt-16 lg:mb-[200px] px-4 lg:px-0">
          <h2 className="text-3xl font-bold text-[#1E3A8A]">Frequently Asked Questions</h2>
          <p className="text-[#959595] mt-4 mb-12 max-w-2xl mx-auto">
            Masih bingung? Santai, kita udah siapin FAQ buat lo! Scroll aja ke bawah, siapa tau <br className="hidden lg:block"/> 
            pertanyaan lo udah ada jawabannya. Kalo belum, chat kita aja!
          </p>
          
          <div className="mt-8 max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border ${
                  openFAQ === index ? 'border-[1px] border-[#5D5A88] mb-4' : 'border-[#D4D2E3]'
                } rounded-lg mb-4 overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-[#1E3A8A] text-left pt-4 px-4 lg:px-8 mb-4 font-bold flex justify-between items-center transition-colors duration-500"
                >
                  <span className="text-sm lg:text-base">{faq.question}</span>
                  <span className="transition-transform duration-500">
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
                <div className={`px-4 lg:px-8 text-[#959595] text-justify overflow-hidden transition-all duration-500 ${
                  openFAQ === index ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-sm lg:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}