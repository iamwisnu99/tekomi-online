import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-hidden">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-card">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-4 block"
          >
            Legal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground"
          >
            Privacy Policy
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <ScrollReveal>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Terakhir diperbarui: Desember 2024
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                1. Pendahuluan
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                TEKOMI Cafe & Resto ("kami", "TEKOMI") menghargai privasi Anda dan berkomitmen untuk melindungi 
                data pribadi yang mungkin kami kumpulkan saat Anda mengunjungi website kami. Kebijakan Privasi 
                ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda sesuai 
                dengan Undang-Undang Perlindungan Data Pribadi yang berlaku di Indonesia.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                2. Data yang Kami Kumpulkan
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Website TEKOMI adalah website statis yang berfungsi sebagai profil dan branding. Kami dapat 
                mengumpulkan data secara pasif melalui:
              </p>
              <ul className="font-body text-muted-foreground leading-relaxed mb-6 list-disc pl-6 space-y-2">
                <li><strong>Data Analitik:</strong> Informasi mengenai kunjungan website seperti halaman yang dikunjungi, 
                durasi kunjungan, dan sumber traffic. Data ini dikumpulkan secara anonim dan agregat.</li>
                <li><strong>Cookies:</strong> File kecil yang disimpan di perangkat Anda untuk meningkatkan pengalaman 
                browsing dan membantu kami memahami bagaimana website digunakan.</li>
                <li><strong>Data Teknis:</strong> Informasi teknis seperti jenis browser, sistem operasi, dan alamat IP 
                yang dikumpulkan secara otomatis saat Anda mengakses website kami.</li>
              </ul>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Website ini tidak memiliki form pengisian data, sehingga kami tidak secara aktif mengumpulkan 
                data pribadi seperti nama, email, atau nomor telepon melalui website.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                3. Penggunaan Layanan Pihak Ketiga
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Kami menggunakan layanan pihak ketiga untuk berbagai keperluan:
              </p>
              <h3 className="font-display text-xl font-medium text-foreground mt-8 mb-3">
                a. Google Analytics
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Kami menggunakan Google Analytics untuk menganalisis penggunaan website. Google Analytics 
                mengumpulkan data secara anonim dan membantu kami memahami bagaimana pengunjung berinteraksi 
                dengan website kami. Untuk informasi lebih lanjut, kunjungi{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Kebijakan Privasi Google
                </a>.
              </p>
              <h3 className="font-display text-xl font-medium text-foreground mt-8 mb-3">
                b. Midtrans Payment Gateway
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Untuk transaksi pembayaran di lokasi TEKOMI, kami menggunakan <strong>Midtrans</strong> sebagai 
                Payment Gateway. Ketika Anda melakukan pembayaran digital di TEKOMI, Midtrans dapat mengumpulkan 
                dan memproses data pembayaran Anda sesuai dengan kebijakan privasi mereka. Midtrans merupakan 
                penyedia layanan pembayaran yang telah tersertifikasi dan mematuhi standar keamanan PCI-DSS. 
                Informasi lebih lanjut dapat dilihat di{' '}
                <a href="https://midtrans.com/id/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Kebijakan Privasi Midtrans
                </a>.
              </p>
              <h3 className="font-display text-xl font-medium text-foreground mt-8 mb-3">
                c. Google Maps
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Website kami menampilkan peta lokasi melalui Google Maps. Google Maps dapat mengumpulkan 
                data lokasi dan informasi teknis sesuai dengan kebijakan privasi Google.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                4. Cookies dan Teknologi Pelacakan
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Website kami menggunakan cookies untuk:
              </p>
              <ul className="font-body text-muted-foreground leading-relaxed mb-6 list-disc pl-6 space-y-2">
                <li>Memastikan website berfungsi dengan baik</li>
                <li>Menganalisis traffic dan penggunaan website</li>
                <li>Meningkatkan pengalaman pengguna</li>
              </ul>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda. Namun, menonaktifkan 
                cookies tertentu dapat mempengaruhi fungsionalitas website.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                5. Keamanan Data
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Kami berkomitmen untuk melindungi keamanan data Anda. Website kami dilindungi dengan protokol 
                keamanan HTTPS yang mengenkripsi data yang ditransmisikan antara browser Anda dan server kami. 
                Meskipun demikian, tidak ada metode transmisi data melalui internet yang 100% aman, dan kami 
                tidak dapat menjamin keamanan absolut.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                6. Hak Anda
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Sesuai dengan peraturan perlindungan data yang berlaku, Anda memiliki hak untuk:
              </p>
              <ul className="font-body text-muted-foreground leading-relaxed mb-6 list-disc pl-6 space-y-2">
                <li>Mengetahui data apa yang kami kumpulkan tentang Anda</li>
                <li>Meminta akses ke data pribadi Anda</li>
                <li>Meminta penghapusan data pribadi Anda</li>
                <li>Menolak penggunaan cookies non-esensial</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                7. Perubahan Kebijakan Privasi
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan 
                dalam praktik kami atau karena alasan operasional, hukum, atau peraturan lainnya. Perubahan akan 
                berlaku segera setelah diposting di website ini. Kami menyarankan Anda untuk meninjau halaman ini 
                secara berkala.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                8. Hubungi Kami
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak Anda 
                terkait data pribadi, silakan hubungi kami:
              </p>
              <div className="font-body text-muted-foreground leading-relaxed mb-6 p-6 bg-card rounded-sm">
                <p><strong>TEKOMI Cafe & Resto</strong></p>
                <p>Dusun Pecikalan RT 001/RW 010, Wangon, Jawa Tengah.</p>
                <p>Telepon: +62 838 6386 7266</p>
                <p>Email: wisnu.bussines99@gmail.com</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <p className="font-body text-muted-foreground leading-relaxed mt-12">
                Dengan terus menggunakan website kami, Anda menyetujui pengumpulan dan penggunaan informasi 
                sesuai dengan Kebijakan Privasi ini.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;
