"use client"

import Image from "next/image";
import { useState } from "react";
import RequestBox from "../components/RequestBox";

const Page = () => {
    return (
        <section className="w-full h-full bg-[linear-gradient(#242627,_#161718)]">

            <div className="container mx-auto px-4 lg:px-10 py-6">

                <h1 className="text-white text-[54px] font-bold">Contacts</h1>

                <div className="flex items-center justify-center gap-5">

                    <div></div>

                    <div></div>

                </div>

                <RequestBox />

            </div>

        </section>
    )
}

export default Page;