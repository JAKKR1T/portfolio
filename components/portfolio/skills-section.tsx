"use client"

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL", "PHP"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
  },
  {
    title: "Databases",
    skills: [ "MySQL"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 flex items-center mr-3 text-2xl font-bold text-foreground">
          <span className="font-mono text-sm font-normal text-primary"></span>
          Skills
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
