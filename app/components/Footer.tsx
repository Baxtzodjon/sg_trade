"use client"

import Image from "next/image";
import { navLinksFirst, navLinksSecond, socialLinks } from "../data/footerLinks";
import FooterLink from "./FooterLink";

const Footer = () => {
    return (
        <footer className="w-full h-full bg-[#111010]">

            <div className="container relative mx-auto px-4 lg:px-10 py-6 flex justify-between flex-col gap-[42px] md:gap-[68px]">

                <div className="flex gap-[70px] flex-col md:flex-row md:items-center md:justify-between">

                    <div className="flex flex-col-reverse md:flex-col gap-[70px]">

                        <div className="flex flex-col items-center md:items-start gap-10">

                            <div className="flex flex-col text-center md:text-left">

                                <a href="mailto:info@sgtrade.com?subject=Platform question&body=Hello, I have a question..." className="text-white text-md font-light">info@sgtrade.lt</a>

                                <a href="tel:+37061315157" className="text-white text-[21px] font-bold">+370 613 15 157</a>

                            </div>

                            <Image src={"/images/mask_group.png"} alt="mask group" width={431} height={506} className="hidden lg:block lg:absolute lg:top-0 lg:left-[319px] pointer-events-none" />

                            <div className="flex flex-col items-center gap-5 md:items-start">

                                <div className="flex items-center gap-2.5">

                                    <h4 className="w-auto md:w-[90px] text-[#C8C8C8] text-xs font-normal">Registry code:</h4>

                                    <span className="text-white text-base font-normal">305937503</span>

                                </div>

                                <div className="flex items-center gap-2.5">

                                    <h4 className="w-auto md:w-[90px] text-[#C8C8C8] text-xs font-normal">VAT nr:</h4>

                                    <span className="text-white text-base font-normal">LT100015566211</span>

                                </div>

                                <div className="flex items-start gap-2.5 text-center md:text-left">

                                    <h4 className="w-auto md:w-[90px] text-[#C8C8C8] text-xs font-normal">Address:</h4>

                                    <address className="text-white text-base font-normal not-italic">J.J Krasevskio st. 7-1, Vilnius, <br /> LT- 08118, Lithuania</address>

                                </div>

                            </div>

                        </div>

                        <div className="flex flex-col items-center justify-center gap-10 md:hidden">

                            <Image src={"/images/barcode.png"} alt="logo get the quote" width={156} height={60} className="w-[273px] h-[106px] md:w-[156px] md:h-[60px] object-contain" />

                            <div className="hidden sm:flex items-center gap-4">

                                {socialLinks.map(({ href, icon, label }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                    >
                                        <Image src={icon} alt={`${label} icon`} width={19} height={19} />
                                    </a>
                                ))}

                            </div>

                        </div>

                    </div>

                    <div className="hidden lg:flex flex-col items-center justify-center gap-10">

                        <Image src={"/images/barcode.png"} alt="logo get the quote" width={156} height={60} className="w-[273px] h-[106px] sm:w-[156px] sm:h-[60px] object-contain" />

                        <div className="hidden sm:flex items-center gap-4">

                            {socialLinks.map(({ href, icon, label }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                >
                                    <Image src={icon} alt={`${label} icon`} width={19} height={19} />
                                </a>
                            ))}

                        </div>

                    </div>

                    <div className="flex justify-center flex-wrap sm:flex-nowrap gap-5">

                        <div className="flex flex-col gap-2.5 md:gap-5">

                            {navLinksFirst.map(link => (
                                <FooterLink key={link.href} {...link} />
                            ))}

                        </div>

                        <div className="flex flex-col gap-2.5 md:gap-[15px]">

                            {navLinksSecond.map(link => (
                                <FooterLink key={link.href} {...link} />
                            ))}

                        </div>

                    </div>

                </div>

                <span className="text-[#D9D9D94D] text-xs font-normal text-center lg:pl-5">Created by Baxtzod</span>

            </div>

        </footer>
    );
};

export default Footer;