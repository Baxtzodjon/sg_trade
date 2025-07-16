"use client"

import Image from "next/image";

const RequestBox = () => {
    return (
        <div className="flex items-center justify-center gap-5">

            <div className="w-full h-[135px] bg-[linear-gradient(#04C1C1,_#9BE3E3,_#04C1C1)] flex items-center justify-center gap-5">

                <p className="text-[#111010] text-base font-normal">Leave you data and your request and <br /> we will contact you with a solution!</p>

                <button className="bg-[#111010] w-[190px] h-[55px] border-b-1 border-b-white flex items-center justify-center gap-2.5 text-white text-lg font-normal cursor-pointer"><Image src={"/icons/send_white.png"} alt="Send icon" width={15} height={15} />Send Request</button>

            </div>

            <div className="w-full h-[135px] bg-[linear-gradient(#E2F3FD,_#93E1ED,_#02B9F3,_#028ABE,_#005C9D)]">

                <span>Subscribe on our updates!</span>

                <div>

                    <div className="w-7.5 h-7.5 bg-[#028ABE] flex items-center justify-center"><Image src={"/icons/send_white.png"} alt="Send icon" width={15} height={15} /></div>

                    <input type="email" placeholder="Your Email" className="w-[332px] h-[55px] bg-white border-b-1 border-b-[#111010] p-2.5 text-[#111010] text-lg font-normal outline-none placeholder:text-[#B8B8B8]" />

                </div>

            </div>

        </div>
    );
};

export default RequestBox;