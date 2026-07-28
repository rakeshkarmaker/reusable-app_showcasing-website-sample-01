"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  SlidersHorizontal,
  Search,
  ChevronDown,
  Hammer,
  Zap,
  Wrench,
  Sparkles,
  Home,
  MessageSquare,
  Calendar,
  Settings,
  ChevronLeft,
  Bookmark,
  Star,
  MessageCircle,
  Bell,
} from "lucide-react";

type CategoryType = "all" | "carpenter" | "electrician" | "plumbing" | "cleaning";
type TabType = "services" | "description" | "review";

const categoryServices = {
  all: [
    {
      id: 1,
      title: "House Cleaning Service",
      provider: "Omar Khalid",
      price: "$25",
      rating: "4.8 (120)",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Electric Service",
      provider: "Abdullah Alim",
      price: "$35",
      rating: "4.9 (120)",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&auto=format&fit=crop&q=80",
    },
  ],
  carpenter: [
    {
      id: 3,
      title: "Custom Furniture Repair",
      provider: "Tariq Hassan",
      price: "$40",
      rating: "4.9 (85)",
      image: "https://images.unsplash.com/photo-1581783342308-f792dbdd77c5?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      title: "Cabinet Installation",
      provider: "Zayd Mansoor",
      price: "$65",
      rating: "4.8 (94)",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=300&auto=format&fit=crop&q=80",
    },
  ],
  electrician: [
    {
      id: 2,
      title: "Electric Service",
      provider: "Abdullah Alim",
      price: "$35",
      rating: "4.9 (120)",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      title: "Wiring & Lighting Setup",
      provider: "Faisal Rayan",
      price: "$50",
      rating: "4.7 (62)",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&auto=format&fit=crop&q=80",
    },
  ],
  plumbing: [
    {
      id: 6,
      title: "Pipe Leak Repair",
      provider: "Kareem Nabil",
      price: "$30",
      rating: "4.8 (110)",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 7,
      title: "Bathroom Drainage Fix",
      provider: "Bilal Ahmad",
      price: "$45",
      rating: "4.9 (98)",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&auto=format&fit=crop&q=80",
    },
  ],
  cleaning: [
    {
      id: 1,
      title: "House Cleaning Service",
      provider: "Omar Khalid",
      price: "$25",
      rating: "4.8 (120)",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 8,
      title: "Deep Kitchen Sanitization",
      provider: "Youssef Sami",
      price: "$55",
      rating: "5.0 (74)",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&auto=format&fit=crop&q=80",
    },
  ],
};

