"use client";

import React from 'react'
import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "../data/constants";

function SectionTestimonial() {
    const [testiIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);

    useEffect(() => {
        function updateCardsPerView() {
            const width = window.innerWidth;
            if (width >= 1024) setCardsPerView(4);
            else if (width >= 768) setCardsPerView(3);
            else if (width >= 480) setCardsPerView(2);
            else setCardsPerView(1);
        }
        updateCardsPerView();
        window.addEventListener("resize", updateCardsPerView);
        return () => window.removeEventListener("resize", updateCardsPerView);
    }, []);
    return (
        <>
            <section id="testimonials" className="testimonials py-16 relative">
                <h2 className="text-3xl font-bold text-center text-[#1E3A8A]">What our clients say</h2>
                <p className="text-[#959595] mt-4 text-center">
                    Udah banyak yang puas sama layanan kita. Yuk, liat apa kata <br /> mereka! Siapa tau lo bisa jadi yang berikutnya.
                </p>
                <div className="pl-8 pr-8 mt-12 relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex animate-scroll gap-8 transition-transform duration-500"
                        >
                            {[0, 1].map((slideIndex) => (
                                <div key={slideIndex} className="flex gap-8 flex-shrink-0 w-full relative" style={{ transform: `translateX(-${testiIndex * 100}%)` }}>
                                    {[...Array(cardsPerView)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="p-8 border rounded-2xl shadow-sm relative break-words overflow-hidden"
                                            style={{ width: `calc((100% / ${cardsPerView}) - 1.5rem)` }}
                                        >
                                            <div className="flex justify-left mb-4">
                                                <Image
                                                    src="/assets_5stars.svg"
                                                    alt="5 stars rating"
                                                    className="h-[23px] w-[155px] object-cover"
                                                    width={155}
                                                    height={23}
                                                />
                                            </div>
                                            <p className="text-[#959595] break-words overflow-hidden">
                                                "{testimonials[(slideIndex * cardsPerView + index) % testimonials.length].quote}"
                                            </p>
                                            <h3 className="text-[#1E3A8A] font-bold mt-4 truncate">
                                                {testimonials[(slideIndex * cardsPerView + index) % testimonials.length].name}
                                            </h3>
                                            <p className="text-[#959595] text-sm truncate">
                                                {testimonials[(slideIndex * cardsPerView + index) % testimonials.length].role}
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
        </>
    )
}

export default SectionTestimonial