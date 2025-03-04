import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Briefcase,
  GraduationCap,
  Code,
  User,
  FileText,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <User className="h-5 w-5" />
            <span>Bautista Casañas</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#sobre-mi" className="text-sm font-medium hover:text-primary">
              Sobre mí
            </Link>
            <Link href="#experiencia" className="text-sm font-medium hover:text-primary">
              Experiencia
            </Link>
            <Link href="#educacion" className="text-sm font-medium hover:text-primary">
              Educación
            </Link>
            {/* <Link href="#proyectos" className="text-sm font-medium hover:text-primary">
              Proyectos
            </Link> */}
            <Link href="#contacto" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
          <Button
            asChild
            size="sm"
            className="hidden md:flex"
          >
            <a href="/CV.pdf" download="BautistaCasañas.pdf">
              <Download className="mr-2 h-4 w-4" />
              Descargar CV
            </a>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Menú</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="sobre-mi" className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hola, soy <span className="text-primary">Bautista Casañas</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Desarrollador Web Full Stack.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Buenos Aires, Argentina</span>
              </div>
              <div className="flex gap-4">
              <Button asChild>
                <a href="bauticasanas@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contáctame
                </a>
              </Button>
                <Button asChild variant="outline">
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Ver CV
                </a>
              </Button>

              </div>
              <div className="flex gap-4 pt-2">
                <Link href="https://github.com/BautistaCasanas" className="text-muted-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://www.linkedin.com/in/juan-bautista-casa%C3%B1as-05ab93207/" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary">
                <Image
                  src="/FOTO_CV_2025.JPG?height=320&width=320"
                  alt="Tu Foto"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-muted py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Mis Habilidades
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "HTML/CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Git",
                "SQL",
                "PHP",
                "Java"
              ].map((skill) => (
                <Card key={skill} className="border-none">
                  <CardContent className="p-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span className="font-medium">{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experiencia" className="container py-12 md:py-24">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Experiencia Laboral
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Desarrollador IT",
                company: "Bondarea",
                period: "2023 - Presente",
                description:
                  "Desarrollo de software, mantenimiento y soporte al equipo.",
              },
              {
                title: "Analista de datos",
                company: "Gobierno de la ciudad",
                period: "2022 - 2023",
                description:
                  "Análisis de datos.",
              }
            ].map((job, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  {index < 1 && <div className="h-full w-0.5 bg-border mt-2"></div>}
                </div>
                <div className="space-y-2 pb-8">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-medium">{job.company}</span>
                    <span>•</span>
                    <span>{job.period}</span>
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="educacion" className="bg-muted py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Educación</h2>
            <div className="space-y-8">
              {[
                {
                  degree: "Licenciatura en Sistemas",
                  institution: "UADE - Universidad Argentina de la Empresa",
                  period: "2022 - Presente",
                  description: "Especialización en desarrollo de software y sistemas de información.",
                },
                {
                  degree: "Full Stack Developer",
                  institution: "Coderhouse",
                  period: "2021",
                  description: "Curso intensivo de desarrollo web full stack.",
                },
              ].map((edu, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    {index < 1 && <div className="h-full w-0.5 bg-border mt-2"></div>}
                  </div>
                  <div className="space-y-2 pb-8">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="font-medium">{edu.institution}</span>
                      <span>•</span>
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        {/* <section id="proyectos" className="container py-12 md:py-24">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Proyectos Destacados
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-commerce App",
                description:
                  "Plataforma de comercio electrónico con carrito de compras, pagos y panel de administración.",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
              },
              {
                title: "Dashboard Analytics",
                description:
                  "Dashboard interactivo para visualización de datos con gráficos y reportes personalizados.",
                tech: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
              },
              {
                title: "App de Gestión de Tareas",
                description:
                  "Aplicación para gestionar tareas con funcionalidades de arrastrar y soltar, etiquetas y recordatorios.",
                tech: ["React", "Redux", "Firebase", "Material UI"],
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Proyecto ${index + 1}`}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}

        {/* Contact Section */}
        {/* <section id="contacto" className="bg-muted py-12 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-center">
                Contáctame
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                ¿Tienes un proyecto en mente o quieres hablar sobre oportunidades laborales? ¡Escríbeme!
              </p>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none">
                      Nombre
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium leading-none">
                    Asunto
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Asunto del mensaje"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tu mensaje aquí..."
                  />
                </div>
                <Button className="w-full">Enviar mensaje</Button>
              </form>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <User className="h-5 w-5" />
            <span>Bautista Casañas</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bautista Casañas. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/BautistaCasanas" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/juan-bautista-casa%C3%B1as-05ab93207/" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

