"use client"

import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 flex items-center mr-3 text-2xl font-bold text-foreground">
          <span className="font-mono text-sm font-normal text-primary"></span>
          About Me
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="space-y-4 text-lg text-gray-600">
              <p className="text-base leading-relaxed text-muted-foreground">
                I am a 3rd-year Computer Science student with a strong passion for developing modern web applications.
              </p>
              
              <p className="text-base leading-relaxed text-muted-foreground">
                I am highly proficient in utilizing Next.js, React, TypeScript, and Tailwind CSS to create visually appealing and user-friendly interfaces.
              </p>
              
              <p className="text-base leading-relaxed text-muted-foreground">
                Equipped with solid problem-solving skills and a collaborative mindset, I am constantly eager to learn new technologies and am fully committed to advancing my career as a Full-Stack Developer.
              </p>
          </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-2 flex items-center gap-2 text-primary">
                <GraduationCap className="h-4 w-4" />
                <span className="text-sm font-medium">Education</span>
              </div>
              <p className="text-sm text-foreground">Computer Science</p>
              <p className="text-xs text-muted-foreground">Rajamangala University of Technology Phra Nakhon</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-2 flex items-center gap-2 text-primary">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-medium">Location</span>
              </div>
              <p className="text-sm text-foreground">Bangkok, Thailand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
