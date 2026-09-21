"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-bold text-white"
          >
            Riyaz<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>

            <a href="#education" className="transition hover:text-white">
              Education
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 px-3 py-2 text-lg text-gray-300 transition hover:bg-white/10 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-black px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-sm text-gray-300">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-white"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-white"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-white"
              >
                Projects
              </a>

              <a
                href="#experience"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-white"
              >
                Experience
              </a>

              <a
                href="#education"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-white"
              >
                Education
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-24">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
              Software Engineer
            </p>

            <h2 className="text-5xl font-bold leading-tight text-white md:text-7xl">
              Hi, I'm <span className="text-blue-500">Riyaz</span>
            </h2>

            <h3 className="mt-4 text-2xl font-semibold text-gray-300 md:text-3xl">
              Backend & Full-Stack Developer
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400 lg:mx-0">
              I build reliable backend and full-stack applications using Java,
              Spring Boot, C#, ASP.NET Core, React and modern database
              technologies.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="rounded-lg bg-blue-600 px-7 py-3.5 font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                View My Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 px-7 py-3.5 font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                View Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500 lg:justify-start">
              <a
                href="https://github.com/MOHAMMED-RIYAZ"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/mohammedriyazba564721b"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:riyazkarnad5@gmail.com"
                className="transition hover:text-white"
              >
                Email
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative h-64 w-64 overflow-hidden rounded-full border border-white/10 bg-zinc-900 shadow-2xl md:h-80 md:w-80">
                <img
                  src="/photo.png"
                  alt="Mohammed Riyaz"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ABOUT */}
      {/* ========================================================= */}

      <section id="about" className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Building software with purpose.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I'm a Computer Science Engineer and Software Engineer with
            professional experience in backend development. I enjoy building
            APIs, working with databases, solving technical problems and
            learning modern software engineering technologies.
          </p>

          {/* Quick Stats */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-3xl font-bold text-white">1+</p>
              <p className="mt-2 text-sm text-gray-500">
                Year Professional Experience
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="mt-2 text-sm text-gray-500">Projects Built</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-6">
              <p className="text-3xl font-bold text-white">8.64</p>
              <p className="mt-2 text-sm text-gray-500">Engineering CGPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SKILLS */}
      {/* ========================================================= */}

      <section id="skills" className="bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
              Skills
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Technologies I work with
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              A collection of technologies and tools I use to build backend,
              full-stack and database-driven applications.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Backend */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-7 transition duration-300 hover:border-blue-500/40">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  ⚙
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Backend Development
                  </h3>

                  <p className="text-sm text-gray-500">
                    APIs & server-side applications
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Java",
                  "Spring Boot",
                  "Spring Security",
                  "C#",
                  "ASP.NET Core",
                  "NodeJS",
                  "REST API",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-black px-4 py-2 text-sm text-gray-300 transition hover:border-blue-500/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-7 transition duration-300 hover:border-purple-500/40">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400">
                  ◈
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Frontend Development
                  </h3>

                  <p className="text-sm text-gray-500">Modern web interfaces</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript",
                  "TypeScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-black px-4 py-2 text-sm text-gray-300 transition hover:border-purple-500/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-7 transition duration-300 hover:border-green-500/40">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-xl text-green-400">
                  DB
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">Databases</h3>

                  <p className="text-sm text-gray-500">
                    Relational & graph databases
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "MySQL",
                  "SQL",
                  "MongoDB",
                  "Neo4j",
                  "Memgraph",
                  "ArangoDB",
                  "FalkorDB",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-black px-4 py-2 text-sm text-gray-300 transition hover:border-green-500/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Cloud */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-7 transition duration-300 hover:border-orange-500/40">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-400">
                  DEV
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Tools & Cloud
                  </h3>

                  <p className="text-sm text-gray-500">
                    Development & deployment
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Git",
                  "GitHub",
                  "Docker",
                  "Maven",
                  "Bruno",
                  "Postman",
                  "Node.js",
                  "AWS",
                  "GCP",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-black px-4 py-2 text-sm text-gray-300 transition hover:border-orange-500/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Concepts */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-900 p-7">
            <h3 className="text-xl font-bold text-white">Core Concepts</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "Object-Oriented Programming",
                "Data Structures & Algorithms",
                "Design Patterns",
                "REST Architecture",
                "JWT Authentication",
                "Role-Based Authorization",
                "Microservices",
                "API Design",
                "Database Design",
                "Git Workflow",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400 transition hover:border-blue-500/40 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PROJECTS */}
      {/* ========================================================= */}

      <section id="projects" className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
              Projects
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Things I've built
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              A selection of projects demonstrating my experience with backend
              development, full-stack applications, databases, security and
              software engineering.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Graph Database */}
            <article className="group flex flex-col rounded-2xl border border-white/10 bg-zinc-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-400">
                  DB
                </div>

                <a
                  href="https://github.com/MOHAMMED-RIYAZ/graph-database-cloud-benchmark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition hover:text-white"
                >
                  ↗
                </a>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Graph Database Cloud Benchmark
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                A benchmarking project comparing multiple graph databases using
                a citation-network dataset containing 12,823 nodes and 120,000
                relationships.
              </p>

              <p className="mt-3 leading-7 text-gray-400">
                Evaluated graph traversals, point lookups, indexed lookups,
                aggregation and concurrent workloads across Neo4j, Memgraph,
                ArangoDB and FalkorDB.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Python",
                  "Neo4j",
                  "Memgraph",
                  "ArangoDB",
                  "FalkorDB",
                  "Docker",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black px-3 py-1 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-7">
                <a
                  href="https://github.com/MOHAMMED-RIYAZ/graph-database-cloud-benchmark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-blue-400 transition hover:text-blue-300"
                >
                  View Project →
                </a>
              </div>
            </article>

            {/* ESRMS */}
            <article className="group flex flex-col rounded-2xl border border-white/10 bg-zinc-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-500/40">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-sm font-bold text-orange-400">
                  API
                </div>

                <a
                  href="https://github.com/MOHAMMED-RIYAZ/esrms-project-updated"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition hover:text-white"
                >
                  ↗
                </a>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Enterprise Service Request Management System
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                An enterprise service request management backend built with
                Spring Boot. Users can raise and track service requests while
                administrators can manage and update requests.
              </p>

              <p className="mt-3 leading-7 text-gray-400">
                Implemented JWT authentication, role-based authorization and
                secured APIs using Spring Security.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Java 17",
                  "Spring Boot",
                  "Spring Security",
                  "JWT",
                  "MySQL",
                  "Maven",
                  "Logback",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black px-3 py-1 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-7">
                <a
                  href="https://github.com/MOHAMMED-RIYAZ/esrms-project-updated"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-blue-400 transition hover:text-blue-300"
                >
                  View Project →
                </a>
              </div>
            </article>

            {/* Lead Management */}
            <article className="group flex flex-col rounded-2xl border border-white/10 bg-zinc-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-sm font-bold text-purple-400">
                  CRM
                </div>

                <a
                  href="https://github.com/MOHAMMED-RIYAZ/LeadManagementSystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition hover:text-white"
                >
                  ↗
                </a>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Lead Management System
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                A full-stack lead management application with a dedicated
                backend API and React frontend for managing lead-related
                business operations.
              </p>

              <p className="mt-3 leading-7 text-gray-400">
                Demonstrates API-driven development, backend services, frontend
                integration and full-stack application structure.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["C#", "ASP.NET Core", "Web API", "React", "REST API"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black px-3 py-1 text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              <div className="mt-auto pt-7">
                <a
                  href="https://github.com/MOHAMMED-RIYAZ/LeadManagementSystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-blue-400 transition hover:text-blue-300"
                >
                  View Project →
                </a>
              </div>
            </article>

            {/* Employee Management */}
            <article className="group flex flex-col rounded-2xl border border-white/10 bg-zinc-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-2xl hover:shadow-green-500/10">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-sm font-bold text-green-400">
                  EMS
                </div>

                {/* GitHub Link */}
                <a
                  href="https://github.com/MOHAMMED-RIYAZ/EmployeeManagementSystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Employee Management System on GitHub"
                  className="text-gray-500 transition hover:text-white"
                >
                  ↗
                </a>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Employee Management System
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                An employee management application designed to manage employee
                information and perform common employee-related operations.
              </p>

              <p className="mt-3 leading-7 text-gray-400">
                Demonstrates CRUD operations, backend development, database
                interaction and application logic.
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Java", "CRUD", "Database", "Backend"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black px-3 py-1 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <div className="mt-auto pt-7">
                <a
                  href="https://github.com/MOHAMMED-RIYAZ/EmployeeManagementSystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition hover:text-white"
                >
                  View Project
                  <span>→</span>
                </a>
              </div>
            </article>

            {/* Ecommerce */}
            <article className="group flex flex-col rounded-2xl border border-white/10 bg-zinc-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-pink-500/40 md:col-span-2">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-sm font-bold text-pink-400">
                  🛒
                </div>

                <a
                  href="https://github.com/MOHAMMED-RIYAZ/Ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 transition hover:text-white"
                >
                  ↗
                </a>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Ecommerce Application
              </h3>

              <p className="mt-4 max-w-4xl leading-7 text-gray-400">
                A MERN stack e-commerce application demonstrating full-stack web
                development with React, Node.js, Express.js and MongoDB.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "MongoDB",
                  "Express.js",
                  "React",
                  "Node.js",
                  "JavaScript",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black px-3 py-1 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <a
                  href="https://github.com/MOHAMMED-RIYAZ/Ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-blue-400 transition hover:text-blue-300"
                >
                  View Project →
                </a>
              </div>
            </article>
          </div>

          {/* GitHub CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://github.com/MOHAMMED-RIYAZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 font-medium text-white transition hover:border-blue-500/50 hover:bg-white/5"
            >
              View More on GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* EXPERIENCE */}
      {/* ========================================================= */}

      <section id="experience" className="bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
              Experience
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Where I've worked
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              My professional experience in software development and backend
              engineering.
            </p>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-3 top-2 hidden h-full w-px bg-white/10 md:block" />

            <div className="relative md:pl-12">
              <div className="absolute left-0 top-2 hidden h-7 w-7 items-center justify-center rounded-full border border-blue-500/40 bg-black md:flex">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8 transition duration-300 hover:border-blue-500/40">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-blue-500">
                      Tata Consultancy Services
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      System Engineer
                    </h3>

                    <p className="mt-2 text-gray-500">Bangalore, India</p>
                  </div>

                  <span className="w-fit rounded-full border border-white/10 bg-black px-4 py-2 text-sm text-gray-400">
                    2025 — Present
                  </span>
                </div>

                <p className="mt-7 max-w-4xl leading-8 text-gray-400">
                  Working as a backend-focused software engineer, contributing
                  to API development, application maintenance, debugging and
                  implementation of software solutions.
                </p>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                    Focus Areas
                  </h4>

                  <ul className="mt-4 space-y-3 text-gray-400">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      Backend development and REST API implementation.
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      Working with application logic, databases and API
                      integrations.
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      Debugging issues and supporting application maintenance.
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      Collaborating with team members during software
                      development and problem solving.
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                    Technologies
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "C#",
                      "ASP.NET Core",
                      "Web API",
                      "SQL",
                      "Git",
                      "Backend Development",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-black px-3 py-1.5 text-sm text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* EDUCATION */}
      {/* ========================================================= */}

      <section id="education" className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
              Education
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Academic Background
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              My academic foundation in computer science and software
              engineering.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-zinc-900 p-8 transition duration-300 hover:border-blue-500/40">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  🎓
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-blue-500">
                    Bachelor's Degree
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Bachelor of Engineering
                  </h3>

                  <p className="mt-2 text-lg text-gray-300">
                    Computer Science and Engineering
                  </p>

                  <p className="mt-3 text-gray-500">
                    Sahyadri College of Engineering and Management
                  </p>
                </div>
              </div>

              <div className="w-fit rounded-full border border-white/10 bg-black px-4 py-2 text-sm text-gray-400">
                2020 — 2024
              </div>
            </div>

            <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black p-5">
                <p className="text-sm text-gray-500">Degree</p>

                <p className="mt-1 font-medium text-white">
                  B.E. Computer Science & Engineering
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black p-5">
                <p className="text-sm text-gray-500">CGPA</p>

                <p className="mt-1 font-medium text-white">8.64 / 10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT */}
      {/* ========================================================= */}

      <section id="contact" className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
              Contact
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Let's build something together.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              I'm open to software engineering opportunities, interesting
              projects and collaborations. Feel free to reach out.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Email */}
            <a
              href="mailto:riyazkarnad5@gmail.com"
              className="group rounded-2xl border border-white/10 bg-black p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                @
              </div>

              <h3 className="mt-4 font-semibold text-white">Email</h3>

              <p className="mt-2 break-all text-sm text-gray-500 group-hover:text-gray-300">
                riyazkarnad5@gmail.com
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/MOHAMMED-RIYAZ"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-black p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                GH
              </div>

              <h3 className="mt-4 font-semibold text-white">GitHub</h3>

              <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-300">
                @MOHAMMED-RIYAZ
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohammedriyazba564721b"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-black p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                in
              </div>

              <h3 className="mt-4 font-semibold text-white">LinkedIn</h3>

              <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-300">
                Connect with me
              </p>
            </a>

            {/* Resume */}
            <a
              href="/Riyaz_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-black p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                CV
              </div>

              <h3 className="mt-4 font-semibold text-white">Resume</h3>

              <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-300">
                View my resume
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="mailto:riyazkarnad5@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 font-medium text-white transition hover:bg-blue-500"
            >
              Get In Touch
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Mohammed Riyaz. All rights reserved.
      </footer>
    </main>
  );
}
