import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';

const categories = ['Semua', 'Kopi', 'Non-Kopi', 'Makanan', 'Dessert'];

const menuItems = [
  // Kopi
  { name: 'Espresso', category: 'Kopi', price: '25.000', description: 'Double shot, bold & intense' },
  { name: 'Americano', category: 'Kopi', price: '30.000', description: 'Espresso with hot water' },
  { name: 'Affogato', category: 'Kopi', price: '48.000', description: 'Espresso over vanilla gelato' },
  // Non-Kopi
  { name: 'Matcha Latte', category: 'Non-Kopi', price: '42.000', description: 'Premium Japanese matcha' },
  { name: 'Fresh Juice', category: 'Non-Kopi', price: '35.000', description: 'Orange, apple, or mixed' },
  // Makanan
  { name: 'Nasi Goreng TEKOMI', category: 'Makanan', price: '55.000', description: 'Signature fried rice' },
  { name: 'Caesar Salad', category: 'Makanan', price: '48.000', description: 'Fresh romaine, parmesan' },
  // Dessert
  { name: 'Tiramisu', category: 'Dessert', price: '45.000', description: 'Classic Italian dessert' },
  { name: 'Brownies', category: 'Dessert', price: '35.000', description: 'Dark chocolate, fudgy' },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredItems = activeCategory === 'Semua'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionTitle subtitle="Menu Kami" title="Sajian Pilihan" />

        {/* Category Filter */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 font-body text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-transparent text-foreground/70 hover:text-foreground border border-border hover:border-foreground/30'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <motion.div
                  className="p-6 bg-background border border-border hover:border-accent/50 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="font-body text-sm text-accent font-medium">
                      Rp {item.price}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note */}
        <ScrollReveal delay={0.3}>
          <p className="text-center font-body text-sm text-muted-foreground mt-12">
            * Harga belum termasuk pajak. Menu dapat berubah sewaktu-waktu.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Menu;
