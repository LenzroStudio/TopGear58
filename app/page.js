"use client";
import { Logo } from "@/public/images/images";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";

function getTimeLeft(targetDate) {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Home() {
  // Set the target date to 30 days from now
  const [timeLeft, setTimeLeft] = useState(
    getTimeLeft(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000))
  );

  useEffect(() => {
    const targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="flex flex-col items-center w-full max-w-2xl">
        <Image src={Logo} className="w-72 bg-black rounded-full !p-2 rounded-full" alt="TG58_Logo" />
        <i className="text-xl md:text-2xl mt-7 text-center w-full left-0">
          Driven by Trust, Powered by Care
        </i>
        <div className="flex flex-col items-center justify-center mt-20  w-full">
          <h1 className="text-3xl md:text-5xl text-center">
            WE ARE <span className="text-red-500">LAUNCHING</span> SOON
          </h1>
          {/* Countdown Timer */}
          <div className="flex flex-row flex-wrap gap-[3rem] mt-4 p-4 rounded-lg shadow justify-center w-full">
            <div className="flex flex-col items-center p-3 border-b-2 border-b-red-500 min-w-[70px]">
              <span className="text-3xl font-bold">{timeLeft.days}</span>
              <span className="text-xs">Days</span>
            </div>
            <div className="flex flex-col items-center p-3 border-b-2 border-b-red-500 min-w-[70px]">
              <span className="text-3xl font-bold">{timeLeft.hours}</span>
              <span className="text-xs">Hours</span>
            </div>
            <div className="flex flex-col items-center p-3 border-b-2 border-b-red-500 min-w-[70px]">
              <span className="text-3xl font-bold">{timeLeft.minutes}</span>
              <span className="text-xs">Minutes</span>
            </div>
            <div className="flex flex-col items-center p-3 border-b-2 border-b-red-500 min-w-[70px]">
              <span className="text-3xl font-bold">{timeLeft.seconds}</span>
              <span className="text-xs">Seconds</span>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4 text-sm text-center w-full">
            <p>We are working hard to launch our new website. Stay tuned!</p>
            <p>
              In the meantime, follow us on our social media channels for
              updates.
            </p>
          </div>
          {/* Social Media Icons */}
          <div className="flex flex-row gap-6 mt-6 justify-center w-full">
            <a
              href="https://www.tiktok.com/@topgear.58"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok className="text-2xl hover:text-red-500 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/topgear.58/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl hover:text-red-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
