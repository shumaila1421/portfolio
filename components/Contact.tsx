export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-gray-100 px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something together.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            I&apos;m always open to discussing new opportunities, projects, and
            collaborations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/shumaila1421"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-gray-100"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/shumaila-riaz-56ab30354/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-gray-100"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
