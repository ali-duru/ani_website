"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Search,
  Users,
  X,
  Youtube,
  ChevronDown,
  Menu,
  FileText,
  History,
  Award,
  FileCode,
  Newspaper,
  Mail,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import LanguageSwitcher from "@/components/language-switcher";

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>("hakkinda"); // Default to showing the first menu
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<string | null>(
    null
  );

  // Add these new states
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Update the mainMenuItems array to include "Ürünler"
  const mainMenuItems = [
    { id: "hakkinda", label: t("menu.hakkimizda"), href: "/hakkimizda" },
    { id: "urunler", label: "ÜRÜNLER", href: "#" },
    { id: "kurumsal", label: t("menu.kurumsal"), href: "#" },
    { id: "basin", label: t("menu.basin.merkezi"), href: "#" },
    { id: "iletisim", label: t("menu.iletisim"), href: "#" },
  ];

  // Update the subMenus object to remove the markalar, toplum, and tv sections
  // and update the kurumsal section with the new items
  const subMenus = {
    hakkinda: [
      {
        id: "hakkimizda",
        label: t("menu.hakkimizda"),
        href: "/hakkimizda",
        icon: () => <span className="text-2xl font-bold">A</span>,
      },
      {
        id: "tarihcemiz",
        label: t("menu.tarihcemiz"),
        href: "/tarihcemiz",
        icon: () => <Clock className="h-6 w-6" />,
      },
      {
        id: "ceo",
        label: t("menu.ceo"),
        href: "/ceo",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        ),
      },
      {
        id: "yonetimimiz",
        label: t("menu.yonetimimiz"),
        href: "/yonetimimiz",
        icon: () => <Users className="h-6 w-6" />,
      },
    ],
    urunler: [
      {
        id: "biskuvi",
        label: "BİSKÜVİLER",
        href: "/biskuviler",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="4"></circle>
          </svg>
        ),
      },
      {
        id: "cikolata",
        label: "ÇİKOLATALAR",
        href: "/cikolatalar",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
            <path d="M12 3v18"></path>
            <path d="M3 12h18"></path>
          </svg>
        ),
      },
      {
        id: "kek",
        label: "KEKLER",
        href: "/kekler",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M8 3v3a2 2 0 0 1-2 2H3"></path>
            <path d="M21 8h-3a2 2 0 0 1-2-2V3"></path>
            <path d="M3 16h3a2 2 0 0 1 2 2v3"></path>
            <path d="M16 21v-3a2 2 0 0 1 2-2h3"></path>
          </svg>
        ),
      },
      {
        id: "gofret",
        label: "GOFRETLER",
        href: "/gofretler",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <line x1="3" x2="21" y1="9" y2="9"></line>
            <line x1="3" x2="21" y1="15" y2="15"></line>
            <line x1="9" x2="9" y1="3" y2="21"></line>
            <line x1="15" x2="15" y1="3" y2="21"></line>
          </svg>
        ),
      },
      {
        id: "kraker",
        label: "KRAKERLER",
        href: "/krakerler",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
            <path d="M8.5 8.5v.01"></path>
            <path d="M16 15.5v.01"></path>
            <path d="M12 12v.01"></path>
            <path d="M11 17v.01"></path>
            <path d="M7 14v.01"></path>
          </svg>
        ),
      },
      {
        id: "sekerleme",
        label: "ŞEKERLEMELER",
        href: "/sekerlemeler",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M12 13V7"></path>
            <path d="M9 10H3"></path>
            <path d="M9 16H3"></path>
            <path d="M21 10h-6"></path>
            <path d="M21 16h-6"></path>
            <path d="M12 19v-6"></path>
          </svg>
        ),
      },
    ],
    kurumsal: [
      {
        id: "tarihcemiz",
        label: t("menu.tarihcemiz"),
        href: "/tarihcemiz",
        icon: () => <History className="h-6 w-6" />,
      },
      {
        id: "ihracat",
        label: "İHRACAT",
        href: "#",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M4 11a9 9 0 0 1 9 9"></path>
            <path d="M4 4a16 16 0 0 1 16 16"></path>
            <circle cx="5" cy="19" r="2"></circle>
          </svg>
        ),
      },
      {
        id: "sosyal-sorumluluk",
        label: "SOSYAL SORUMLULUK",
        href: "#",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" x2="12" y1="19" y2="22"></line>
          </svg>
        ),
      },
      {
        id: "sertifikalar",
        label: t("menu.sertifikalar"),
        href: "/sertifikalar",
        icon: () => <Award className="h-6 w-6" />,
      },
      {
        id: "kilometre-taslari",
        label: "KİLOMETRE TAŞLARIMIZ",
        href: "#",
        icon: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M12 2v20"></path>
            <path d="m6 12 6-6 6 6"></path>
          </svg>
        ),
      },
      {
        id: "bilgi-toplum-hizmeti",
        label: t("menu.bilgi.toplum.hizmeti"),
        href: "/bilgi-toplum-hizmeti",
        icon: () => <FileCode className="h-6 w-6" />,
      },
    ],
    basin: [
      {
        id: "basin-bultenleri",
        label: "BASIN BÜLTENLERİ",
        href: "/basin-bultenleri",
        icon: () => <Newspaper className="h-6 w-6" />,
      },
      {
        id: "medya-kit",
        label: "MEDYA KİT",
        href: "/medya-kit",
        icon: () => <FileText className="h-6 w-6" />,
      },
    ],
    iletisim: [
      {
        id: "iletisim-formu",
        label: "İLETİŞİM FORMU",
        href: "/iletisim",
        icon: () => <Mail className="h-6 w-6" />,
      },
      {
        id: "adres",
        label: "ADRES BİLGİLERİ",
        href: "/iletisim#adres",
        icon: () => <MapPin className="h-6 w-6" />,
      },
    ],
  };

  const handleMenuHover = (menuId: string) => {
    setActiveMenu(menuId);
  };

  // Add these functions for handling hover
  const handleMenuMouseEnter = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    setIsHovering(true);
    setIsOpen(true);
  };

  const handleMenuMouseLeave = () => {
    hoverTimerRef.current = setTimeout(() => {
      setIsHovering(false);
      setIsOpen(false);
    }, 300); // Slight delay to prevent menu from closing too quickly
  };

  return (
    <>
      {/* Closed Menu State */}
      {!isOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#e30613] h-[100px]">
          <div className="container mx-auto h-full flex items-center justify-between px-4 md:px-6">
            {/* Logo */}
            <div className="z-10">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="ANI Logo"
                  width={120}
                  height={40}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Right side with icons and menu button */}
            <div className="flex items-center h-full">
              <div className="hidden md:flex items-center gap-4 mr-6">
                <Link href="#" className="text-white hover:opacity-80">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="text-white hover:opacity-80">
                  <X size={18} />
                </Link>
                <Link href="#" className="text-white hover:opacity-80">
                  <Instagram size={18} />
                </Link>
                <Link href="#" className="text-white hover:opacity-80">
                  <Youtube size={18} />
                </Link>
                <Link href="#" className="text-white hover:opacity-80">
                  <Linkedin size={18} />
                </Link>
                <LanguageSwitcher />
                <Link href="#" className="text-white hover:opacity-80">
                  <Search size={20} />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden flex items-center justify-center text-white p-2"
                aria-label="Mobil Menü"
              >
                <Menu size={24} />
              </button>

              {/* Desktop Menu Button - Replace the existing button with this */}
              <div
                onMouseEnter={handleMenuMouseEnter}
                className="hidden md:flex items-center gap-2 text-white font-bold cursor-pointer"
              >
                {t("button.menu")}
                <motion.div
                  className="flex flex-col gap-1.5"
                  animate={{
                    y: isHovering ? [0, -3, 0, 3, 0] : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <span className="w-6 h-0.5 bg-white"></span>
                  <span className="w-6 h-0.5 bg-white"></span>
                  <span className="w-6 h-0.5 bg-white"></span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Open Menu State */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50"
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}
            onClick={(e) => {
              // Sadece doğrudan motion.div'e tıklandığında kapat
              if (e.target === e.currentTarget) {
                setIsOpen(false);
              }
            }}
          >
            <div className="relative w-full h-full bg-[#e30613] overflow-auto">
              <motion.div
                className="absolute inset-0 z-0"
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{
                  backgroundPosition: [
                    "0% 0%",
                    "100% 100%",
                    "0% 100%",
                    "100% 0%",
                    "0% 0%",
                  ],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
                  backgroundSize: "150% 150%",
                }}
              />
              <div className="container mx-auto relative z-10">
                {/* Top Bar */}
                <div className="flex justify-between items-center py-8">
                  {/* Logo */}
                  <Link href="/">
                    <Image
                      src="/logo.svg"
                      alt="ANI Logo"
                      width={180}
                      height={60}
                      className="h-12 w-auto"
                    />
                  </Link>

                  {/* Close Button */}
                  <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white font-bold flex items-center gap-2"
                    >
                      {t("button.close")}
                      <X size={24} />
                    </button>
                  </div>
                </div>

                {/* Main Navigation */}
                <div className="flex flex-wrap justify-center md:justify-between border-b border-white/20 pb-4 mb-8">
                  {mainMenuItems.map((item) => (
                    <motion.button
                      key={item.id}
                      className={`text-white text-lg font-bold px-4 py-2 relative ${
                        activeMenu === item.id
                          ? "after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-full after:h-1 after:bg-white"
                          : ""
                      }`}
                      onClick={() => handleMenuHover(item.id)}
                      whileHover={{
                        scale: 1.05,
                        transition: {
                          duration: 0.3,
                          type: "spring",
                          stiffness: 300,
                        },
                      }}
                      animate={{
                        y: activeMenu === item.id ? [0, -2, 0, 2, 0] : 0,
                      }}
                      transition={{
                        duration: 2,
                        repeat:
                          activeMenu === item.id ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "reverse",
                      }}
                    >
                      {item.label}
                      {activeMenu === item.id && (
                        <motion.span
                          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-white"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Submenu Content */}
                <div className="pb-20">
                  {activeMenu === "hakkinda" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="text-white">
                        <h2 className="text-2xl font-bold mb-4">
                          {t("menu.hakkimizda")}
                        </h2>
                        <p className="mb-6 text-lg">
                          Kurulduğumuz günden bu yana her lokmada mutlu etmek
                          için çalışıyoruz. Hakkımızda öğrenmek istedikleriniz
                          burada.
                        </p>
                        <Link
                          href="/hakkimizda"
                          className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                        >
                          {t("button.more")}
                          <span className="ml-2">→</span>
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {subMenus.hakkinda.map((item) => (
                          <Link
                            key={item.id}
                            href={item.href}
                            className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/30 transition-colors flex items-center gap-4"
                          >
                            <div className="bg-white/20 rounded-full p-3">
                              {item.icon()}
                            </div>
                            <span className="font-bold text-lg">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeMenu === "urunler" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="text-white">
                        <h2 className="text-2xl font-bold mb-4">ÜRÜNLERİMİZ</h2>
                        <p className="mb-6 text-lg">
                          En sevilen ürünlerimiz ile sofralarınızı tatlandırın.
                        </p>
                        <Link
                          href="#"
                          className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                        >
                          {t("button.all")}
                          <span className="ml-2">→</span>
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {subMenus.urunler.map((item) => (
                          <Link
                            key={item.id}
                            href={item.href}
                            className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/30 transition-colors flex items-center gap-4"
                          >
                            <div className="bg-white/20 rounded-full p-3">
                              {item.icon()}
                            </div>
                            <span className="font-bold text-lg">
                              {item.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeMenu &&
                    activeMenu !== "hakkinda" &&
                    activeMenu !== "urunler" &&
                    subMenus[activeMenu as keyof typeof subMenus] && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-white">
                          <h2 className="text-2xl font-bold mb-4">
                            {activeMenu === "kurumsal"
                              ? t("menu.kurumsal")
                              : activeMenu === "basin"
                              ? t("menu.basin.merkezi")
                              : activeMenu === "iletisim"
                              ? t("menu.iletisim")
                              : ""}
                          </h2>
                          <p className="mb-6 text-lg">
                            ANI Bisküvi Gıda San. ve Tic. A.Ş.{" "}
                            {activeMenu === "kurumsal"
                              ? "kurumsal değerlerimiz ve vizyonumuz ile geleceğe yön veriyoruz."
                              : activeMenu === "basin"
                              ? "basın merkezimizden en güncel haberlere ulaşabilirsiniz."
                              : activeMenu === "iletisim"
                              ? "ile iletişime geçmek için aşağıdaki kanalları kullanabilirsiniz."
                              : ""}
                          </p>
                          <Link
                            href="#"
                            className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                          >
                            {t("button.all")}
                            <span className="ml-2">→</span>
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {subMenus[activeMenu as keyof typeof subMenus].map(
                            (item, index) => (
                              <Link
                                key={item.id}
                                href={item.href}
                                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/30 transition-colors flex items-center gap-4"
                              >
                                <div className="bg-white/20 rounded-full p-3">
                                  {item.icon ? (
                                    item.icon()
                                  ) : (
                                    <span className="font-bold text-xl">
                                      {index + 1}
                                    </span>
                                  )}
                                </div>
                                <span className="font-bold text-lg">
                                  {item.label}
                                </span>
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  <div className="mt-16">
                    <p className="text-white font-bold mb-4 text-lg">
                      BİZİ TAKİP EDİN
                    </p>
                    <div className="flex gap-6">
                      <Link
                        href="#"
                        className="text-white hover:opacity-80 bg-white/10 p-3 rounded-full"
                      >
                        <Facebook size={24} />
                      </Link>
                      <Link
                        href="#"
                        className="text-white hover:opacity-80 bg-white/10 p-3 rounded-full"
                      >
                        <X size={24} />
                      </Link>
                      <Link
                        href="#"
                        className="text-white hover:opacity-80 bg-white/10 p-3 rounded-full"
                      >
                        <Instagram size={24} />
                      </Link>
                      <Link
                        href="#"
                        className="text-white hover:opacity-80 bg-white/10 p-3 rounded-full"
                      >
                        <Youtube size={24} />
                      </Link>
                      <Link
                        href="#"
                        className="text-white hover:opacity-80 bg-white/10 p-3 rounded-full"
                      >
                        <Linkedin size={24} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 bg-white"
            onClick={(e) => {
              // Sadece doğrudan motion.div'e tıklandığında kapat
              if (e.target === e.currentTarget) {
                setMobileMenuOpen(false);
              }
            }}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center p-4 bg-[#e30613]">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/logo.svg"
                    alt="ANI Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white p-2"
                  aria-label="Menüyü Kapat"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex-1 overflow-auto p-4">
                <div className="space-y-4">
                  {mainMenuItems.map((item) => (
                    <div
                      key={item.id}
                      className="border-b border-gray-200 pb-4"
                    >
                      <button
                        className="flex justify-between items-center w-full text-left font-bold text-lg text-gray-900"
                        onClick={() =>
                          setMobileActiveSubmenu(
                            mobileActiveSubmenu === item.id ? null : item.id
                          )
                        }
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${
                            mobileActiveSubmenu === item.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobileActiveSubmenu === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pl-4 space-y-3"
                        >
                          {subMenus[item.id as keyof typeof subMenus]?.map(
                            (subItem) => (
                              <Link
                                key={subItem.id}
                                href={subItem.href}
                                className="block py-2 text-gray-700 hover:text-[#e30613] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            )
                          )}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Language Switcher */}
                <div className="mt-6 flex justify-center">
                  <LanguageSwitcher />
                </div>

                {/* Mobile Social Media */}
                <div className="mt-8">
                  <p className="text-center font-bold text-gray-900 mb-4">
                    BİZİ TAKİP EDİN
                  </p>
                  <div className="flex justify-center gap-4">
                    <Link
                      href="#"
                      className="text-[#e30613] hover:opacity-80 p-2"
                    >
                      <Facebook size={24} />
                    </Link>
                    <Link
                      href="#"
                      className="text-[#e30613] hover:opacity-80 p-2"
                    >
                      <X size={24} />
                    </Link>
                    <Link
                      href="#"
                      className="text-[#e30613] hover:opacity-80 p-2"
                    >
                      <Instagram size={24} />
                    </Link>
                    <Link
                      href="#"
                      className="text-[#e30613] hover:opacity-80 p-2"
                    >
                      <Youtube size={24} />
                    </Link>
                    <Link
                      href="#"
                      className="text-[#e30613] hover:opacity-80 p-2"
                    >
                      <Linkedin size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
