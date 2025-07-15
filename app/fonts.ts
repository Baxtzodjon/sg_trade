import { Playfair_Display, Radio_Canada } from "next/font/google";

export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair-display',
    weight: ['400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

export const radioCanada = Radio_Canada({
    subsets: ['latin'],
    variable: '--font-radio-canada',
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
});