"use client";

import React from 'react'
import Image from "next/image";
import { teamData } from "../data/constants";

function SectionTeam() {
    return (
        <>
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
        </>
    )
}

export default SectionTeam