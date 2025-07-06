
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';

export default function KaryaPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="font-headline">Candra Pramudya Arunita</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="/" className="text-muted-foreground transition-colors hover:text-accent">Beranda</a>
            <a href="/#tentang-saya" className="text-muted-foreground transition-colors hover:text-accent">Tentang Saya</a>
            <a href="/#apa-yang-saya-lakukan" className="text-muted-foreground transition-colors hover:text-accent">Apa yang Saya Lakukan</a>
            <a href="/karya" className="relative text-primary font-semibold">
              Karya Saya
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent"></span>
            </a>
            <a href="/#kontak" className="text-muted-foreground transition-colors hover:text-accent">Kontak</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <AnimatedSection id="karya" className="py-20 md:py-24 bg-secondary">
          <div className="container space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Semua Karya Saya</h2>
              <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">Berikut adalah kumpulan proyek yang telah saya kerjakan, menunjukkan komitmen pada kualitas dan inovasi.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden group">
                <Image src="https://placehold.co/600x400.png" alt="Website Portofolio Kreatif" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="creative portfolio" />
                <CardHeader>
                  <CardTitle>Website Portofolio Kreatif</CardTitle>
                  <CardDescription>Desain Web</CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden group">
                <Image src="https://placehold.co/600x400.png" alt="Bot Info Komunitas" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="ai chatbot" />
                <CardHeader>
                  <CardTitle>Bot Info Komunitas</CardTitle>
                  <CardDescription>Automasi AI</CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden group">
                <Image src="https://placehold.co/600x400.png" alt="Blog Edukasi Digital" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="digital blog" />
                <CardHeader>
                  <CardTitle>Blog Edukasi Digital</CardTitle>
                  <CardDescription>Konten & Web</CardDescription>
                </CardHeader>
              </Card>
               <Card className="overflow-hidden group">
                <Image src="https://placehold.co/600x400.png" alt="Aplikasi Web E-commerce" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="web application" />
                <CardHeader>
                  <CardTitle>Aplikasi Web E-commerce</CardTitle>
                  <CardDescription>Pengembangan Web</CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden group">
                <Image src="https://placehold.co/600x400.png" alt="Desain Aplikasi Mobile" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="mobile app" />
                <CardHeader>
                  <CardTitle>Desain Aplikasi Mobile</CardTitle>
                  <CardDescription>UI/UX Desain</CardDescription>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden group">
                <Image src="https://placehold.co/600x400.png" alt="Dashboard Analitik" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="data visualization" />
                <CardHeader>
                  <CardTitle>Dashboard Analitik</CardTitle>
                  <CardDescription>Visualisasi Data</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="bg-gray-900 text-gray-400">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2 flex flex-col items-center md:items-start">
              <a href="/" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
