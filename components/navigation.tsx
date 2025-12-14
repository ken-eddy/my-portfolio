"use client"

import { useState, useEffect } from "react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" },
    )

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hidden lg:fixed lg:left-0 lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-center lg:pl-24">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={`group flex items-center gap-4 text-sm font-medium uppercase tracking-widest transition-all ${
                activeSection === item.href.slice(1)
                  ? "text-secondary-foreground"
                  : "text-muted-foreground hover:text-secondary-foreground"
              }`}
            >
              <span
                className={`h-px transition-all ${
                  activeSection === item.href.slice(1)
                    ? "w-16 bg-secondary-foreground"
                    : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-secondary-foreground"
                }`}
              />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
