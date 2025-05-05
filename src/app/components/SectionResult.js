"use client";

import React from 'react'

function SectionResult() {
    return (
        <>
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
        </>
    )
}

export default SectionResult