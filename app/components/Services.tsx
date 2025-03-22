'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Briefcase, PenTool, GlassWater } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function ServicesPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Our Services',
      description: 'At Masarat Events, we offer a comprehensive range of event management services tailored to meet your unique needs. From concept to execution, we ensure every detail is perfect.',
      services: [
        {
          title: 'Corporate Events',
          description: 'Elevate your brand with our expertly crafted corporate events.',
          icon: Briefcase,
          features: [
            'Conferences and Seminars',
            'Product Launches',
            'Team Building Workshops',
            'Gala Dinners',
            'Award Ceremonies',
          ],
        },
        {
          title: 'Exhibitions',
          description: 'Make a lasting impression with our innovative exhibition solutions.',
          icon: PenTool,
          features: [
            'Custom Booth Design',
            'Interactive Displays',
            'Lead Generation Systems',
            'On-site Management',
            'Post-event Analytics',
          ],
        },
        {
          title: 'Private Celebrations',
          description: 'Create unforgettable moments with our bespoke private event services.',
          icon: GlassWater,
          features: [
            'Weddings',
            'Birthday Parties',
            'Anniversary Celebrations',
            'Graduation Parties',
            'Family Reunions',
          ],
        },
      ],
      approach: {
        title: 'Our Approach',
        description: 'We believe in a collaborative approach to event management. Our process ensures that your vision is brought to life with precision and creativity.',
        steps: [
          { step: 1, title: 'Consultation', description: 'We listen to your ideas and goals' },
          { step: 2, title: 'Planning', description: 'Detailed event strategy and timeline' },
          { step: 3, title: 'Execution', description: 'Flawless implementation of the plan' },
          { step: 4, title: 'Follow-up', description: 'Post-event analysis and feedback' },
        ],
      },
      cta: {
        title: 'Ready to Elevate Your Event?',
        description: "Let's create something extraordinary together.",
        button: 'Get in Touch',
      },
    },
    ar: {
      title: 'خدماتنا',
      description: 'في مسارات للفعاليات، نقدم مجموعة شاملة من خدمات إدارة الفعاليات المصممة خصيصًا لتلبية احتياجاتك الفريدة. من الفكرة إلى التنفيذ، نضمن أن كل تفصيل مثالي.',
      services: [
        {
          title: 'فعاليات الشركات',
          description: 'ارتقِ بعلامتك التجارية مع فعاليات الشركات المصممة باحترافية.',
          icon: Briefcase,
          features: [
            'المؤتمرات والندوات',
            'إطلاق المنتجات',
            'ورش عمل بناء الفريق',
            'حفلات العشاء الراقية',
            'حفلات توزيع الجوائز',
          ],
        },
        {
          title: 'المعارض',
          description: 'اترك انطباعًا دائمًا مع حلولنا المبتكرة للمعارض.',
          icon: PenTool,
          features: [
            'تصميم أجنحة مخصصة',
            'عروض تفاعلية',
            'أنظمة توليد العملاء المحتملين',
            'إدارة الموقع',
            'تحليلات ما بعد الحدث',
          ],
        },
        {
          title: 'الاحتفالات الخاصة',
          description: 'أنشئ لحظات لا تُنسى مع خدمات الفعاليات الخاصة المصممة حسب الطلب.',
          icon: GlassWater,
          features: [
            'حفلات الزفاف',
            'حفلات أعياد الميلاد',
            'احتفالات الذكرى السنوية',
            'حفلات التخرج',
            'لم شمل العائلة',
          ],
        },
      ],
      approach: {
        title: 'نهجنا',
        description: 'نؤمن بنهج تعاوني في إدارة الفعاليات. تضمن عمليتنا أن يتم تحقيق رؤيتك بدقة وإبداع.',
        steps: [
          { step: 1, title: 'الاستشارة', description: 'نستمع إلى أفكارك وأهدافك' },
          { step: 2, title: 'التخطيط', description: 'استراتيجية مفصلة للحدث وجدول زمني' },
          { step: 3, title: 'التنفيذ', description: 'تنفيذ الخطة بشكل مثالي' },
          { step: 4, title: 'المتابعة', description: 'تحليل ما بعد الحدث والتغذية الراجعة' },
        ],
      },
      cta: {
        title: 'هل أنت مستعد للارتقاء بفعاليتك؟',
        description: 'دعونا نبتكر شيئًا استثنائيًا معًا.',
        button: 'تواصل معنا',
      },
    },
  }

  return (
    <div className="min-h-screen py-20 pt-32" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          {content[language].title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-center max-w-3xl mx-auto mb-16"
        >
          {content[language].description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {content[language].services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-[#8b793c] mr-4" />
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-[#474747] mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle className="text-[#8b793c] mr-2" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-semibold mb-6">{content[language].approach.title}</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            {content[language].approach.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {content[language].approach.steps.map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: item.step * 0.1 }}
                className="bg-[#474747] text-white p-6 rounded-lg"
              >
                <div className="text-3xl font-bold text-[#8b793c] mb-2">0{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-semibold mb-6">{content[language].cta.title}</h2>
          <p className="text-xl mb-8">{content[language].cta.description}</p>
          <button className="bg-[#8b793c] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
            {content[language].cta.button}
          </button>
        </motion.div>
      </div>
    </div>
  )
}

