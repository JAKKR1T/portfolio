"use client"

import { Mail, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 font-mono text-sm text-primary">{"What's Next?"}</p>

        <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
          <span className="text-balance">Get In Touch</span>
        </h2>

        <p className="mb-10 text-base leading-relaxed text-muted-foreground">
          {"I'm currently looking for internship opportunities. Whether you have a position available, a question, or just want to say hi, my inbox is always open. I'll try my best to get back to you!"}
        </p>

        <div className="inline-flex items-center gap-2 rounded-lg border border-primary bg-transparent px-8 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/10">
          jakkrit-jo@rmutp.ac.th  
        </div>

        
      </div>
    </section>
  )
}
