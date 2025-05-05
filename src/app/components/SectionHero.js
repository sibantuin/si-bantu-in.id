"use client";

import React from 'react'
import Image from "next/image";

function SectionHero() {
    return (
        <>
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
        </>
    )
}

export default SectionHero
