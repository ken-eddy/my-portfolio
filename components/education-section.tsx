import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    period: "2020 — 2024",
    degree: "Bachelor of Science in Computer Science",
    institution: "Multimedia University of Kenya",
    icon: GraduationCap,
  },
  {
    period: "2020",
    degree: "Certificate in Cyber-Security",
    institution: "Zalego Academy",
    icon: Award,
  },
]

export function EducationSection() {
  return (
    <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Education">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary-foreground lg:sr-only">Education</h2>
      </div>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <header
              className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
              aria-label={edu.period}
            >
              {edu.period}
            </header>
            <div className="z-10 sm:col-span-6">
              <div className="flex items-start gap-3">
                <edu.icon className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium leading-snug text-secondary-foreground">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
