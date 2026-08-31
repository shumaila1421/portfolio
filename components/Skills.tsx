export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <section
      id="skills"
      className="border-t border-gray-100 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
          Skills
        </p>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Technologies I work with.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-gray-200 px-5 py-6 text-center text-sm font-medium transition hover:-translate-y-1 hover:shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
