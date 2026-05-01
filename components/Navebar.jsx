"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <nav className="sticky top-10 z-50 w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between text-[var(--secondary)] py-5 body-subtitle">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/image1.png" alt="Chicken Chef" className="w-25 h-25" />

          <a href="/" className="font-bold text-4xl leading-none">
            Cheffington
          </a>
        </div>

        {/* Desktop Menu (CENTER) */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <a className="hover:text-gray-500/80 transition" href="join-1">
              JOIN
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500/80 transition" href="about">
              ABOUT
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500/80 transition" href="review">
              REVIEW
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500/80 transition" href="add-listing">
              ADD LISTING
            </a>
          </li>
          <li>
            <a
              className="hover:text-gray-500/80 transition"
              href="claim-a-restaurant-1"
            >
              CLAIM RESTAURANT
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500/80 transition" href="advertising">
              ADVERTISE
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500/80 transition" href="sign-in">
              <Image
                src="/Layer.png"
                alt="Profile"
                width={28}
                height={28}
              />
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="menu-btn"
          className="md:hidden ml-auto active:scale-90 transition"
        >
          {open ? (
            // ❌ CLOSE ICON (X)
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            // ☰ MENU ICON
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path
                d="M3 7h24M3 14h24M3 21h24"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-[70px] left-0 w-full bg-[var(--bg)] p-6 md:hidden shadow">
            <ul className="flex flex-col space-y-4 text-lg">
              <li>
                <a href="#" className="text-sm">
                  JOIN
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  REVIEW
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  ADD LISTING
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  CLAIM RESTAURANT
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  ADVERTISE
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
