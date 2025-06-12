"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <header className="bg-[#0e9646] lg:bg-white  shadow-md py-4 px-5">
                <nav className="container mx-auto flex justify-between items-center">
                    <ul className="hidden lg:flex lg:flex-row lg:space-x-3 text-sm font-semibold text-[#2C6A34]">
                        <li>
                            <Link href="/" className="hover:underline">
                                Acasă
                            </Link>
                        </li>
                        <li>
                            <Link href="/despre-noi" className="hover:underline">
                                Despre noi
                            </Link>
                        </li>
                        <li>
                            <Link href="/produse" className="hover:underline">
                                Produse
                            </Link>
                        </li>
                        <li>
                            <Link href="/articole" className="hover:underline">
                                Articole
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex-col lg:flex-row lg:flex space-y-4 lg:space-y-0 lg:space-x-3 text-sm font-semibold text-[#fff] lg:text-[#2C6A34] mt-4 lg:mt-0 overflow-hidden"
                            >
                                <li>
                                    <Link href="/" className="hover:underline">
                                        Acasă
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/despre-noi" className="hover:underline">
                                        Despre noi
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/produse" className="hover:underline">
                                        Produse
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/articole" className="hover:underline">
                                        Articole
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:underline">
                                        Contact
                                    </Link>
                                </li>
                            </motion.ul>
                        )}
                    </AnimatePresence>

                    <form className="hidden lg:flex items-center space-x-4 border rounded-3xl px-3 py-1 ring ring-[#2C6A34]">
                        <Search strokeWidth={3} color="#2C6A34" size={16} />
                        <input type="text" placeholder="Caută..." className="text-sm text-gray-700 outline-none" />
                    </form>
                </nav>
                <div className="flex items-center justify-end w-full lg:w-auto">
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#fff] focus:outline-none">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>
        </>
    );
}
