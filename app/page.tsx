import VideoHero from "./components/VideoHero"
import Services from "./components/Services"
import ProjectCard from "./components/ProjectCard"
import Link from "next/link"
import { useLanguage } from "./contexts/LanguageContext"

export default function Home() {
  const { language } = useLanguage()

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
      ],
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
      ],
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
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-ZkMkUld5R9H2jkrlHfYFWorcxdU8SJ.jpeg",
          alt: {
            en: "Luxurious living room setup with blue damask furniture",
            ar: "إعداد غرفة معيشة فاخرة مع أثاث دمشقي أزرق",
          },
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-xUIgUwYnh1ogOndUudd4ybVLdLZqIr.jpeg",
          alt: {
            en: "Implemented booth with ornate lighting and furniture display",
            ar: "جناح منفذ مع إضاءة مزخرفة وعرض للأثاث",
          },
        },
      ],
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
      ],
    },
  ]

  const content = {
    en: {
      projectsTitle: "Our Projects",
      exploreMore: "Explore More",
      aboutUs: "About Us",
      ourServices: "Our Services",
      contactUs: "Contact Us",
    },
    ar: {
      projectsTitle: "مشاريعنا",
      exploreMore: "اكتشف المزيد",
      aboutUs: "من نحن",
      ourServices: "خدماتنا",
      contactUs: "اتصل بنا",
    },
  }

  return (
    <div>
      <VideoHero />
      <Services />
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{content[language].projectsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title[language]}
                images={project.images.map((img) => ({ ...img, alt: img.alt[language] }))}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{content[language].exploreMore}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="bg-[#8b793c] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300"
            >
              {content[language].aboutUs}
            </Link>
            <Link
              href="/services"
              className="bg-[#8b793c] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300"
            >
              {content[language].ourServices}
            </Link>
            <Link
              href="/contact"
              className="bg-[#8b793c] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300"
            >
              {content[language].contactUs}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

