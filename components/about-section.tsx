export function AboutSection() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary-foreground lg:sr-only">About</h2>
      </div>
      <div className="space-y-4 leading-relaxed">
        <p>
          I&apos;m a hands-on <span className="text-secondary-foreground">Software Engineer</span> with verifiable
          success in delivering appropriate technology solutions for desktop and mobile products. My comprehensive
          knowledge spans <span className="text-secondary-foreground">platform development</span>,{" "}
          <span className="text-secondary-foreground">cloud services</span>, and{" "}
          <span className="text-secondary-foreground">web-based applications</span>.
        </p>
        <p>
          I&apos;m an innovative and enthusiastic complex problem-solver with exceptional interpersonal skills augmented
          by well-developed organizational abilities. I&apos;m confident to take on new challenges and ready to invest
          my skills and experience towards growth and development.
        </p>
        <p>
          My focus is on creating software that not only looks great but is meticulously built for{" "}
          <span className="text-secondary-foreground">performance</span> and{" "}
          <span className="text-secondary-foreground">usability</span>. I enjoy the intersection of design and
          engineering, crafting experiences that blend thoughtful design with robust technical implementation.
        </p>
      </div>
    </section>
  )
}
