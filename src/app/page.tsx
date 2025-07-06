
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Twitter, Laptop, BotMessageSquare, BrainCircuit, Globe, Mail, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-bold text-lg">
            <span className="font-headline">Candra Pramudya Arunita</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#hero" className="text-muted-foreground transition-colors hover:text-accent">Beranda</a>
            <a href="#tentang-saya" className="text-muted-foreground transition-colors hover:text-accent">Tentang Saya</a>
            <a href="#keahlian" className="text-muted-foreground transition-colors hover:text-accent">Keahlian</a>
            <a href="#karya-saya" className="text-muted-foreground transition-colors hover:text-accent">Karya Saya</a>
            <a href="#kontak" className="text-muted-foreground transition-colors hover:text-accent">Kontak</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section id="hero" className="container grid place-items-center text-center py-24 md:py-32">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Candra Pramudya Arunita: Inovator Digital & Penggerak Ide
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Saya percaya pada kekuatan ide untuk mewujudkan transformasi digital. Melalui keahlian saya dalam desain website, pengembangan bot AI, dan strategi digital, saya membantu visi Anda menjadi kenyataan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="hover:bg-accent hover:text-accent-foreground">
                <a href="#tentang-saya">Kenali Lebih Jauh</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-primary border-primary hover:bg-accent hover:text-accent-foreground hover:border-accent">
                <a href="#kontak">Hubungi Saya</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="tentang-saya" className="py-20 md:py-24 bg-secondary">
          <div className="container">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Tentang Saya: Merangkai Ide, Merangkul Transformasi</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
              <div className="md:col-span-1 flex justify-center">
                 <Image 
                    src="https://placehold.co/400x400.png" 
                    alt="Candra Pramudya Arunita" 
                    width={400} 
                    height={400} 
                    className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64 shadow-lg"
                    data-ai-hint="professional portrait" />
              </div>
              <div className="md:col-span-2 space-y-4 text-muted-foreground md:text-lg">
                <p>
                  Halo! Saya Candra Pramudya Arunita. Perjalanan saya di dunia digital mungkin tidak dimulai dari jalur konvensional seorang programmer, melainkan dari rasa penasaran yang tak terbendung terhadap potensi teknologi. Semuanya bermula dari ketertarikan saya pada dunia kripto dan airdrop. Di sana, saya melihat bagaimana inovasi digital bisa menciptakan peluang baru yang luar biasa.
                </p>
                <p>
                  Rasa ingin tahu ini mendorong saya untuk menggali lebih dalam, dan di sinilah titik baliknya. Saya ingat betul momen ketika saya menemukan sebuah skrip Python di GitHub untuk otomasi transaksi di EVM (Ethereum Virtual Machine). Meskipun tanpa latar belakang pemrograman formal, ide untuk bisa membuat sesuatu, mengotomatisasi proses, dan menciptakan nilai dari sana benar-benar memicu semangat saya. Saya terpukau dengan konsep bahwa dengan sedikit pemahaman dan alat yang tepat, siapa pun bisa membangun sesuatu yang fungsional.
                </p>
                <p>
                  Dari situlah, pintu menuju dunia pengembangan terbuka lebar. Saya menyadari bahwa saya tidak perlu menjadi seorang programmer tradisional untuk mewujudkan ide-ide digital. Dengan bantuan kecerdasan buatan (AI), batasan itu seolah lenyap. AI bukan hanya alat bantu, melainkan mitra yang memungkinkan saya, seorang pembelajar otodidak, untuk membangun website dan berbagai solusi digital yang sebelumnya hanya ada dalam imajinasi.
                </p>
                <p>
                  Kini, saya berkomitmen untuk memperluas semangat inovasi ini. Saya di sini untuk membantu Anda mewujudkan visi digital Anda, sama seperti bagaimana saya mengubah rasa penasaran saya menjadi kemampuan untuk menciptakan. Mari berkolaborasi, karena saya percaya, setiap ide punya potensi untuk bertransformasi!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="keahlian" className="py-20 md:py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ide yang Bisa Kita Wujudkan Bersama</h2>
              <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">Memanfaatkan inovasi dan kekuatan AI untuk mewujudkan ide-ide digital Anda, tanpa perlu sentuhan kode.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="flex-grow">
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                    <Laptop className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4 text-xl">Pembuatan Website Tanpa Kode (AI-Powered)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Mewujudkan website estetis dan fungsional untuk tahap awal atau kebutuhan dasar Anda, sepenuhnya dengan bantuan AI dan Vibe Code.</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="flex-grow">
                  <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit">
                    <BotMessageSquare className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="mt-4 text-xl">Automasi Chatbot Tanpa Kode</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Mengoptimalkan komunikasi dasar dan layanan pelanggan melalui penerapan chatbot cerdas berbasis AI, tanpa perlu pemrograman kompleks.</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="flex-grow">
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                    <BrainCircuit className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4 text-xl">Penerapan Solusi AI untuk Efisiensi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Membantu Anda menerapkan dan mengintegrasikan solusi AI sederhana untuk meningkatkan efisiensi digital bisnis Anda, sepenuhnya tanpa coding.</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="flex-grow">
                  <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit">
                    <Globe className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="mt-4 text-xl">Konsultasi Strategi Digital</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Membantu Anda merumuskan strategi digital yang tepat untuk mewujudkan visi dan pertumbuhan Anda.</p>
                </CardContent>
              </Card>
            </div>
             <p className="text-center text-sm text-muted-foreground pt-8">*Beberapa layanan dasar tersedia dengan skema kolaborasi/syarat tertentu. Pelajari lebih lanjut di halaman detail layanan.</p>
          </div>
        </section>

        <section id="karya-saya" className="py-20 md:py-24 bg-secondary">
          <div className="container space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Beberapa Karya Pilihan</h2>
              <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">Menampilkan komitmen saya pada kualitas, kecepatan, dan estetika dalam setiap proyek yang saya kerjakan.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image src="https://placehold.co/600x400.png" alt="Website Portofolio Kreatif" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="creative portfolio" />
                <CardHeader>
                  <CardTitle>Website Portofolio Kreatif</CardTitle>
                  <CardDescription>Desain Web</CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image src="https://placehold.co/600x400.png" alt="Bot Info Komunitas" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="ai chatbot" />
                <CardHeader>
                  <CardTitle>Bot Info Komunitas</CardTitle>
                  <CardDescription>Automasi AI</CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image src="https://placehold.co/600x400.png" alt="Blog Edukasi Digital" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="digital blog" />
                <CardHeader>
                  <CardTitle>Blog Edukasi Digital</CardTitle>
                  <CardDescription>Konten & Web</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="kontak" className="py-20 md:py-24 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Mari Terhubung</h2>
              <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
                Punya pertanyaan, ide proyek, atau hanya ingin menyapa? Jangan ragu untuk terhubung.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Informasi Kontak</h3>
                <p className="text-muted-foreground">Hubungi melalui kanal berikut. Jangan ragu untuk mengirim pesan.</p>
                <div className="space-y-4">
                  <a href="mailto:halo@candrapmu.com" className="flex items-center gap-4 group">
                    <div className="p-3 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">halo@candrapmu.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="p-3 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">Chat di WhatsApp</p>
                    </div>
                  </a>
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Anda</Label>
                    <Input id="name" placeholder="Nama Anda" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Anda</Label>
                    <Input id="email" type="email" placeholder="email.anda@contoh.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subjek</Label>
                  <Input id="subject" placeholder="Perihal pesan Anda" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Pesan Anda</Label>
                  <Textarea id="message" placeholder="Tulis pesan Anda di sini..." rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity">
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2 flex flex-col items-center md:items-start">
              <a href="#hero" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Candra Pramudya Arunita
              </a>
              <p className="text-sm max-w-xs">
                Inovator Digital & Penggerak Ide, membantu visi Anda menjadi kenyataan.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white rounded-full">
                  <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white rounded-full">
                  <a href="#" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white rounded-full">
                  <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                </Button>
              </div>
            </div>
            <div className="text-sm flex flex-col items-center md:items-end">
              <p>&copy; {new Date().getFullYear()} Candra Pramudya Arunita.</p>
              <p>Semua Hak Dilindungi.</p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
