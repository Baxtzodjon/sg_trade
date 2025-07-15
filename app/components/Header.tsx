"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>

            {/* <header className="w-full h-[230px] px-4 lg:px-10 py-6 bg-[#111010] flex flex-col gap-[30px]">

                <div className="flex items-center justify-between gap-[35px]">

                    <Link href={"/"}>

                        <Image src={"/icons/logo.png"} alt="Logo get the quote" width={189} height={54} />

                    </Link>

                    <Image
                        src={"/images/barcode.png"}
                        alt="Barcode"
                        width={156}
                        height={60}
                    />

                    {menuOpen ? (
                        <Image src={"/icons/close.png"} alt="Hamburger menu" width={37} height={37} className="cursor-pointer" onClick={toggleMenu} />
                    ) : (
                        <Image src={"/icons/hamburger_menu.png"} alt="Hamburger menu" width={37} height={37} className="cursor-pointer" onClick={toggleMenu} />
                    )}

                </div>

                {menuOpen && (
                    <nav className="flex items-start justify-between">

                        <div className="flex gap-10">

                            <a href="tel:+37061315157" className="flex items-center gap-5 text-white text-[22px] font-normal"><Image src={"/icons/phone_call.png"} alt="Contact icon" width={35} height={35} />+370 613 15 157</a>

                            <a href="mailto:info@sgtrade.com?subject=Platform question&body=Hello, I have a question..." className="flex items-center gap-5 text-white text-lg font-normal"><Image src={"/icons/mail.png"} alt="Mail icon" width={35} height={35} />info@sgtrade.lt</a>

                        </div>

                        <div className="flex items-end flex-col gap-[31px]">

                            <div className="flex items-center gap-[60px]">

                                <Link href={"/import"} className="flex items-center gap-2.5 text-[#93E1ED] text-lg font-medium"><Image src={"/icons/catalog.png"} alt="Import Export icon" width={15} height={15} />Import/Export</Link>

                                <Link href={"/about"} className="flex items-center gap-2.5 text-[#93E1ED] text-lg font-medium"><Image src={"/icons/about_us.png"} alt="About icon" width={15} height={15} />About Us</Link>

                                <Link href={"/news"} className="flex items-center gap-2.5 text-[#93E1ED] text-lg font-medium"><Image src={"/icons/news.png"} alt="News icon" width={15} height={15} />News</Link>

                                <Link href={"/contact"} className="flex items-center gap-2.5 text-[#93E1ED] text-lg font-medium"><Image src={"/icons/contacts.png"} alt="Contact icon" width={15} height={15} />Contacts</Link>

                                <Link href={"/catalog"} className="flex items-center gap-2.5 text-[#93E1ED] text-lg font-medium"><Image src={"/icons/imp_exp.png"} alt="Catalog icon" width={15} height={15} />Catalog</Link>

                            </div>

                            <div className="flex items-center gap-[51px]">

                                <Link href={"/alhocol"} className="text-white text-lg font-light">Alcohol</Link>

                                <Link href={"/confectionary"} className="text-white text-lg font-light">Confectionary</Link>

                                <Link href={"/beverages"} className="text-white text-lg font-light">Beverages</Link>

                            </div>

                        </div>

                    </nav>
                )}

            </header> */}

            <header className="w-full h-full bg-[#111010]">

                <div className="container mx-auto px-4 lg:px-10 py-6 flex flex-col gap-10 sm:gap-[30px]">

                    <div className="flex items-center justify-between gap-[35px]">

                        <Link href={"/"} className="block sm:hidden">

                            <Image src={"/icons/logo_mobile.png"} alt="Logo get the quote" width={52} height={52} />

                        </Link>

                        <Link href={"/"} className="hidden sm:block">

                            <Image src={"/icons/logo.png"} alt="Logo get the quote" width={189} height={54} />

                        </Link>

                        <Image
                            src={"/images/barcode.png"}
                            alt="Barcode"
                            width={156}
                            height={60}
                            className="w-[126px] h-[49px] sm:w-[156px] sm:h-[60px]"
                        />

                        {menuOpen ? (
                            <Image src={"/icons/close.png"} alt="Hamburger menu" width={37} height={37} className="w-[52px] h-[52px] sm:w-[37px] sm:h-[37px] cursor-pointer" onClick={toggleMenu} />
                        ) : (
                            <Image src={"/icons/hamburger_menu.png"} alt="Hamburger menu" width={37} height={37} className="w-[52px] h-[52px] sm:w-[37px] sm:h-[37px] cursor-pointer" onClick={toggleMenu} />
                        )}

                    </div>

                    {menuOpen && (
                        <>

                            {/* <nav className="flex items-start justify-between">

                                <div className="flex gap-10">

                                    <a href="tel:+37061315157" className="flex items-center gap-5 text-white text-[22px] font-normal"><Image src={"/icons/phone_call.png"} alt="Contact icon" width={35} height={35} />+370 613 15 157</a>

                                    <a href="mailto:info@sgtrade.com?subject=Platform question&body=Hello, I have a question..." className="flex items-center gap-5 text-white text-lg font-normal"><Image src={"/icons/mail.png"} alt="Mail icon" width={35} height={35} />info@sgtrade.lt</a>

                                </div>

                                <div className="flex items-end flex-col gap-[31px]">

                                    <div className="flex items-center gap-[60px]">

                                        <Link href={"/import"} className="flex items-center gap-2.5 text-[#93E1ED] text-lg font-medium"><Image src={"/icons/catalog.png"} alt="Import Export icon" width={15} height={15} />Import/Export</Link>

                                        <Link href={"/about"} className="flex items-center gap-2.5 text-[#93E1ED] text-lg font-medium"><Image src={"/icons/about_us.png"} alt="About icon" width={15} height={15} />About Us</Link>

                                        <Link href={"/news"} className="flex items-center gap-2.5 text-[#93E1ED] text-lg font-medium"><Image src={"/icons/news.png"} alt="News icon" width={15} height={15} />News</Link>

                                        <Link href={"/contact"} className="flex items-center gap-2.5 text-[#93E1ED] text-lg font-medium"><Image src={"/icons/contacts.png"} alt="Contact icon" width={15} height={15} />Contacts</Link>

                                        <Link href={"/catalog"} className="flex items-center gap-2.5 text-[#93E1ED] text-lg font-medium"><Image src={"/icons/imp_exp.png"} alt="Catalog icon" width={15} height={15} />Catalog</Link>

                                    </div>

                                    <div className="flex items-center gap-[51px]">

                                        <Link href={"/alhocol"} className="text-white text-lg font-light">Alcohol</Link>

                                        <Link href={"/confectionary"} className="text-white text-lg font-light">Confectionary</Link>

                                        <Link href={"/beverages"} className="text-white text-lg font-light">Beverages</Link>

                                    </div>

                                </div>

                            </nav> */}

                            <nav className="flex items-start justify-between flex-col gap-10"> {/* lg:flex-row нужен */}

                                <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">

                                    <a href="tel:+37061315157" className="flex items-center gap-5 text-white text-[22px] font-normal"><Image src={"/icons/phone_call.png"} alt="Contact icon" width={35} height={35} />+370 613 15 157</a>

                                    <a href="mailto:info@sgtrade.com?subject=Platform question&body=Hello, I have a question..." className="flex items-center gap-5 text-white text-lg font-normal"><Image src={"/icons/mail.png"} alt="Mail icon" width={35} height={35} />info@sgtrade.lt</a>

                                </div>

                                <div className="flex sm:flex-wrap lg:flex-col gap-10 sm:items-end sm:gap-[31px]">

                                    <div className="hidden sm:flex flex-wrap gap-5 lg:gap-[60px]">

                                        <Link href={"/import"} className="flex items-center gap-2.5 text-[#04C1C1] sm:text-[#93E1ED] text-lg font-normal sm:font-medium"><Image src={"/icons/catalog.png"} alt="Import Export icon" width={15} height={15} />Import/Export</Link>

                                        <Link href={"/about"} className="flex items-center gap-2.5 text-[#04C1C1] sm:text-[#93E1ED] text-lg font-normal sm:font-medium"><Image src={"/icons/about_us.png"} alt="About icon" width={15} height={15} />About Us</Link>

                                        <Link href={"/news"} className="flex items-center gap-2.5 text-[#04C1C1] sm:text-[#93E1ED] text-lg font-normal sm:font-medium"><Image src={"/icons/news.png"} alt="News icon" width={15} height={15} />News</Link>

                                        <Link href={"/contact"} className="flex items-center gap-2.5 text-[#04C1C1] sm:text-[#93E1ED] text-lg font-normal sm:font-medium"><Image src={"/icons/contacts.png"} alt="Contact icon" width={15} height={15} />Contacts</Link>

                                        <Link href={"/catalog"} className="flex items-center gap-2.5 text-[#04C1C1] sm:text-[#93E1ED] text-lg font-normal sm:font-medium"><Image src={"/icons/imp_exp.png"} alt="Catalog icon" width={15} height={15} />Catalog</Link>

                                    </div>

                                    <div className="flex sm:hidden flex-col gap-5 sm:gap-[60px]">

                                        <Link href={"/contact"} className="flex items-center gap-2.5 text-[#04C1C1] text-lg font-normal"><Image src={"/icons/contacts.png"} alt="Contact icon" width={15} height={15} />Contacts</Link>

                                        <Link href={"/about"} className="flex items-center gap-2.5 text-[#04C1C1] text-lg font-normal"><Image src={"/icons/about_us.png"} alt="About icon" width={15} height={15} />About Us</Link>

                                        <Link href={"/import"} className="flex items-center gap-2.5 text-[#04C1C1] text-lg font-normal"><Image src={"/icons/imp_exp.png"} alt="Import Export icon" width={15} height={15} />Import/Export</Link>


                                        <Link href={"/news"} className="flex items-center gap-2.5 text-[#04C1C1] text-lg font-normal"><Image src={"/icons/news.png"} alt="News icon" width={15} height={15} />News</Link>

                                    </div>

                                    {/* <div className="flex items-center flex-col gap-[51px]">

                                        <Link href={"/alhocol"} className="text-white text-lg font-light">Alcohol</Link>

                                        <Link href={"/confectionary"} className="text-white text-lg font-light">Confectionary</Link>

                                        <Link href={"/beverages"} className="text-white text-lg font-light">Beverages</Link>

                                    </div> */}

                                    <div className="flex flex-col sm:flex-row gap-2.5 lg:gap-[51px]">

                                        <Link href={"/catalog"} className="flex sm:hidden items-center gap-2.5 text-[#04C1C1] sm:text-[#93E1ED] text-lg font-normal"><Image src={"/icons/catalog.png"} alt="catalog icon" width={15} height={15} />Catalog</Link>

                                        <Link href={"/beverages"} className="flex items-center gap-2.5 text-[#C8C8C8] text-base font-normal sm:font-light"><div className="w-[15px] h-[15px]" aria-hidden="true" />Beverages</Link>

                                        <Link href={"/confectionary"} className="flex items-center gap-2.5 text-[#C8C8C8] text-base font-normal sm:font-light"><div className="w-[15px] h-[15px]" aria-hidden="true" />Confectionary</Link>

                                        <Link href={"/alhocol"} className="flex items-center gap-2.5 text-[#C8C8C8] text-base font-normal sm:font-light"><div className="w-[15px] h-[15px]" aria-hidden="true" />Alcohol</Link>

                                    </div>

                                </div>

                            </nav>

                        </>
                    )}

                </div>

            </header>

        </div>
    );
};

export default Header;