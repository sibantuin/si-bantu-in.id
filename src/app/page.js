"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [testiIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  const teamData = [
    { img: "/profile_ken.png", name: "Ken", role: "Worker" },
    { img: "/profile_vio.png", name: "Vio", role: "Worker" },
    { img: "/profile_han.png", name: "Han", role: "Worker" },
    { img: "/profile_wan.png", name: "Wan", role: "Worker" },
    { img: "/profile_sze.png", name: "Sze", role: "Worker" },
  ];

  const services = [
    {
      title: "IT",
      description: "Website, UI/UX, Mobile app, Solving Bug dan berbagai project bahasa pemrograman lainnya.",
      img: "/ic_IT.svg"
    },
    {
      title: "Penulisan",
      description: "Dapat merapikan All Formating, Nomor halaman, Daftar Pustaka, Tabel, Gambar, Layout, Margin dll",
      img: "/ic_P.png"
    },
    {
      title: "Skripsi & Laporan dkk",
      description: "Layanan bimbingan Skripsi, PPT, Mind Mapping, Laporan Magang, Resume KTI, Essay, Jurnal serta penerbitan.",
      img: "/ic_S.svg"
    },
    {
      title: "Desain Grafis",
      description: "Poster, Infografis, Feeds, Banner, Twibbon, Logo, Mockup, Background, Spanduk, Brosur, Menu, Id Card dll.",
      img: "/ic_DG.svg"
    },
    {
      title: "Foto & Video",
      description: "Jasa edit Photo & Video serta pembuatan seperti video tutorial, Reels, Youtube dll.",
      img: "/ic_PV.svg"
    },
    {
      title: "CV ATS Friendly",
      description: "Pembuatan CV sesuai kebutuhan seperti lamar kerja, magang ataupun beasiswa.",
      img: "/ic_CV.svg"
    },
    {
      title: "Voice Over/Transkrip",
      description: "Pembuatan Voice Over dan Script untuk kebutuhan dubbing, animasi, komersial dll.",
      img: "/ic_VO.svg"
    },
    {
      title: "Motion Graphic",
      description: "Membantu pembuatan video motion graphic untuk berbagai keperluan, seperti promosi di media sosial.",
      img: "/ic_MG.svg"
    },
    {
      title: "Animation",
      description: "Menyediakan jasa pembuatan video animasi 2D dan 3D untuk keperluan promosi, iklan, video pembelajaran dll.",
      img: "/ic_A.svg"
    },
    {
      title: "Request Service",
      description: "Tim kita yang selalu siap bantu lo!😎 Kapan aja dan lo butuh apapun, tinggal chat kita. 🚀✨ ",
      img: "/ic_RS.svg"
    },
  ];

  const testimonials = [
    {
      name: "Ria",
      role: "Sastra Inggris",
      quote: "sangat ramah (bintang 10), responsif (sampe tengah malem diladenin ges) dan pengerjaannya rill cepet dan bagus banget, kata gwej wajib kesini 😋🫶✨",
    },
    {
      name: "Kisya",
      role: "Kriminologi",
      quote: "CEPET BANGET PENGERJAANNYAAAAAA CUMA SEJAM, kakaknya baik dan asik seru gituu. Harga dengan hasil sebanding bgtt dan bisa revisi jugaa!!! LUV BANGEETTTT MAKASIH BANYAK KAKAKKKKK!!🫶🏻🫶🏻",
    },
    {
      name: "Agung.es",
      role: "Anak Tongkrongan",
      quote: "Casik banget dah loe min, kek temen tongkrongan gue",
    },
    {
      name: "Syah",
      role: "Informatika",
      quote: "sesuai request, responsif parahhh",
    },
    {
      name: "Ola",
      role: "Manajemen",
      quote: "sesuai requestttt, murah, satsett, fastresponnnn",
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 lg:leading-tight sm:leading-tight mb-6">
              Apapun situasinya, <br className="hidden lg:block" />SIBANTUIN solusinya!
            </h1>
            <p className="text-[#959595] text-base sm:text-lg mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Kita selalu siap terima permintaan lo, bahkan yang paling <br className="hidden lg:block" />random sekalipun. Yuk, serahkan ke kita
            </p>
            <button onClick={() => window.location.href = "http://wa.me/6285183148307"} className="bg-[#1E3A8A] text-white font-medium px-8 py-3 rounded-full inline-flex items-center mx-auto lg:mx-0 shadow-lg hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] hover:bg-[#0D2A6B] transition-all">
              GRATIS Konsultasi
              <svg className="w-5 h-5 ml-2 mt-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>
          <div className="lg:flex-1 w-full max-w-2xl">
            <Image
              src="/assets_heroes.svg"
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
              Yuk, eksplor layanan kita! Semua ada di sini.<br className="hidden lg:block" /> Jangan ragu buat chat kita kalo lo butuh SIBANTUIN 😎✨
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
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
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
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
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

        {/* Testimonial Section */}
        <section className="testimonials py-16 relative">
          <h2 className="text-3xl font-bold text-center text-[#1E3A8A]">What our clients say</h2>
          <p className="text-[#959595] mt-4 text-center">
            Udah banyak yang puas sama layanan kita. Yuk, liat apa kata <br /> mereka! Siapa tau lo bisa jadi yang berikutnya.
          </p>
          <div className="pl-8 pr-8 mt-12 relative">
            <div className="overflow-hidden">
              <div
                className="flex animate-scroll gap-8 transition-transform duration-500"
                style={{ transform: `translateX(-${testiIndex * 100}%)` }}
              >
                {[0, 1].map((slideIndex) => (
                  <div key={slideIndex} className="flex gap-8 flex-shrink-0 w-full relative">
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="p-8 border rounded-2xl shadow-sm w-[calc(25%-24px)] relative">
                        <div className="flex justify-left mb-4">
                          <Image
                            src="/assets_5stars.svg"
                            alt="5 stars rating"
                            className="h-[23px] w-[155px] object-cover"
                            width={155}
                            height={23}
                          />
                        </div>
                        <p className="text-[#959595] italic">
                          "{testimonials[(slideIndex * 4 + index) % testimonials.length].quote}"
                        </p>
                        <h3 className="text-[#1E3A8A] font-bold mt-4">
                          {testimonials[(slideIndex * 4 + index) % testimonials.length].name}
                        </h3>
                        <p className="text-[#959595] text-sm">
                          {testimonials[(slideIndex * 4 + index) % testimonials.length].role}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-y-0 right-8 w-16 bg-gradient-to-l from-[#ffffff] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 left-8 w-24 bg-gradient-to-r from-[#ffffff] to-transparent pointer-events-none z-10" />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq text-center pt-16 lg:mb-[200px] px-4 lg:px-0">
          <h2 className="text-3xl font-bold text-[#1E3A8A]">Frequently Asked Questions</h2>
          <p className="text-[#959595] mt-4 mb-12 max-w-2xl mx-auto">
            Masih bingung? Santai, kita udah siapin FAQ buat lo! Scroll aja ke bawah, siapa tau <br className="hidden lg:block" />
            pertanyaan lo udah ada jawabannya. Kalo belum, chat kita aja!
          </p>

          <div className="mt-8 max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border ${openFAQ === index ? 'border-[1px] border-[#5D5A88] mb-4' : 'border-[#D4D2E3]'
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
                <div className={`px-4 lg:px-8 text-[#959595] text-justify overflow-hidden transition-all duration-500 ${openFAQ === index ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'
                  }`}>
                  <p className="text-sm lg:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group animate-bounce hover:animate-none">
          <a
            href="http://wa.me/6285183148307"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#1E3A8A] w-12 h-12 sm:w-16 sm:h-16 p-3 rounded-full shadow-lg hover:bg-[#0D2A6B] transition-all duration-300 hover:shadow-xl hover:scale-110"
          >
            <svg
              className="w-8 h-8 sm:w-12 sm:h-12 text-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="white"
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
          </a>
        </div>

        <Footer />
      </main>
    </>
  );
}