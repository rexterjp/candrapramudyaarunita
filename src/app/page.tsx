
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

        <AnimatedSection id="proyek-saya" className="py-20 md:py-24 bg-background">
          <div className="container space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Proyek Saya</h2>
              <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">Ini adalah proyek yang saya wujudkan.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <Card className="overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <a href="https://portal.candrave.com" target="_blank" rel="noopener noreferrer" className="block">
                    <Image
                      src="https://i.ibb.co/B2NS1f3G/candrave-no-bg.png"
                      alt="Logo CANDRAVE"
                      width={600}
                      height={600}
                      className="object-cover w-full h-auto"
                    />
                  </a>
                </Card>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-headline">CANDRAVE</h3>
                <p className="text-muted-foreground md:text-lg">
                  Ini adalah manifestasi nyata dari keyakinan saya bahwa setiap ide layak untuk tumbuh. Sebagai proyek utama yang saya bangun, CANDRAVE adalah platform dan gerakan yang didedikasikan untuk memberdayakan inovasi digital. Di sini, saya menerapkan metode #TanpaKode dan kekuatan Kecerdasan Buatan untuk menyediakan dukungan serta aksesibilitas bagi berbagai visi—dari website personal hingga solusi bisnis. CANDRAVE adalah bukti hidup bagaimana passion dan teknologi bisa bersinergi.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline" className="text-primary border-primary hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <a href="https://candrave.com" target="_blank" rel="noopener noreferrer">
                        Kunjungi
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
              <form action="https://formspree.io/f/xwpbdkqr" method="POST" className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Anda</Label>
                    <Input id="name" name="name" placeholder="Nama Anda" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Anda</Label>
                    <Input id="email" type="email" name="email" placeholder="email.anda@contoh.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subjek</Label>
                  <Input id="subject" name="subject" placeholder="Perihal pesan Anda" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Pesan Anda</Label>
                  <Textarea id="message" name="message" placeholder="Tulis pesan Anda di sini..." rows={5} required />
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

