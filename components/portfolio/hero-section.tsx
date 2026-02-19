"use client"

import { ArrowDown, Github, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Subtle background effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div
          className={`flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="mb-4 font-mono text-sm text-primary">
              {"Hello, I'm"}
            </p>

            <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              <span className="text-balance">Jakkrit Jongsupangpan</span>
            </h1>

            <h2 className="mb-6 text-3xl font-bold text-muted-foreground md:text-5xl">
              <span className="text-balance">Fullstack Developer</span>
            </h2>

            <p className="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {"A 3rd-year Computer Science student passionate about modern web development. I specialize in building beautiful, user-centric interfaces using Next.js, React, TypeScript, and Tailwind CSS. A strong team player eager to learn new technologies and grow into a Full-Stack Developer."}
            </p>

            {/* Social Links */}
          </div>

          {/* Profile Photo */}
          <div className="relative shrink-0">
            <div className="relative h-62 w-62 md:h-90 md:w-90">
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-primary/20" />
              <div className="absolute -inset-4 rounded-full border border-primary/10" />
              <Image
                src="/images/profile.png"
                alt="Profile photo"
                width={600}
                height={600}
                className="h-full w-full rounded-full object-cover shadow-lg ring-4 ring-background"
                priority
              />
            </div>  
          </div>
        </div>

      </div>
    </section>
  )
}
