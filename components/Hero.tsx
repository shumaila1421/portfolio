export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(0,0,0,0.06),_transparent_35%)]" />

      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Available for opportunities
          </div>

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            Full Stack Web Developer
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            I build digital
            <br />
            experiences that <span className="text-gray-400">matter.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            I&apos;m Shumaila Riaz, a developer focused on building modern,
            responsive, and user-friendly web applications.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-black px-7 py-3.5 text-center text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-300 px-7 py-3.5 text-center text-sm font-medium transition hover:-translate-y-0.5 hover:bg-gray-100"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
