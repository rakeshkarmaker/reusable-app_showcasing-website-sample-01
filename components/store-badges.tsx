import { motion } from "framer-motion";

export function AppStoreBadge() {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="bg-black text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2.5 shadow-xl transition-all border border-white/20 hover:border-white/40 min-w-[160px]"
    >
      <svg viewBox="0 0 384 512" width="26" height="26" fill="currentColor">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 22 184.9 14 266.3c-15.6 156.4 53.6 222.6 86.8 222.6 21 0 31.8-13.6 57.5-13.6 25.2 0 35 13.6 58 13.6 34.6 0 71.3-64.4 86.4-118-47.1-14.8-56.9-59.2-56.9-102.2zm-67.6-146.4c17.6-21.7 30.6-51.5 26.6-82.3-25.7 1-54.8 17.5-73.4 39.8-15.9 18.9-31 49.3-25.9 79.1 29 2 55.1-14.9 72.7-36.6z" />
      </svg>
      <div className="flex flex-col items-start mt-0.5">
        <span className="text-[10px] text-white/90 leading-none font-medium">Download on the</span>
        <span className="text-[20px] font-semibold leading-tight tracking-tight mt-0.5">App Store</span>
      </div>
    </motion.a>
  );
}

export function GooglePlayBadge() {
  return (
    <motion.a
      href="https://drive.google.com/file/d/13Lf0ig9TKKaCnTYFPqNR7fsEwcysNWZC/view"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="bg-black text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2.5 shadow-xl transition-all border border-white/20 hover:border-white/40 min-w-[160px]"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 2.5C3.2 2.7 3 3.1 3 3.6V20.4C3 20.9 3.2 21.3 3.5 21.5L3.6 21.6L13.1 12.1V11.9L3.6 2.4L3.5 2.5Z" fill="#3FCCFF"/>
        <path d="M16.3 15.3L13.1 12.1V11.9L16.3 8.7L16.4 8.8L19.8 10.7C20.8 11.3 20.8 12.3 19.8 12.8L16.4 14.8L16.3 15.3Z" fill="#FFC82C"/>
        <path d="M16.4 14.8L13.1 11.5L3.5 21.1C3.9 21.6 4.6 21.6 5.4 21.2L16.4 14.8Z" fill="#FF3A44"/>
        <path d="M16.4 8.8L5.4 2.5C4.6 2.1 3.9 2.1 3.5 2.5L13.1 12.1L16.4 8.8Z" fill="#00E676"/>
      </svg>
      <div className="flex flex-col items-start mt-0.5">
        <span className="text-[10px] text-white/90 leading-none font-medium uppercase tracking-[0.02em]">GET IT ON</span>
        <span className="text-[20px] font-semibold leading-tight tracking-tight mt-0.5">Google Play</span>
      </div>
    </motion.a>
  );
}
