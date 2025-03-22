"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"

export default function AboutPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "About Masarat Events",
      story: {
        title: "Our Story",
        p1: "Masarat Events was born from a passion for creating extraordinary experiences. Since our inception, we've been dedicated to transforming visions into reality, one event at a time.",
        p2: "Our journey has been marked by innovation, creativity, and an unwavering commitment to excellence. We've grown from a small team of dreamers to a full-service event management powerhouse, always staying true to our core values.",
      },
      mission: {
        title: "Our Mission",
        text: "To create immersive, unforgettable experiences that inspire, connect, and leave lasting impressions. We strive to push the boundaries of event management, blending creativity with precision to deliver excellence in every detail.",
      },
      values: [
        {
          title: "Innovation",
          description: "Constantly pushing the envelope with cutting-edge ideas and technologies.",
        },
        {
          title: "Precision",
          description: "Meticulous attention to detail in every aspect of event planning and execution.",
        },
        { title: "Passion", description: "A genuine love for what we do, reflected in every event we create." },
      ],
      team: {
        title: "Our Team",
        description:
          "Behind every successful event is our dedicated team of professionals. With diverse backgrounds and expertise, we come together to bring your visions to life.",
        members: [
          { name: "Ayham Othman", role: "Co-Founder" },
          { name: "Muatasem Farhat", role: "Chief Executive Officer" },
          { name: "Mouaz Farhat", role: "Chief Operating Officer" },
          { name: "Hamzah Al-Ramli", role: "Chief Technology Officer" },
          { name: "Ahmed Bassuoni", role: "Account Manager" },
          { name: "Rahaf M. Salah", role: "Architectural Engineer\nEvent Manager" },
          { name: "Rahba M. Khalil", role: "Exhibition Project Manager" },
          { name: "Abdullah Jelo", role: "Commercial Department" },
          { name: "Abdal-Salam Akkad", role: "Architectural Designer" },
          { name: "Nada", role: "Architectural Designer" },
        ],
      },
    },
    ar: {
      title: "عن مسارات إيفنتس",
      story: {
        title: "قصتنا",
        p1: "ولدت مسارات إيفنتس من شغف لخلق تجارب استثنائية. منذ بدايتنا، كرسنا أنفسنا لتحويل الرؤى إلى واقع، فعالية تلو الأخرى.",
        p2: "تميزت رحلتنا بالابتكار والإبداع والالتزام الثابت بالتميز. لقد نمونا من فريق صغير من الحالمين إلى قوة متكاملة في إدارة الفعاليات، مع البقاء دائمًا أوفياء لقيمنا الأساسية.",
      },
      mission: {
        title: "مهمتنا",
        text: "خلق تجارب غامرة لا تُنسى تلهم وتربط وتترك انطباعات دائمة. نسعى جاهدين لدفع حدود إدارة الفعاليات، مزج الإبداع مع الدقة لتقديم التميز في كل التفاصيل.",
      },
      values: [
        { title: "الابتكار", description: "دفع الحدود باستمرار مع أفكار وتقنيات متطورة." },
        { title: "الدقة", description: "اهتمام دقيق بالتفاصيل في كل جانب من جوانب تخطيط وتنفيذ الفعاليات." },
        { title: "الشغف", description: "حب حقيقي لما نقوم به، ينعكس في كل فعالية نقوم بإنشائها." },
      ],
      team: {
        title: "فريقنا",
        description:
          "وراء كل فعالية ناجحة يقف فريقنا المتفاني من المحترفين. بخلفيات وخبرات متنوعة، نجتمع معًا لنحول رؤاكم إلى واقع.",
        members: [
          { name: "أيهم عثمان", role: "المؤسس المشارك" },
          { name: "معتصم فرحات", role: "الرئيس التنفيذي" },
          { name: "معاذ فرحات", role: "رئيس العمليات" },
          { name: "حمزة الرملي", role: "مدير التكنولوجيا" },
          { name: "أحمد بسيوني", role: "مدير الحسابات" },
          { name: "رهف م. صلاح", role: "مهندسة معمارية\nمديرة فعاليات" },
          { name: "رحبة م. خليل", role: "مديرة مشاريع المعارض" },
          { name: "عبدالله جلو", role: "القسم التجاري" },
          { name: "عبد السلام عقاد", role: "مصمم معماري" },
          { name: "ندى", role: "مصممة معمارية" },
        ],
      },
    },
  }

  const getTeamMemberImage = (name: string) => {
    if (name === "Muatasem Farhat" || name === "معتصم فرحات") {
      return "/placeholder.svg" // Placeholder until image is provided
    } else if (name === "Ahmed Bassuoni" || name === "أحمد بسيوني") {
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z0R3VI1io8OtObfa6Uilb4a0qNCvKw.png"
    } else if (name === "Rahaf M. Salah" || name === "رهف م. صلاح") {
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BWEp6rTZjnnICJUhCY0AONLY540Gc0.png"
    } else if (name === "Ayham Othman" || name === "أيهم عثمان") {
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rYzx4RplNkh1d0h8bECgy09b9Vpa12.png"
    } else if (name === "Hamzah Al-Ramli" || name === "حمزة الرملي") {
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AXgKmn1imhtKMUbVAlyPhq7IdbPnrd.png"
    } else if (name === "Abdal-Salam Akkad" || name === "عبد السلام عقاد") {
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7MyrzfZrRehHtWRtlLo53LqyGl8xoa.png"
    } else if (name === "Nada" || name === "ندى") {
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AHR2tF6bKkpx1MF3lTJLLRQy1lCl9J.png"
    } else if (name === "Mouaz Farhat" || name === "معاذ فرحات") {
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1ZyBTjiqfnz1UVaWI5cTgQgzs3xw9C.png"
    } else if (name === "Abdullah Jelo" || name === "عبدالله جلو") {
      return "/placeholder.svg" // Placeholder until image is provided
    }
    return "/placeholder.svg"
  }

  return (
    <div className="min-h-screen py-20 pt-32" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          {content[language].title}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-semibold mb-6">{content[language].story.title}</h2>
            <p className="text-lg mb-4">{content[language].story.p1}</p>
            <p className="text-lg">{content[language].story.p2}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/M_E%20Logo%20-%20Outer%20Space@300x-8T7DqJCLyY7WZXsPEnJfV02aMOLEAX.png"
              alt="Masarat Events Logo"
              width={600}
              height={400}
              className="w-full h-auto object-contain mx-auto"
              priority
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-semibold mb-6">{content[language].mission.title}</h2>
          <p className="text-xl max-w-3xl mx-auto">{content[language].mission.text}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {content[language].values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#474747] text-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-6">{content[language].team.title}</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">{content[language].team.description}</p>
          <div className="flex flex-col items-center gap-8">
            {/* First row - 5 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-[1400px]">
              {content[language].team.members.slice(0, 5).map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <Image
                    src={getTeamMemberImage(member.name) || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 object-cover"
                    priority
                  />
                  <h3 className="text-lg font-semibold text-center">{member.name}</h3>
                  <p className="text-[#8b793c] whitespace-pre-line text-center">{member.role}</p>
                </motion.div>
              ))}
            </div>

            {/* Second row - 3 members centered */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[900px]">
              {content[language].team.members.slice(5, 8).map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + 5) * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <Image
                    src={getTeamMemberImage(member.name) || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 object-cover"
                    priority
                  />
                  <h3 className="text-lg font-semibold text-center">{member.name}</h3>
                  <p className="text-[#8b793c] whitespace-pre-line text-center">{member.role}</p>
                </motion.div>
              ))}
            </div>

            {/* Third row - 2 members centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[600px]">
              {content[language].team.members.slice(8).map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (index + 8) * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <Image
                    src={getTeamMemberImage(member.name) || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 object-cover"
                    priority
                  />
                  <h3 className="text-lg font-semibold text-center">{member.name}</h3>
                  <p className="text-[#8b793c] whitespace-pre-line text-center">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

