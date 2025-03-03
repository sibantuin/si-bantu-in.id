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
      description: "membantu pembuatan video motion graphic untuk berbagai keperluan, seperti promosi di media sosial.",
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
      <main className="container mx-auto px-8">
        {/* Hero Section */}
        <section id="hero" className="hero flex items-center justify-between py-5 px-10">
          <div className="max-w-lg pl-20">
            <h1 className="text-[40px] font-bold text-gray-900 leading-tight text-left">
              A dedicated team to <br/>grow your company
            </h1>
            <p className="text-[#959595] mt-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit pharellus mollis sit aliquam sit nullam neque ultrices.
            </p>
            <button className="mt-6 primary-color text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-900 flex items-center">
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
                    strokeLinejoin="round"
                    strokeWidth="1.5"
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
          <p className="text-[#959595] mt-4 max-w-2xl mx-auto">
            Kenalin, tim kita yang selalu siap bantu lo! 🚀✨ Yuk, kenalan lebih dekat<br/> sama mereka. Siapa tau lo bisa ketemu temen baru di sini. 😎
          </p>
          <div className="flex justify-center gap-8 gap-x-[200px] mt-[55px]">
            {teamData.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto">
                  <Image
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover rounded-full"
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="text-[#1E3A8A] font-bold mt-4">{member.name}</h3>
                <p className="text-[#9795B5] text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="service" className="services justify-start py-[36px]">
          <h2 className="text-gray-900 text-center text-3xl font-bold">Service</h2>
          <p className="text-[#959595] text-center mt-4 max-w-2xl mx-auto">
            Yuk, eksplor layanan kita! Semua ada di sini. <br/> 
            Jangan ragu buat chat kita kalo lo butuh SIBANTUIN 😎✨
          </p>
          <div className="relative mt-12">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${serviceIndex  * 100}%)` }}>
                {[0, 1].map((i) => (
                  <div key={i} className="grid grid-cols-3 gap-6 flex-shrink-0 w-full pr-4">
                    {services.slice(i * 6, i * 6 + 6).map((service, index) => (
                      <div key={index} className="p-6 border rounded-lg shadow-sm relative">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mb-4">
                          <Image
                            src={service.img}
                            alt={service.title}
                            className="h-full w-full object-cover rounded-2xl"
                            width={100}
                            height={100}
                          />
                        </div>
                        <h3 className="text-[#1E1E1E] text-lg font-bold">{service.title}</h3>
                        <p className="text-[#1E1E1E] text-sm mt-2 text-left">{service.description}</p>
                        <a href="#" className="text-[#8D8BA7] font-semibold mt-4 inline-flex items-center hover:text-[#5D5A88]">
                          Learn more
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
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={serviceSlider} 
              className="absolute right-0 top-[40%] -translate-y-1/2 bg-[#1E3A8A] mt-[50px] text-white p-3 rounded-full shadow-lg hover:bg-[#0D2A6B] transform transition-all duration-300"
              style={{ right: '-40px' }}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </section>

        {/* Results in Numbers Section */}
        <section className="results text-center py-16 mt-[50px]">
          <h2 className="text-3xl font-bold text-[#1E3A8A]">Our results in numbers</h2>
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold">
                <span className="text-[#1E3A8A]">4</span>
              </h3>
              <p className="font-bold mt-[20px] mb-[10px] text-[#686868]">Jumlah Pengguna</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[#1E3A8A]">10+</h3>
              <p className="font-bold mt-[20px] mb-[10px] text-[#686868]">Team Pengajar</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold">
                <span className="text-[#1E3A8A]">4.8/5</span>
              </h3>
              <p className="font-bold mt-[20px] mb-[10px] text-[#686868]">Rating Pengguna</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq text-center pt-16 mb-[200px]">
          <h2 className="text-3xl font-bold text-[#1E3A8A]">Frequently Asked Questions</h2>
          <p className="text-[#959595] mt-4 mb-12 max-w-2xl mx-auto">
            Masih bingung? Santai, kita udah siapin FAQ buat lo! Scroll aja ke bawah, siapa tau <br/> pertanyaan lo udah ada jawabannya. Kalo belum, chat kita aja!
          </p>
          <div className="mt-8 max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border ${
                  openFAQ === index ? 'border-[1px] border-[#5D5A88]' : 'border-[#D4D2E3]'
                } rounded-lg mb-4 overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-[#1E3A8A] text-left pt-4 px-8 mb-4 font-bold flex justify-between items-center transition-colors duration-500"
                >
                  {faq.question}
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
                        className="w-6 h-6 ml-2 text-[#8D8BA7] transform"
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
                <div className={`px-8 text-[#959595] text-justify overflow-hidden transition-all duration-500 ${
                  openFAQ === index ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}>
                  {faq.answer}
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