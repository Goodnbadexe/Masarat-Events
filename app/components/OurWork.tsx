"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import ProjectCard from "./ProjectCard"

export default function OurWork() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Our Work",
      description:
        "Explore our portfolio of successful events that showcase our commitment to excellence and creativity.",
      categories: {
        all: "All Projects",
        corporate: "Corporate Events",
        exhibitions: "Exhibitions",
        private: "Private Celebrations",
      },
    },
    ar: {
      title: "أعمالنا",
      description: "استكشف محفظة الفعاليات الناجحة التي تعرض التزامنا بالتميز والإبداع.",
      categories: {
        all: "جميع المشاريع",
        corporate: "فعاليات الشركات",
        exhibitions: "المعارض",
        private: "الاحتفالات الخاصة",
      },
    },
  }

  const projects = [
    {
      title: {
        en: "Ministry of Environment, Water and Agriculture",
        ar: "وزارة البيئة والمياه والزراعة",
      },
      images: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P%20(3)-min.jpg-PMXX8GBvYm1F38IaofGNG6mmD0Aeol.jpeg",
          alt: {
            en: "Overview of modern waiting area with interactive displays",
            ar: "نظرة عامة على منطقة انتظار حديثة مع شاشات تفاعلية",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P%20(4)-min.jpg-G34ss4ZAcpKqpiAwqO8JXJPGpzqnaB.jpeg",
          alt: {
            en: "Central information kiosk with digital displays",
            ar: "كشك معلومات مركزي مع شاشات رقمية",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P%20(1)-min.jpg-drgSEdDnXMl1m3DoTRlKIe9ChlI5um.jpeg",
          alt: {
            en: "Seating area with entertainment options",
            ar: "منطقة جلوس مع خيارات ترفيهية",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P%20(2)-min.jpg-F0KAmSI6l0El5Z7jJVeKOp6Ag57K0P.jpeg",
          alt: {
            en: "Elegant lounge area with traditional elements",
            ar: "منطقة استراحة أنيقة مع عناصر تقليدية",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P%20(10)-min.jpg-7hw3nEmsuHAVarZhUZ9WMDwYZb9vxU.jpeg",
          alt: {
            en: "Gaming and entertainment zone",
            ar: "منطقة الألعاب والترفيه",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P%20(6)-min.jpg-MjnG2iFzhBCHQPR3N8H28RoeM8Bos2.jpeg",
          alt: {
            en: "Premium seating arrangement with digital displays",
            ar: "ترتيب مقاعد فاخرة مع شاشات رقمية",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P%20(7)-min.jpg-u561CeSBxMwVpeZ7HOUnUobM92qxYD.jpeg",
          alt: {
            en: "Cultural display area with traditional instruments",
            ar: "منطقة عرض ثقافي مع آلات تقليدية",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P%20(8)-min.jpg-RFo8mgasXFeKl9AwNY3LYWLOScPMPs.jpeg",
          alt: {
            en: "Modern seating pod with ambient lighting",
            ar: "كبسولة جلوس حديثة مع إضاءة محيطة",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P%20(9)-min.jpg-xMnj9fQzaRrzhdBCR4wW0yhbEmhijJ.jpeg",
          alt: {
            en: "Interactive gaming area with comfortable seating",
            ar: "منطقة ألعاب تفاعلية مع مقاعد مريحة",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P%20(5)-min.jpg-7MUcSRvPHAuMQAXHtgUnjsp6dBXVWx.jpeg",
          alt: {
            en: "Café-style seating with traditional decor",
            ar: "جلسات على طراز المقهى مع ديكور تقليدي",
          },
        },
      ],
      category: "corporate",
    },
    {
      title: {
        en: "Laverne",
        ar: "لافيرن",
      },
      images: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%AA%D8%B5%D9%85%D9%8A%D9%85%20-.jpg-DWtjxNXQ1cMebu6o5Nre1777RNkcuj.jpeg",
          alt: {
            en: "3D design of Laverne exhibition booth with luxury seating and piano",
            ar: "تصميم ثلاثي الأبعاد لجناح معرض لافيرن مع مقاعد فاخرة وبيانو",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%AA%D8%B5%D9%85%D9%8A%D9%85.jpg-YPbaP0fYhnWWlDMUj5yQODQV2GdL1t.jpeg",
          alt: {
            en: "Front view of Laverne booth design",
            ar: "منظر أمامي لتصميم جناح لافيرن",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15dedda9-5205-4b32-9df9-03bb463cb421.jpg-OLOXIRhsownFLs3luBQGq5SWaVoRjb.jpeg",
          alt: {
            en: "Implemented Laverne booth with reception area",
            ar: "جناح لافيرن المنفذ مع منطقة الاستقبال",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27928efa-df69-4911-ad50-4af329a687ce.jpg-3STB7orONIRQgOCLI16Sm1tlwLkCKr.jpeg",
          alt: {
            en: "Side view of implemented Laverne exhibition booth",
            ar: "منظر جانبي لجناح معرض لافيرن المنفذ",
          },
        },
      ],
      category: "exhibitions",
    },
    {
      title: {
        en: "Al-Mukmal Furniture",
        ar: "مفروشات المخمل",
      },
      images: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2D_Drawings_-_V1.jpg-c0PjgWx8p3diuGl3NVqy33X6oukPNn.jpeg",
          alt: {
            en: "Elegant white exhibition booth design with classic furniture",
            ar: "تصميم جناح معرض أنيق باللون الأبيض مع أثاث كلاسيكي",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2D_Drawings_-_V3.jpg-P3k9C2lLAT0tLSecA9fnG4qHpxt578.jpeg",
          alt: {
            en: "3D visualization of luxury furniture display",
            ar: "تصور ثلاثي الأبعاد لعرض الأثاث الفاخر",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Kxrc8SdFEFJpLsrsBzCYokXB701CpK.jpeg",
          alt: {
            en: "Front view of implemented Al-Mukmal booth",
            ar: "منظر أمامي لجناح المخمل المنفذ",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-grh0M7JlemUojIi9OvNd7JHsTk96ig.jpeg",
          alt: {
            en: "Digital display and dining area setup",
            ar: "إعداد العرض الرقمي ومنطقة تناول الطعام",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-ZkMkUld5R9H2jkrlHfYFWorcxdU8SJ.jpeg",
          alt: {
            en: "Luxurious living room setup with blue damask furniture",
            ar: "إعداد غرفة معيشة فاخرة مع أثاث دمشقي أزرق",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2D_Drawings_-_V2.jpg-9CvAosiPLtfWki1xd24hGmFQqgh8uG.jpeg",
          alt: {
            en: "3D render of complete booth layout",
            ar: "عرض ثلاثي الأبعاد للتخطيط الكامل للجناح",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-xUIgUwYnh1ogOndUudd4ybVLdLZqIr.jpeg",
          alt: {
            en: "Implemented booth with ornate lighting and furniture display",
            ar: "جناح منفذ مع إضاءة مزخرفة وعرض للأثاث",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-OZWmeyiWDaU573zDwSkjQTMnQBhMbn.jpeg",
          alt: {
            en: "Evening view of the exhibition booth",
            ar: "منظر مسائي لجناح المعرض",
          },
        },
      ],
      category: "exhibitions",
    },
    {
      title: {
        en: "Masdar",
        ar: "مصدر",
      },
      images: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_22%20-%20Photo-min.jpg-Qn9AhMa1neCuetvM2tUzI2TcBJvxPS.jpeg",
          alt: {
            en: "Modern two-story exhibition booth with terrace and branded displays",
            ar: "جناح معرض حديث من طابقين مع شرفة وشاشات عرض تحمل العلامة التجارية",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_19%20-%20Photo-min.jpg-Cpz5hhb61YGFlZxQJsU8j5grgVdwdA.jpeg",
          alt: {
            en: "Interior view of Masdar booth with display units",
            ar: "منظر داخلي لجناح مصدر مع وحدات العرض",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_20%20-%20Photo-min.jpg-y3xZ3GWzGAkXTMlFp7blUfm6XJAPuq.jpeg",
          alt: {
            en: "Side angle view showing architectural details",
            ar: "منظر جانبي يظهر التفاصيل المعمارية",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_18%20-%20Photo-min.jpg-lkYWm9w9bDt1pm2KYKYQiG0bUJo1iK.jpeg",
          alt: {
            en: "Front entrance with branded elements and display units",
            ar: "المدخل الأمامي مع عناصر العلامة التجارية ووحدات العرض",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_16%20-%20Photo-min.jpg-1rJSeQwT1PVC1D7dcUHhx0AzIM1o6u.jpeg",
          alt: {
            en: "Central area with main reception desk and displays",
            ar: "المنطقة المركزية مع مكتب الاستقبال الرئيسي والعروض",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_Large%20-%20Raster-min.jpg-vVGPKPfOlzkq4wglXh13VuFg7Z363z.jpeg",
          alt: {
            en: "Exterior view showing modern architectural design",
            ar: "منظر خارجي يظهر التصميم المعماري الحديث",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_13%20-%20Photo-min.jpg-6t610xFiQty4AawJBDi36BUJMu6mUX.jpeg",
          alt: {
            en: "Angular perspective of booth structure",
            ar: "منظور زاوي لهيكل الجناح",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_Large%20-%20Raytraced-min.jpg-d4LkQ4AWMKdwmdat7R55wSXa4BdSpL.jpeg",
          alt: {
            en: "Upper level terrace with lounge seating",
            ar: "شرفة الطابق العلوي مع مقاعد للاستراحة",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_15%20-%20Photo-min.jpg-S4hrGl1Q1jfrShiXjkr4gGkELVDHsZ.jpeg",
          alt: {
            en: "Terrace overview with palm trees and seating areas",
            ar: "نظرة عامة على الشرفة مع أشجار النخيل ومناطق الجلوس",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_11%20-%20Photo-min.jpg-6xEA9w6JzbP4qIKSjG23Vh2byrSmeX.jpeg",
          alt: {
            en: "Perspective view of complete booth structure",
            ar: "منظر شامل لهيكل الجناح الكامل",
          },
        },
      ],
      category: "exhibitions",
    },
  ]

  return (
    <div className="min-h-screen py-20 pt-32" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{content[language].title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content[language].description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title[language]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title[language]}
                images={project.images.map((img) => ({ ...img, alt: img.alt[language] }))}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

