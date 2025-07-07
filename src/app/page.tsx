
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Github, Linkedin, Twitter, Laptop, BotMessageSquare, BrainCircuit, Globe, Mail, Phone, Layers, FileText, Instagram } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';

const navItems = [
    { id: 'hero', label: 'Beranda' },
    { id: 'tentang-saya', label: 'Tentang Saya' },
    { id: 'apa-yang-saya-lakukan', label: 'Apa yang Saya Lakukan' },
    { id: 'mitra-ai', label: 'Mitra AI Saya' },
    { id: 'proyek-saya', label: 'Proyek Saya' },
    { id: 'kontak', label: 'Kontak' },
];

const skills = [
  { name: 'Ngopi', value: 100 },
  { name: 'Belajar Hal Baru', value: 99 },
  { name: 'Mewujudkan Ide', value: 90 },
  { name: 'Nge-scroll Inspirasi', value: 88 },
  { name: 'Begadang', value: 100 },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [startProgressAnimation, setStartProgressAnimation] = useState(false);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const buffer = 150;

      if (window.innerHeight + scrollY >= document.body.offsetHeight - 20) {
        setActiveSection('kontak');
        return;
      }

      let currentSectionId = 'hero';
      for (const section of sections) {
        if (section && section.offsetTop <= scrollY + buffer) {
          currentSectionId = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    const animationTimer = setTimeout(() => setStartProgressAnimation(true), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-dvh bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-bold text-lg">
            <span className="font-headline">Candra Pramudya Arunita</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const href = `#${item.id}`;
                return (
                    <a
                        key={item.id}
                        href={href}
                        className={`relative transition-colors hover:text-accent ${
                            isActive
                                ? 'text-primary font-semibold'
                                : 'text-muted-foreground'
                        }`}
                    >
                        {item.label}
                        {isActive && (
                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent"></span>
                        )}
                    </a>
                );
            })}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <AnimatedSection id="hero" className="container grid min-h-dvh place-items-center text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Candra Pramudya Arunita: Inovator Digital & Penggerak Ide
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Saya percaya pada kekuatan ide untuk mewujudkan transformasi digital. Dengan pemanfaatan alat AI dan Vibe Code untuk desain website, pengembangan bot, dan strategi digital, saya membantu visi Anda menjadi kenyataan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all duration-300 hover:scale-105">
                <a href="#tentang-saya">Kenali Lebih Jauh</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-primary border-primary hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-lg transition-all duration-300 hover:scale-105">
                <a href="#kontak">Hubungi Saya</a>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="tentang-saya" className="py-20 md:py-24 bg-secondary">
          <div className="container">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Tentang Saya: Merangkai Ide, Merangkul Transformasi</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <div className="space-y-12">
                <div className="flex justify-center">
                   <Image 
                      src="https://i.ibb.co/9k0LFhhD/cv.jpg" 
                      alt="Candra Pramudya Arunita" 
                      width={400} 
                      height={400} 
                      className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64 shadow-lg"
                      data-ai-hint="professional portrait" />
                </div>
                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tighter font-headline mb-8 text-center">Skill Utama Saya</h3>
                  <div className="space-y-6">
                    {skills.map((skill) => (
                      <div key={skill.name} className="text-left">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm font-semibold text-primary">{skill.value}%</span>
                        </div>
                        <Progress value={startProgressAnimation ? skill.value : 0} className="h-3 transition-all duration-[10000ms] ease-linear" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground md:text-lg">
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
        </AnimatedSection>

        <AnimatedSection id="apa-yang-saya-lakukan" className="py-20 md:py-24 bg-background">
          <div className="container">
            <div className="space-y-12">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ide yang Bisa Kita Wujudkan Bersama</h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card className="text-center flex flex-col">
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
                <Card className="text-center flex flex-col">
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
                <Card className="text-center flex flex-col">
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
                <Card className="text-center flex flex-col">
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
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="mitra-ai" className="py-20 md:py-24 bg-secondary">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Mitra AI Saya: Tim di Balik Transformasi Digital</h2>
              <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
                Di balik setiap ide yang terwujud di sini, ada tim kolaborator yang luar biasa. Mereka mungkin bukan manusia, tapi kekuatan komputasi dan kecerdasan mereka adalah inti dari kemampuan saya untuk berinovasi tanpa batas, tanpa perlu menyentuh satu baris kode pun. Perkenalkan, rekan-kolaborasi AI saya:
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card className="flex flex-col text-center">
                <CardHeader className="flex-grow">
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                    <BrainCircuit className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4 text-xl">GPT-4.1 (Generative Pre-trained Transformer)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <div>
                    <h4 className="font-semibold mb-1">Peran</h4>
                    <p className="text-muted-foreground text-sm">Arsitek ide, pemecah masalah kompleks, dan penjelajah konsep. GPT-4.1 adalah otak di balik brainstorming awal, membantu saya menyusun kerangka konten, dan menemukan sudut pandang unik untuk setiap proyek.</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-1">Kekuatan</h4>
                    <p className="text-muted-foreground text-sm">Pemahaman konteks mendalam, kemampuan menghasilkan teks yang koheren dan kreatif, serta kapasitas untuk memproses informasi dalam skala besar.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col text-center">
                <CardHeader className="flex-grow">
                  <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit">
                    <Layers className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="mt-4 text-xl">Gemini 2.5 Pro</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <div>
                    <h4 className="font-semibold mb-1">Peran</h4>
                    <p className="text-muted-foreground text-sm">Pemikir serbaguna dan analis data. Gemini 2.5 Pro adalah ahli riset saya, membantu saya memahami tren pasar, menganalisis data, dan menyusun strategi yang solid untuk proyek-proyek digital.</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-1">Kekuatan</h4>
                    <p className="text-muted-foreground text-sm">Kemampuan multimodal (memahami teks, gambar, audio, video), pemikiran logis, dan kecepatan dalam memproses serta menyajikan informasi relevan.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col text-center">
                <CardHeader className="flex-grow">
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4 text-xl">Claude Sonnet 4.0</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <div>
                    <h4 className="font-semibold mb-1">Peran</h4>
                    <p className="text-muted-foreground text-sm">Ahli komunikasi dan penyempurna konten. Claude Sonnet 4.0 adalah mitra saya dalam menyempurnakan narasi, memastikan setiap pesan disampaikan dengan jelas, etis, dan persuasif, baik untuk website maupun chatbot.</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-1">Kekuatan</h4>
                    <p className="text-muted-foreground text-sm">Pemahaman nuansa bahasa yang luar biasa, kemampuan menulis yang panjang dan terstruktur, serta fokus pada keamanan dan etika dalam setiap interaksi.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
             <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Bersama mereka, saya mewujudkan potensi digital Anda—satu ide inovatif pada satu waktu.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection id="proyek-saya" className="py-20 md:py-24 bg-background">
          <div className="container space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Proyek Saya</h2>
              <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">Berikut adalah beberapa proyek yang menunjukkan dedikasi saya dalam mengubah ide menjadi solusi digital yang nyata.</p>
            </div>
            <div className="grid gap-8 justify-center">
              <Card className="overflow-hidden group max-w-sm">
                  <a href="https://portal.candrave.com" target="_blank" rel="noopener noreferrer" className="block h-full">
                      <div className="flex flex-col items-center justify-center aspect-square bg-secondary/50 group-hover:bg-secondary transition-colors p-6">
                          <Image
                              src="https://placehold.co/240x240.png"
                              alt="CANDRAVE Logo"
                              width={240}
                              height={240}
                              className="object-contain"
                              data-ai-hint="candrave logo"
                          />
                      </div>
                      <CardHeader className="text-center">
                          <CardTitle>Portal CANDRAVE</CardTitle>
                          <CardDescription>Gerbang utama menuju semua karya dan inovasi saya.</CardDescription>
                      </CardHeader>
                  </a>
              </Card>
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline" className="text-primary border-primary hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <a href="https://portal.candrave.com" target="_blank" rel="noopener noreferrer">
                        Lihat Proyek Lainnya
                    </a>
                </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="kontak" className="py-20 md:py-24 bg-secondary">
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
                  <a href="mailto:candrapramudya01@gmail.com" className="flex items-center gap-4 group">
                    <div className="p-3 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">candrapramudya01@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/6285646452979" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="p-3 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">085646452979</p>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/candra.pramudya.arunita" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="p-3 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                        <Instagram className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <p className="font-semibold">Instagram</p>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">@candra.pramudya.arunita</p>
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
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </AnimatedSection>
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
                  <a href="https://www.instagram.com/candra.pramudya.arunita" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                </Button>
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
