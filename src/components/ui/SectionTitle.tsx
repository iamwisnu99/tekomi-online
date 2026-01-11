import ScrollReveal from './ScrollReveal';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true, light = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? 'text-center' : ''}`}>
      <ScrollReveal>
        <span className={`font-body text-sm uppercase tracking-[0.3em] ${light ? 'text-primary-foreground/60' : 'text-accent'}`}>
          {subtitle}
        </span>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-medium mt-4 ${light ? 'text-primary-foreground' : 'text-foreground'}`}>
          {title}
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className={`w-16 h-px mx-auto mt-6 ${centered ? 'mx-auto' : 'mx-0'} ${light ? 'bg-primary-foreground/30' : 'bg-accent'}`} />
      </ScrollReveal>
    </div>
  );
};

export default SectionTitle;
