"use client";

import React from 'react'
import { useState } from "react";
import Image from "next/image";
import { services } from "../data/constants";

function SectionService() {
    const [serviceIndex, setServiceIndex] = useState(0);

    const serviceSlider = () => {
        setServiceIndex((prevIndex) => (prevIndex + 1) % 2);
    };
    return (
        <>
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
        </>
    )
}

export default SectionService