import React from "react";

import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="bg-white text-[#2C6A34]">
                <div className="container mx-auto py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm">&copy; {new Date().getFullYear()} Naturevo. Toate drepturile rezervate.</div>
                        <div className="text-sm flex flex-col md:flex-row space-x-4 text-center md:text-left mt-2 md:mt-0">
                            <Link href="/politica-de-confidentialitate" className="hover:underline">
                                Politica de confidențialitate
                            </Link>
                            <Link href="/termeni-si-conditii" className="hover:underline">
                                Termeni și condiții
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
