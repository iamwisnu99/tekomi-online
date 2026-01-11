import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Alamat',
    details: ['Dusun Pecikalan RT 001/RW 010', 'Wangon, Kab. Banyumas, Jawa Tengah.'],
  },
  {
    icon: Phone,
    title: 'Telepon',
    details: ['+62 838 6386 7266'],
  },
  {
    icon: Clock,
    title: 'Jam Operasional',
    details: ['Senin - Jumat: 08:00 - 22:00', 'Sabtu - Minggu: 07:00 - 23:00'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['wisnu.bussines99@gmail.com'],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionTitle subtitle="Hubungi Kami" title="Kunjungi TEKOMI" light />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-16">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} delay={index * 0.1}>
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-foreground/10 text-accent flex-shrink-0">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="font-body text-sm text-primary-foreground/70">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Map */}
          <ScrollReveal direction="right">
            <div className="h-[400px] lg:h-full min-h-[400px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d494.43502135502365!2d109.05296655108266!3d-7.522487659600697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65650064e14ee5%3A0x3b64d15c8ba04ec8!2sTEKOMI!5e0!3m2!1sen!2sid!4v1768061185931!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(20%) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TEKOMI Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
