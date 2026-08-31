export default function About() {
  return (
    <section
      id="about"
      className="border-t border-gray-100 px-6 py-24 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.5fr] md:items-center">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Curious mind.
            <br />
            <span className="text-gray-400">Creative developer.</span>
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-gray-600">
            I&apos;m a Full Stack Web Developer passionate about building
            modern, responsive, and user-friendly web applications. I enjoy
            solving problems, learning new technologies, and turning ideas into
            clean and functional digital experiences.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            I&apos;m continuously improving my skills through hands-on projects,
            collaboration, and real-world development experience. I&apos;m
            always looking for opportunities to learn, contribute, and grow as a
            developer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Problem Solving",
              "Responsive Design",
              "Clean Code",
              "Continuous Learning",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