export function HomeServiceSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
  const [activeTab, setActiveTab] = useState<TabType>("review");

  return (
    <section className="relative min-h-[750px] lg:min-h-[850px] w-full bg-gradient-to-br from-[#0066FF] via-[#0070FF] to-[#0051E6] overflow-hidden py-16 lg:py-24 px-4 sm:px-6 isolate flex items-center justify-center">
      {/* ─── Background Outlined Watermark Text ─── */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-between px-4 sm:px-12 md:px-20 overflow-hidden z-0">
        <span
          className="font-extrabold text-transparent text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] leading-none tracking-tight opacity-30 uppercase"
          style={{
            WebkitTextStroke: "2.5px rgba(255, 255, 255, 0.4)",
          }}
        >
          Home
        </span>
        <span
          className="font-extrabold text-transparent text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] leading-none tracking-tight opacity-30 uppercase"
          style={{
            WebkitTextStroke: "2.5px rgba(255, 255, 255, 0.4)",
          }}
        >
          Service
        </span>
      </div>

      {/* ─── Floating Translucent 3D Isometric Cubes ─── */}
      <div className="absolute top-8 right-6 md:top-12 md:right-16 z-0 pointer-events-none opacity-80">
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72"
        >
          {/* Isometric Cube Group */}
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            {/* Top Large Cube */}
            <g opacity="0.25">
              <path
                d="M100 20 L160 50 L100 80 L40 50 Z"
                fill="white"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1.5"
              />
              <path
                d="M40 50 L100 80 L100 150 L40 120 Z"
                fill="rgba(255,255,255,0.1)"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1.5"
              />
              <path
                d="M160 50 L100 80 L100 150 L160 120 Z"
                fill="rgba(255,255,255,0.2)"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1.5"
              />
            </g>
            {/* Small Floating Cube 1 */}
            <g opacity="0.3" transform="translate(110, -10) scale(0.45)">
              <path
                d="M100 20 L160 50 L100 80 L40 50 Z"
                fill="white"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="2"
              />
              <path
                d="M40 50 L100 80 L100 150 L40 120 Z"
                fill="rgba(255,255,255,0.2)"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="2"
              />
              <path
                d="M160 50 L100 80 L100 150 L160 120 Z"
                fill="rgba(255,255,255,0.3)"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="2"
              />
            </g>
            {/* Small Floating Cube 2 */}
            <g opacity="0.35" transform="translate(130, 80) scale(0.35)">
              <path
                d="M100 20 L160 50 L100 80 L40 50 Z"
                fill="white"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="2"
              />
              <path
                d="M40 50 L100 80 L100 150 L40 120 Z"
                fill="rgba(255,255,255,0.25)"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="2"
              />
              <path
                d="M160 50 L100 80 L100 150 L160 120 Z"
                fill="rgba(255,255,255,0.4)"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="2"
              />
            </g>
          </svg>
        </motion.div>
      </div>

      {/* ─── Dual Phone Showcase Area ─── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-12 py-6">
        
        {/* ─── LEFT PHONE: Service Home Screen ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10, rotateY: 15, rotateZ: -8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 6, rotateY: 12, rotateZ: -7 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          viewport={{ once: true }}
          className="relative w-[300px] sm:w-[330px] lg:w-[350px] shrink-0 [perspective:1200px] hover:scale-105 transition-transform duration-500"
        >
          {/* Phone Frame Outer Shadow & Bezel */}
          <div className="relative rounded-[3rem] bg-[#141824] p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20 ring-1 ring-black/40">
            {/* Dynamic Island */}
            <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-black rounded-full z-30 flex items-center justify-between px-2">
              <div className="size-2 rounded-full bg-white/10" />
              <div className="size-2.5 rounded-full bg-[#0a0a0a] ring-1 ring-white/10" />
            </div>

            {/* Gloss Reflection */}
            <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-white/15 to-transparent rounded-t-[2.2rem] pointer-events-none z-30 mix-blend-overlay" />

            {/* Screen Canvas */}
            <div className="relative h-[620px] sm:h-[650px] w-full overflow-hidden rounded-[2.2rem] bg-[#f8fafc] text-slate-800 flex flex-col justify-between pt-7 pb-3 px-3.5 isolate">
              
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto space-y-3.5 no-scrollbar pb-12">
                
                {/* 1. Header Bar */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <MapPin className="size-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-medium leading-none block">Address</span>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <span className="text-xs font-bold text-slate-800">Riyadh, Saudi Arabia</span>
                        <ChevronDown className="size-3 text-slate-500" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="size-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors">
                      <Bell className="size-4" />
                    </button>
                    <button className="size-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                      <SlidersHorizontal className="size-4" />
                    </button>
                  </div>
                </div>

                {/* 2. Search Input */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <input
                    type="text"
                    readOnly
                    placeholder="Search for services"
                    className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none"
                  />
                </div>

                {/* 3. Promo Banner */}
                <div data-cursor="PROMO" className="relative rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 p-3.5 text-white overflow-hidden shadow-lg shadow-blue-600/25 flex items-center justify-between">
                  <div className="space-y-1 z-10 max-w-[55%]">
                    <span className="text-lg font-black tracking-tight leading-tight block">25% OFF</span>
                    <p className="text-[10px] text-blue-100 font-medium leading-tight">Grab this exclusive offer</p>
                    <button data-cursor="CLAIM" className="mt-1.5 px-3 py-1 bg-white text-blue-600 rounded-lg text-[10px] font-bold shadow-sm hover:scale-105 transition-transform">
                      Book Now
                    </button>
                  </div>
                  {/* Cleaner Illustration Graphic */}
                  <div className="relative z-10 w-24 h-24 shrink-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm p-1 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&auto=format&fit=crop&q=80"
                        alt="Service Professional"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  {/* Decorative background circle */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full pointer-events-none" />
                </div>

                {/* 4. Service Categories */}
                <div>
                  <h4 className="text-xs font-bold text-slate-800 mb-2">Service Categories</h4>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <button
                      data-cursor="CARPENTER"
                      onClick={() => setSelectedCategory(selectedCategory === "carpenter" ? "all" : "carpenter")}
                      className="flex flex-col items-center gap-1 group focus:outline-none"
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-sm ${
                        selectedCategory === "carpenter"
                          ? "bg-amber-500 text-white ring-2 ring-amber-400"
                          : "bg-amber-50 border border-amber-100 text-amber-600 group-hover:scale-105"
                      }`}>
                        <Hammer className="size-5" />
                      </div>
                      <span className="text-[10px] font-semibold text-slate-700">Carpenter</span>
                    </button>

                    <button
                      data-cursor="ELECTRICIAN"
                      onClick={() => setSelectedCategory(selectedCategory === "electrician" ? "all" : "electrician")}
                      className="flex flex-col items-center gap-1 group focus:outline-none"
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-sm ${
                        selectedCategory === "electrician"
                          ? "bg-yellow-500 text-white ring-2 ring-yellow-400"
                          : "bg-yellow-50 border border-yellow-100 text-yellow-500 group-hover:scale-105"
                      }`}>
                        <Zap className="size-5" />
                      </div>
                      <span className="text-[10px] font-semibold text-slate-700">Electrician</span>
                    </button>

                    <button
                      data-cursor="PLUMBING"
                      onClick={() => setSelectedCategory(selectedCategory === "plumbing" ? "all" : "plumbing")}
                      className="flex flex-col items-center gap-1 group focus:outline-none"
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-sm ${
                        selectedCategory === "plumbing"
                          ? "bg-sky-500 text-white ring-2 ring-sky-400"
                          : "bg-sky-50 border border-sky-100 text-sky-600 group-hover:scale-105"
                      }`}>
                        <Wrench className="size-5" />
                      </div>
                      <span className="text-[10px] font-semibold text-slate-700">Plumbing</span>
                    </button>

                    <button
                      data-cursor="CLEANING"
                      onClick={() => setSelectedCategory(selectedCategory === "cleaning" ? "all" : "cleaning")}
                      className="flex flex-col items-center gap-1 group focus:outline-none"
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-sm ${
                        selectedCategory === "cleaning"
                          ? "bg-rose-500 text-white ring-2 ring-rose-400"
                          : "bg-rose-50 border border-rose-100 text-rose-500 group-hover:scale-105"
                      }`}>
                        <Sparkles className="size-5" />
                      </div>
                      <span className="text-[10px] font-semibold text-slate-700">Cleaning</span>
                    </button>
                  </div>
                </div>

                {/* 5. Popular Services */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-bold text-slate-800">
                      {selectedCategory === "all" ? "Popular Services" : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Services`}
                    </h4>
                    {selectedCategory !== "all" && (
                      <button
                        onClick={() => setSelectedCategory("all")}
                        className="text-[10px] font-semibold text-blue-600 cursor-pointer hover:underline"
                      >
                        Reset Filter
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <AnimatePresence mode="popLayout">
                      {categoryServices[selectedCategory].map((service) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.25 }}
                          className="bg-white rounded-xl p-2 border border-slate-100 shadow-sm space-y-1.5"
                        >
                          <div className="h-20 w-full rounded-lg overflow-hidden relative">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h5 className="text-[11px] font-bold text-slate-800 leading-tight truncate">
                              {service.title}
                            </h5>
                            <p className="text-[9px] text-slate-500">👤 {service.provider}</p>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs font-extrabold text-blue-600">{service.price}</span>
                              <span className="text-[9px] font-semibold text-amber-500 flex items-center gap-0.5">
                                <Star className="size-2.5 fill-amber-400 text-amber-400" /> {service.rating}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

              </div>

              {/* Bottom Navigation */}
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 py-2 px-4 flex items-center justify-between rounded-b-[2.2rem] z-20">
                <div className="flex flex-col items-center gap-0.5 text-blue-600">
                  <Home className="size-4" />
                  <span className="text-[9px] font-bold">Home</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-slate-400">
                  <MessageSquare className="size-4" />
                  <span className="text-[9px] font-medium">Messages</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-slate-400">
                  <Calendar className="size-4" />
                  <span className="text-[9px] font-medium">Booking</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-slate-400">
                  <Settings className="size-4" />
                  <span className="text-[9px] font-medium">Settings</span>
                </div>
              </div>

              {/* iOS Home Indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-[4px] bg-slate-800/80 rounded-full z-30" />
            </div>
          </div>
        </motion.div>

        {/* ─── RIGHT PHONE: Service Details Screen ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10, rotateY: -15, rotateZ: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 6, rotateY: -12, rotateZ: 7 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          viewport={{ once: true }}
          className="relative w-[300px] sm:w-[330px] lg:w-[350px] shrink-0 [perspective:1200px] hover:scale-105 transition-transform duration-500 -mt-8 md:mt-0"
        >
          {/* Phone Frame Outer Shadow & Bezel */}
          <div className="relative rounded-[3rem] bg-[#141824] p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20 ring-1 ring-black/40">
            {/* Dynamic Island */}
            <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-black rounded-full z-30 flex items-center justify-between px-2">
              <div className="size-2 rounded-full bg-white/10" />
              <div className="size-2.5 rounded-full bg-[#0a0a0a] ring-1 ring-white/10" />
            </div>

            {/* Gloss Reflection */}
            <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-white/15 to-transparent rounded-t-[2.2rem] pointer-events-none z-30 mix-blend-overlay" />

            {/* Screen Canvas */}
            <div className="relative h-[620px] sm:h-[650px] w-full overflow-hidden rounded-[2.2rem] bg-white text-slate-800 flex flex-col justify-between pt-7 pb-3 px-3.5 isolate">
              
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto space-y-3 no-scrollbar pb-6">
                
                {/* 1. Detail Header */}
                <div className="flex items-center justify-between pt-2">
                  <button className="size-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-700">
                    <ChevronLeft className="size-4" />
                  </button>
                  <h4 className="text-xs font-bold text-slate-800">Service Details</h4>
                  <button className="size-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-700">
                    <Bookmark className="size-3.5" />
                  </button>
                </div>

                {/* 2. Main Service Banner Image */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop&q=80"
                    alt="House Cleaning Service"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* 3. Title & Price */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600">
                      Starts from <span className="text-sm font-black">$20</span>
                    </span>
                    <span className="text-[10px] font-bold text-amber-500 flex items-center gap-1">
                      <Star className="size-3 fill-amber-400 text-amber-400" /> 4.8 (120 Reviews)
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mt-0.5">House Cleaning Service</h3>
                  <div className="flex items-center gap-1 text-slate-400 text-[10px] mt-0.5">
                    <MapPin className="size-3 text-slate-400" />
                    <span>437 Star St, Los Angeles, USA</span>
                  </div>
                </div>

                {/* 4. Provider Profile Row */}
                <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                      alt="Omar Khalid"
                      className="size-8 rounded-full object-cover border border-white shadow-sm"
                    />
                    <div>
                      <h5 className="text-xs font-bold text-slate-800">Omar Khalid</h5>
                      <span className="text-[9px] text-slate-400">Professional Cleaner</span>
                    </div>
                  </div>
                  <button className="size-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                    <MessageCircle className="size-3.5" />
                  </button>
                </div>

                {/* 5. Navigation Tabs */}
                <div className="border-b border-slate-100 flex items-center justify-around text-xs font-semibold pt-1">
                  <button
                    onClick={() => setActiveTab("services")}
                    className={`pb-2 transition-colors focus:outline-none ${
                      activeTab === "services"
                        ? "text-blue-600 border-b-2 border-blue-600 font-bold"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    Services
                  </button>
                  <button
                    onClick={() => setActiveTab("description")}
                    className={`pb-2 transition-colors focus:outline-none ${
                      activeTab === "description"
                        ? "text-blue-600 border-b-2 border-blue-600 font-bold"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab("review")}
                    className={`pb-2 transition-colors focus:outline-none ${
                      activeTab === "review"
                        ? "text-blue-600 border-b-2 border-blue-600 font-bold"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    Review
                  </button>
                </div>

                {/* Tab Contents */}
                {activeTab === "review" && (
                  <div className="space-y-2 pt-1">
                    {/* 6. Ratings Breakdown */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[10px]">
                        <span className="w-10 text-slate-500 font-medium">5 stars</span>
                        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full w-[70%]" />
                        </div>
                        <span className="w-4 text-right text-slate-400 font-semibold">70</span>
                      </div>

                      <div className="flex items-center gap-2 text-[10px]">
                        <span className="w-10 text-slate-500 font-medium">4 stars</span>
                        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full w-[15%]" />
                        </div>
                        <span className="w-4 text-right text-slate-400 font-semibold">10</span>
                      </div>

                      <div className="flex items-center gap-2 text-[10px]">
                        <span className="w-10 text-slate-500 font-medium">3 stars</span>
                        <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full w-[10%]" />
                        </div>
                        <span className="w-4 text-right text-slate-400 font-semibold">07</span>
                      </div>
                    </div>

                    {/* 7. Customer Review Card */}
                    <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 space-y-1">
                      <div className="flex items-center justify-between text-[9px] text-slate-400">
                        <span className="font-semibold text-slate-700">Sarah M.</span>
                        <span>12 Days ago</span>
                      </div>
                      <p className="text-[10px] text-slate-600 leading-snug">
                        Fantastic job on the kitchen. Everything was left spotless!
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "description" && (
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5 text-[10px] text-slate-600 leading-relaxed">
                    <p className="font-semibold text-slate-800">About this service</p>
                    <p>
                      Professional eco-friendly home sanitization & deep cleaning by certified service specialists. Includes kitchen, living area, and bathroom restoration.
                    </p>
                  </div>
                )}

                {activeTab === "services" && (
                  <div className="space-y-1.5 text-[10px] text-slate-600">
                    <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="font-medium text-slate-700">Standard Room Cleaning</span>
                      <span className="font-bold text-blue-600">$20</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="font-medium text-slate-700">Deep Carpet Wash</span>
                      <span className="font-bold text-blue-600">$35</span>
                    </div>
                  </div>
                )}

              </div>

              {/* iOS Home Indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-[4px] bg-slate-800/80 rounded-full z-30" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
