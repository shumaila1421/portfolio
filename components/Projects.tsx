export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-gray-100 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
          Projects
        </p>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Things I&apos;ve been building.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                In Progress
              </span>
              <span className="text-sm text-gray-400">01</span>
            </div>

            <h3 className="text-2xl font-semibold">Study Abroad Dashboard</h3>

            <p className="mt-4 leading-7 text-gray-600">
              A modern dashboard for managing study-abroad applications,
              students, universities, and documents with a responsive interface.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                Team Project
              </span>
              <span className="text-sm text-gray-400">02</span>
            </div>

            <h3 className="text-2xl font-semibold">
              Sales & Inventory Management System
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              A team-based management system developed during an internship to
              handle sales and inventory-related operations.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                Team Development
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                Full Stack
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
