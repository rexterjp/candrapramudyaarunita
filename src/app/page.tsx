import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Twitter, Mail, Atom, Code2, Palette, Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background font-body">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold">
            <Atom className="h-6 w-6 text-primary" />
            <span className="font-headline">Digital Alchemist</span>
          </a>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">About</a>
            <a href="#skills" className="text-muted-foreground transition-colors hover:text-foreground">Skills</a>
            <a href="#portfolio" className="text-muted-foreground transition-colors hover:text-foreground">Portfolio</a>
            <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section id="hero" className="container grid place-items-center py-20 md:py-32">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Alchemist
              </span>
            </h1>
            <p className="max-w-xl mx-auto text-lg text-muted-foreground">
              Transforming innovative ideas into brilliant digital experiences. I specialize in creating modern, responsive, and user-centric web applications.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-24 bg-secondary">
          <div className="container space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">My Journey</h2>
              <p className="text-muted-foreground md:text-xl">The story behind the craft.</p>
            </div>
            <Card className="max-w-3xl mx-auto shadow-lg">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-muted-foreground">
                  From a spark of curiosity to a flame of passion, my journey in the digital world has been one of continuous transformation. I believe in the alchemy of turning complex problems into simple, beautiful, and intuitive designs. Every line of code, every pixel perfected, is a step in the process of creating digital gold.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="skills" className="py-20 md:py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Expertise &amp; Services</h2>
              <p className="text-muted-foreground md:text-xl">The tools and techniques in my arsenal.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Code2 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Web Development</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </CardContent>
              </Card>
              <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Palette className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">UI/UX Design</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">User Research</Badge>
                  <Badge variant="secondary">Prototyping</Badge>
                  <Badge variant="secondary">Wireframing</Badge>
                </CardContent>
              </Card>
              <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Digital Strategy</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">SEO</Badge>
                  <Badge variant="secondary">Content Strategy</Badge>
                  <Badge variant="secondary">Analytics</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 md:py-24 bg-secondary">
          <div className="container space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Selected Works</h2>
              <p className="text-muted-foreground md:text-xl">A glimpse into my creative endeavors.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image src="https://placehold.co/600x400.png" alt="Portfolio item 1" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="ecommerce website" />
                <CardHeader>
                  <CardTitle>E-commerce Platform Redesign</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>A complete UI/UX overhaul for an online retailer, resulting in a 40% increase in user engagement.</CardDescription>
                </CardContent>
              </Card>
              <Card className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image src="https://placehold.co/600x400.png" alt="Portfolio item 2" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="saas dashboard" />
                <CardHeader>
                  <CardTitle>SaaS Dashboard Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Built a powerful, data-driven dashboard for a SaaS company to visualize key metrics and improve decision-making.</CardDescription>
                </CardContent>
              </Card>
              <Card className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image src="https://placehold.co/600x400.png" alt="Portfolio item 3" width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint="corporate website" />
                <CardHeader>
                  <CardTitle>Corporate Branding &amp; Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Developed a new brand identity and website for a tech startup, establishing a strong online presence.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Let's Create Together</h2>
                <p className="text-muted-foreground text-lg">
                  Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form, and I'll get back to you as soon as possible.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Mail className="h-6 w-6 text-primary"/>
                  <a href="mailto:hello@digitalalchemist.dev" className="hover:text-primary transition-colors">hello@digitalalchemist.dev</a>
                </div>
              </div>
              <Card className="p-8 shadow-lg">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full hover:bg-accent hover:text-accent-foreground transition-colors">Send Message</Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Digital Alchemist. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="GitHub"><Github className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
