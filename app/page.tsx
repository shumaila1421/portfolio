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
      </main>
    </>
  );
}
