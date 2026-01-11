import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollReveal from '../components/ui/ScrollReveal';

const Terms = () => {
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
            Terms & Conditions
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
                1. Informasi Umum
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Selamat datang di TEKOMI Cafe & Resto. Dengan mengakses website ini dan/atau menggunakan layanan kami, 
                Anda menyetujui untuk terikat dengan syarat dan ketentuan yang tercantum di bawah ini. Website ini 
                dioperasikan oleh TEKOMI untuk tujuan informasi dan branding. Kami berhak untuk mengubah, memodifikasi, 
                atau memperbarui syarat dan ketentuan ini sewaktu-waktu tanpa pemberitahuan sebelumnya.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                2. Layanan di TEKOMI
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                TEKOMI menyediakan layanan cafe dan restoran yang mencakup penyajian makanan, minuman, dan pengalaman 
                bersantap di tempat. Semua transaksi dilakukan secara langsung di lokasi kami. Kami tidak menyediakan 
                layanan pemesanan online, reservasi, atau pengiriman melalui website ini. Untuk informasi lebih lanjut 
                mengenai layanan kami, silakan kunjungi langsung lokasi TEKOMI atau hubungi kami melalui informasi 
                kontak yang tersedia.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                3. Ketentuan Transaksi
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Semua transaksi di TEKOMI Cafe & Resto dilakukan secara langsung di tempat dengan ketentuan sebagai berikut:
              </p>
              <ul className="font-body text-muted-foreground leading-relaxed mb-6 list-disc pl-6 space-y-2">
                <li>Harga yang tercantum dalam menu dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.</li>
                <li>Harga belum termasuk pajak dan biaya layanan kecuali dinyatakan lain.</li>
                <li>Menu yang tersedia tergantung pada ketersediaan bahan dan dapat berbeda dari yang ditampilkan di website.</li>
                <li>Pesanan yang telah dikonfirmasi tidak dapat dibatalkan.</li>
                <li>Kami berhak menolak pelayanan kepada siapa pun dengan alasan yang wajar.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                4. Ketentuan Pembayaran
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                TEKOMI menerima berbagai metode pembayaran untuk kenyamanan Anda:
              </p>
              <ul className="font-body text-muted-foreground leading-relaxed mb-6 list-disc pl-6 space-y-2">
                <li>Pembayaran tunai dalam mata uang Rupiah (IDR).</li>
                <li>Kartu debit dan kredit (Visa, Mastercard, JCB).</li>
                <li>Dompet digital dan pembayaran QRIS.</li>
                <li>Transfer bank untuk transaksi tertentu.</li>
              </ul>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Pembayaran harus dilakukan sebelum meninggalkan lokasi. Bukti pembayaran akan diberikan untuk setiap transaksi.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                5. Payment Gateway - Midtrans
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Untuk memfasilitasi pembayaran digital yang aman dan efisien, TEKOMI menggunakan layanan <strong>Midtrans</strong> 
                {' '}sebagai Payment Gateway resmi kami. Midtrans adalah penyedia layanan pembayaran yang telah terdaftar dan 
                diawasi oleh Bank Indonesia. Dengan menggunakan layanan pembayaran digital di TEKOMI, Anda juga menyetujui 
                syarat dan ketentuan serta kebijakan privasi yang ditetapkan oleh Midtrans. Informasi lebih lanjut mengenai 
                Midtrans dapat dilihat di{' '}
                <a href="https://midtrans.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  midtrans.com
                </a>.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                6. Hak Kekayaan Intelektual
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Seluruh konten yang terdapat di website ini, termasuk namun tidak terbatas pada teks, gambar, logo, 
                desain, dan grafis adalah milik TEKOMI dan dilindungi oleh hukum hak cipta Indonesia. Dilarang keras 
                menyalin, memodifikasi, mendistribusikan, atau menggunakan konten website ini untuk tujuan komersial 
                tanpa izin tertulis dari TEKOMI.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                7. Batasan Tanggung Jawab
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                TEKOMI tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, atau konsekuensial 
                yang timbul dari penggunaan website ini. Informasi yang disajikan di website ini bersifat informatif 
                dan dapat berubah tanpa pemberitahuan. Kami menyarankan pengunjung untuk mengonfirmasi informasi 
                secara langsung dengan menghubungi kami.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                8. Hukum yang Berlaku
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                Setiap perselisihan yang timbul akan diselesaikan melalui musyawarah mufakat, dan apabila tidak 
                tercapai kesepakatan, akan diselesaikan melalui pengadilan yang berwenang di Indonesia.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <h2 className="font-display text-2xl font-medium text-foreground mt-12 mb-4">
                9. Hubungi Kami
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Jika Anda memiliki pertanyaan mengenai syarat dan ketentuan ini, silakan hubungi kami melalui:
              </p>
              <div className="font-body text-muted-foreground leading-relaxed mb-6 p-6 bg-card rounded-sm">
                <p><strong>TEKOMI Cafe & Resto</strong></p>
                <p>Dusun Pecikalan RT 001/RW 010, Wangon, Jawa Tengah.</p>
                <p>Telepon: +62 838 6386 7266</p>
                <p>Email: wisnu.bussines99@gmail.com</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Terms;
