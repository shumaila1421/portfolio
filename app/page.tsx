import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section
          id="home"
          className="flex min-h-screen items-center justify-center px-6 pt-20"
        >
          <div className="x-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
              Full Stack Web Developer
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Hi, I&apos;m Shumaila Riaz.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              I build modern, responsive, and user-friendly web applications
              with a focus on clear design and meaningful user experiences.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-gray-300 px-7 py-3 text-sm font-medium transition hover:bg-gray-100"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                About Me
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Building my journey in web development.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                I&apos;m a Full Stack Web Developer passionate about building
                modern, responsive, and user-friendly web applications. I enjoy
                solving problems, learning new technologies, and turning ideas
                into clean and functional digital experiences.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                I&apos;m continuously improving my skills through hands-on
                projects, collaboration, and real-world development experience.
              </p>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="border-t border-gray-100 px-6 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <p className="b-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
              Skills
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Technologies I work with.
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {[
                "HTML",
                "CSS",
                "Bootstrap",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Git & GitHub",
              ].map((skill) => (
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
      </main>
    </>
  );
}
