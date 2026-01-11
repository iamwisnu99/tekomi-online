import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { X } from 'lucide-react';

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = images.map((src, index) => ({
    src,
    alt: `TEKOMI Gallery ${index + 1}`,
  }));

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionTitle subtitle="Galeri" title="Momen TEKOMI" />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              className={`${
                index === 0 || index === 5 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <motion.button
                onClick={() => setSelectedImage(image.src)}
                className="relative w-full h-full aspect-square overflow-hidden group"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-body text-sm uppercase tracking-widest text-primary-foreground">
                    Lihat
                  </span>
                </div>
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/95"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-background hover:text-accent transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close"
            >
              <X size={32} />
            </motion.button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
