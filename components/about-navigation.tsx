"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Clock, User, Users, Building, Award, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const navigationItems = [
  {
    id: "hakkimizda",
    labelKey: "menu.hakkimizda",
    href: "/hakkimizda",
    icon: Building,
    color: "#e30613",
  },
  {
    id: "tarihcemiz",
    labelKey: "menu.tarihcemiz",
    href: "/tarihcemiz",
    icon: Clock,
    color: "#e30613",
  },
  {
    id: "kurucumuz",
    labelKey: "menu.kurucumuz",
    href: "/kurucumuz",
    icon: User,
    color: "#e30613",
  },
  {
    id: "ceo",
    labelKey: "menu.ceo",
    href: "/ceo",
    icon: User,
    color: "#e30613",
  },
  {
    id: "yonetimimiz",
    labelKey: "menu.yonetimimiz",
    href: "/yonetimimiz",
    icon: Users,
    color: "#e30613",
  },
  {
    id: "sertifikalar",
    labelKey: "menu.sertifikalar",
    href: "/sertifikalar",
    icon: Award,
    color: "#e30613",
  },
  {
    id: "bilgi-toplum",
    labelKey: "menu.bilgi.toplum.hizmeti",
    href: "/bilgi-toplum-hizmeti",
    icon: FileText,
    color: "#e30613",
  },
];

export default function AboutNavigation() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { t } = useLanguage();

  return (
    <nav className="bg-white rounded-xl shadow-md overflow-hidden sticky top-[120px]">
      {navigationItems.map((item) => {
        const isActive = pathname === item.href;
        const isHovered = hoveredItem === item.id;

        return (
          <Link
            key={item.id}
            href={item.href}
            className={`relative block ${
              isActive ? "text-white" : "text-gray-700 hover:text-gray-900"
            }`}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Background */}
            {isActive && (
              <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ backgroundColor: item.color }}
              />
            )}

            {/* Hover effect */}
            {!isActive && (
              <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0, width: 0 }}
                animate={{
                  opacity: isHovered ? 0.1 : 0,
                  width: isHovered ? "100%" : "0%",
                }}
                style={{ backgroundColor: item.color }}
              />
            )}

            {/* Content */}
            <div className="relative z-10 flex items-center p-4 border-b border-gray-100">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  isActive ? "bg-white/20" : "bg-gray-100"
                }`}
              >
                <item.icon
                  className={`h-5 w-5 ${
                    isActive ? "text-white" : "text-gray-700"
                  }`}
                />
              </div>
              <span className="font-medium">{t(item.labelKey)}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
