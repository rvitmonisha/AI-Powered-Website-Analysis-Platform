function Hero() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h1 className="text-5xl font-bold text-gray-800">
          AI Website Intelligence Platform
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Scrape any website, generate intelligent summaries,
          and ask questions using AI-powered Retrieval-Augmented Generation (RAG).
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Start Scraping
          </button>

          <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;