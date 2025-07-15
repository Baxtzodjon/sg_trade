"use client"

import Image from "next/image";
import Link from "next/link";

type FooterLinkProps = {
    href: string;
    icon?: string;
    label: string;
};

const FooterLink = ({ href, icon, label }: FooterLinkProps) => (
    <Link href={href} className="flex items-center gap-2.5 text-[#E2F3FD] text-lg font-normal">
        {icon ? (
            <Image src={icon} alt={`${label} icon`} width={15} height={15} />
        ) : (
            <div className="w-[15px] h-[15px]" aria-hidden="true" />
        )}
        {label}
    </Link>
);

export default FooterLink;