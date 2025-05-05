"use client";

import React from 'react'
import { useState } from "react";
import { faqs } from "../data/constants";

function SectionFAQ() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };
    return (
        <>
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
        </>
    )
}

export default SectionFAQ