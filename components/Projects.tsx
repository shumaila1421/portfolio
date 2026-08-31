const projects = [
  {
    number: "01",
    status: "Completed",
    title: "Golden Bean Coffee Landing Page",
    description:
      "A responsive coffee shop landing page built with HTML, CSS, and JavaScript, featuring a clean layout and interactive elements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://coffee-website-landing-page-sage.vercel.app/",
  },
  {
    number: "02",
    status: "In Progress",
    title: "Study Abroad Dashboard",
    description:
      "A modern dashboard for managing study-abroad applications, students, universities, and documents with a responsive interface.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "03",
    status: "Team Project",
    title: "Sales & Inventory Management System",
    description:
      "A full-stack management system developed collaboratively during an internship to manage sales and inventory operations.",
    technologies: ["Team Development", "Full Stack"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-gray-100 px-6 py-24 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
              Projects
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Things I&apos;ve been building.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500">
            A selection of projects that reflect my learning, development
            experience, and problem-solving approach.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={`group rounded-3xl border border-gray-200 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                  {project.status}
                </span>

                <span className="text-sm text-gray-400">{project.number}</span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
                  >
                    View Live Demo ↗
                  </a>
                ) : (
                  <span className="text-sm font-medium text-gray-400">
                    Details coming soon →
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
