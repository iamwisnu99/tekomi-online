import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { Coffee, Utensils, Heart } from 'lucide-react';

interface AboutProps {
  aboutImage: string;
}

const values = [
  {
    icon: Coffee,
    title: 'Kopi Pilihan',
    description: 'Biji kopi terbaik dari seluruh nusantara, dipanggang dengan sempurna untuk cita rasa yang kaya.',
  },
  {
    icon: Utensils,
    title: 'Kuliner Autentik',
    description: 'Hidangan yang dibuat dengan resep warisan dan sentuhan modern yang memanjakan lidah.',
  },
  {
    icon: Heart,
    title: 'Pengalaman Berkesan',
    description: 'Suasana hangat dan pelayanan tulus untuk setiap momen berharga Anda.',
  },
];

const About = ({ aboutImage }: AboutProps) => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionTitle subtitle="Tentang Kami" title="Cerita TEKOMI" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-16">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img
                  src={aboutImage}
                  alt="TEKOMI Interior"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 -z-10" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal delay={0.2}>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                TEKOMI lahir dari kecintaan mendalam terhadap budaya kopi dan kuliner Indonesia. 
                Kami percaya bahwa setiap cangkir kopi dan setiap hidangan adalah sebuah cerita 
                yang layak diceritakan dengan penuh kehangatan.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="font-body text-muted-foreground leading-relaxed mb-12">
                Dengan filosofi "rasa yang jujur," kami menghadirkan pengalaman bersantap yang 
                tidak hanya memanjakan lidah, tetapi juga menciptakan kenangan yang tak terlupakan. 
                Setiap detail di TEKOMI dirancang untuk memberikan kenyamanan dan ketenangan dalam 
                setiap kunjungan Anda.
              </p>
            </ScrollReveal>

            {/* Values */}
            <div className="grid gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={0.4 + index * 0.1}>
                  <motion.div
                    className="flex items-start gap-4 p-4 bg-card rounded-sm hover-lift"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent flex-shrink-0">
                      <value.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium text-foreground mb-1">
                        {value.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
