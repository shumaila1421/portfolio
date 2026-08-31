export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-gray-100 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something together.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I&apos;m always open to discussing new opportunities, projects, and
            collaborations.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="mt-8 inline-block rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
