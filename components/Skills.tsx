const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "npm", "REST APIs"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-gray-100 px-6 py-24 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tools and technologies I use.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Technologies I&apos;ve been working with while building projects and
            developing my skills.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold">{group.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
