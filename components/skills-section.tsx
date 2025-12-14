const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Golang", "C++", "Elixir", "PHP"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Django", "Next.js", "Node.js", "React.js"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Other",
    skills: ["Git", "Cloud Services", "REST APIs", "Unit Testing", "Cyber Security"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-secondary-foreground lg:sr-only">Skills</h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-foreground">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>
                  <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                    {skill}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
