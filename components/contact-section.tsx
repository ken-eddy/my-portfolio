import { Mail, Phone, Github, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Contact">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary-foreground lg:sr-only">Contact</h2>
      </div>
      <div className="space-y-4">
        <p className="leading-relaxed">
          If you&apos;d like to discuss a project or just say hi, I&apos;m always open to new opportunities and
          collaborations. Feel free to reach out!
        </p>
        <div className="space-y-3">
          <a
            href="mailto:kitavimuuo@gmail.com"
            className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
            <span>kitavimuuo@gmail.com</span>
            <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
          </a>
          <a
            href="tel:+254710407995"
            className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-5 w-5" />
            <span>+254 710 407 995</span>
            <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
          </a>
          <a
            href="https://github.com/ken-eddy"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
            <span>github.com/ken-eddy</span>
            <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
          </a>
        </div>
      </div>
      <footer className="mt-16 text-sm text-muted-foreground">
        <p>
          Built with{" "}
          <a href="https://nextjs.org" className="font-medium text-foreground hover:text-primary">
            Next.js
          </a>{" "}
          and{" "}
          <a href="https://tailwindcss.com" className="font-medium text-foreground hover:text-primary">
            Tailwind CSS
          </a>
          . Deployed on{" "}
          <a href="https://vercel.com" className="font-medium text-foreground hover:text-primary">
            Vercel
          </a>
          .
        </p>
      </footer>
    </section>
  )
}
