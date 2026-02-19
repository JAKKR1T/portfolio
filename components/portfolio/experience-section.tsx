"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "Dec 2024 — Feb 2025",
    title: "Car Price Prediction Web App · Project Lead",
    companyUrl: "https://prediction-car-price.vercel.app/",
    description:
      "Led the development of a high-performance web application. Developed responsive UI components from Figma designs and integrated data with the backend team.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    period: "Aug 2024 — Oct 2024",
    title: "Bakery Shop",
    companyUrl: "https://www.comsci-rmutp.com/2568gp32/User/index.php",
    description:
      "Led the team in project management and task delegation. Developed a polished, well-structured frontend using HTML, CSS, and Tailwind CSS. Integrated backend systems and managed databases with PHP.",
    technologies: ["HTML", "CSS ", "Tailwind CSS", "PHP", "Figma"],
  },
  {
    period: "2022",
    title: "UX/UI Designer",
    description:
      "Designed high-fidelity wireframes and user interfaces using Figma. Structured the user experience (UX) and optimized layouts for intuitive usability. Iterated on designs based on feedback to achieve high-quality results.",
    technologies: ["Figma", "UX/UI Design"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 flex items-center mr-3 text-2xl font-bold text-foreground">
          <span className="font-mono text-sm font-normal text-primary"></span>
          Experience
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>

        <div className="mt-10 flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={exp.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-transparent p-6 transition-all hover:border-border hover:bg-card/50"
            >
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground md:pt-1">
                  {exp.period}
                </div>

                <div className="md:col-span-3">
                  <h3 className="mb-1 flex items-center gap-2 text-base font-medium text-foreground group-hover:text-primary">
                    {exp.title} 
                    <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
