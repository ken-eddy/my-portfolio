import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl">Kennedy Kitavi</h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">Software Developer</h2>
        <p className="mt-4 max-w-xs leading-relaxed text-foreground">
          I build accessible, pixel-perfect digital experiences for desktop and mobile platforms.
        </p>
      </div>

      <ul className="mt-8 flex items-center gap-5" aria-label="Social links">
        <li>
          <a
            href="https://github.com/ken-eddy"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-muted-foreground transition-colors hover:text-secondary-foreground"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-muted-foreground transition-colors hover:text-secondary-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="mailto:kitavimuuo@gmail.com"
            className="block text-muted-foreground transition-colors hover:text-secondary-foreground"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="tel:+254710407995"
            className="block text-muted-foreground transition-colors hover:text-secondary-foreground"
            aria-label="Phone"
          >
            <Phone className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  )
}
