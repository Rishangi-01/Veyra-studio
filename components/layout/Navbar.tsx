
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowDownRight,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { navbarData } from "../../data";

const navigation = navbarData.navigation;

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const currentPath = pathname.replace(/\/+$/, "") || "/";

  return (
    <motion.header
      initial={{ y: -35, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-50 w-full border-b border-black/[0.06] bg-white"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[86px] max-w-[1720px] items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:min-h-[90px] lg:px-12 xl:px-[4.5%]"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Veyra Studio home"
          className="group flex shrink-0 items-center"
        >
          <motion.div
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.25 }}
            className="relative"
          >
            <Image
              src={navbarData.logo}
              alt="Veyra Studio — Architecture, Interiors, Design"
              width={300}
              height={68}
              className="h-auto w-[205px] object-contain sm:w-[245px] lg:w-[300px] xl:w-[210px]"
            />
          </motion.div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-9">
          {navigation.map((item) => {
            const isActive =
              currentPath === item.href ||
              (item.href !== "/" && currentPath.startsWith(`${item.href}/`));

            return (
              <div
                key={item.label}
                className="relative flex h-12 items-center"
                onMouseEnter={() =>
                  item.submenu && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  aria-haspopup={item.submenu ? "true" : undefined}
                  aria-expanded={
                    item.submenu
                      ? activeDropdown === item.label
                      : undefined
                  }
                  className={`group relative flex items-center gap-1.5 whitespace-nowrap py-3 text-[15px] font-medium transition-colors duration-300 xl:text-[17px] ${
                    isActive
                      ? "text-[#861329]"
                      : "text-[#202020] hover:text-[#861329]"
                  }`}
                >
                  {item.label}

                  {item.submenu && (
                    <motion.span
                      animate={{
                        rotate: activeDropdown === item.label ? 180 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={16} strokeWidth={1.7} />
                    </motion.span>
                  )}

                  <span
                    className={`absolute bottom-1 left-0 h-[2px] bg-[#861329] transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>

                {/* Animated dropdown */}
                <AnimatePresence>
                  {item.submenu &&
                    activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.22 }}
                        className="absolute left-1/2 top-full w-[260px] -translate-x-1/2 border-t-2 border-[#861329] bg-white p-2 shadow-[0_16px_50px_rgba(0,0,0,0.12)]"
                      >
                        {item.submenu.map((subItem, index) => (
                          <motion.div
                            key={subItem.label}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: index * 0.045,
                            }}
                          >
                            <Link
                              href={subItem.href}
                              onClick={() => {
                                setActiveDropdown(null);
                              }}
                              className="group flex items-center justify-between px-4 py-3 text-sm text-neutral-700 transition-colors hover:bg-[#861329]/[0.05] hover:text-[#861329]"
                            >
                              {subItem.label}
                              <ArrowDownRight
                                size={16}
                                className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:opacity-100"
                              />
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop quote button */}
        <div className="hidden shrink-0 items-center border-l border-neutral-200 pl-5 lg:flex xl:pl-8">
          <Link href={navbarData.quoteButton.href}>
            <motion.span
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group relative flex h-[62px] min-w-[190px] items-center justify-between gap-5 overflow-hidden bg-[#850d25] px-6 text-[16px] font-medium text-white xl:min-w-[230px] xl:px-9 xl:text-[18px]"
            >
              <motion.span
                variants={{
                  rest: { x: 0 },
                  hover: { x: 4 },
                }}
                className="relative z-10"
              >
                {navbarData.quoteButton.label}
              </motion.span>

              <motion.span
                variants={{
                  rest: { x: 0 },
                  hover: { x: 6 },
                }}
                transition={{ duration: 0.25 }}
                className="relative z-10"
              >
                <ArrowRight size={25} strokeWidth={1.5} />
              </motion.span>

              <motion.span
                variants={{
                  rest: { x: "-101%" },
                  hover: { x: 0 },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 bg-[#62091b]"
              />
            </motion.span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-neutral-200 text-[#861329] transition-colors hover:bg-[#861329] hover:text-white lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.18 }}
            >
              {mobileOpen ? <X size={23} /> : <Menu size={23} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile navigation panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-full overflow-hidden border-t border-neutral-100 bg-white shadow-xl lg:hidden"
          >
            <div className="max-h-[calc(100dvh-90px)] overflow-y-auto px-5 pb-6 pt-3 sm:px-8">
              {navigation.map((item, index) => {
                const isActive =
                  currentPath === item.href ||
                  (item.href !== "/" &&
                    currentPath.startsWith(`${item.href}/`));

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.045 }}
                    className="border-b border-neutral-100"
                  >
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setActiveDropdown(null);
                      }}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex-1 py-4 text-base font-medium transition-colors ${
                        isActive
                          ? "text-[#861329]"
                          : "text-neutral-800 hover:text-[#861329]"
                      }`}
                    >
                      {item.label}
                    </Link>

                    {item.submenu && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={
                          activeDropdown === item.label
                        }
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.label
                              ? null
                              : item.label
                          )
                        }
                        className="flex h-10 w-10 items-center justify-center text-[#861329]"
                      >
                        <motion.span
                          animate={{
                            rotate:
                              activeDropdown === item.label ? 180 : 0,
                          }}
                        >
                          <ChevronDown size={19} />
                        </motion.span>
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {item.submenu &&
                      activeDropdown === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mb-3 ml-3 border-l-2 border-[#861329]/20 pl-4">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                onClick={() => {
                                  setMobileOpen(false);
                                  setActiveDropdown(null);
                                }}
                                className="flex items-center justify-between py-3 text-sm text-neutral-600 transition-colors hover:text-[#861329]"
                              >
                                {subItem.label}
                                <ArrowRight size={15} />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                  </motion.div>
                );
              })}

              <Link
                href={navbarData.quoteButton.href}
                onClick={() => setMobileOpen(false)}
                className="mt-5 flex items-center justify-between bg-[#850d25] px-5 py-4 text-white transition-colors hover:bg-[#62091b]"
              >
                <span className="font-medium">{navbarData.quoteButton.label}</span>
                <ArrowRight size={22} />
              </Link>

              <p className="mt-5 text-center text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                {navbarData.mobileTagline}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
