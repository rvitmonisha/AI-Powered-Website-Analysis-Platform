import { useState } from "react";
import API from "../services/api";

function UrlForm() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url.trim()) {
      alert("Please enter a website URL");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await API.post("/scrape", {
        url: url.trim(),
      });

      console.log("Backend Response:", response.data);
      setResult(response.data);

    } catch (error) {
      console.error("Scraping Error:", error);

      if (error.response) {
        alert(
          error.response.data.detail ||
          "Backend error occurred"
        );
      } else {
        alert(
          "Cannot connect to backend. Make sure FastAPI is running."
        );
      }
    }

    setLoading(false);
  };

  return (
    <section className="py-12 bg-gray-50 min-h-screen">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">
          AI Website Intelligence Platform
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex gap-4 mb-8"
        >

          <input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-8 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>

        </form>

        {loading && (

          <div className="text-center text-blue-600 font-semibold text-lg">
            🔍 Scraping website and generating AI insights...
          </div>

        )}

        {result && (

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h3 className="text-3xl font-bold mb-6">
              📄 Website Report
            </h3>

            <div className="mb-6">
              <h4 className="font-bold text-lg">
                Website Title
              </h4>

              <p className="text-gray-700">
                {result.title || "No title found"}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg">
                URL
              </h4>

              <p className="text-blue-600 break-all">
                {result.url}
              </p>
            </div>

            {result.headings && result.headings.length > 0 && (

              <div className="mb-6">

                <h4 className="font-bold text-lg">
                  Main Headings
                </h4>

                <ul className="list-disc ml-6">

                  {result.headings.map((heading, index) => (

                    <li key={index}>
                      {heading}
                    </li>

                  ))}

                </ul>

              </div>

            )}

            <div className="mb-6">

              <h4 className="font-bold text-lg">
                Extracted Content
              </h4>

              <p className="whitespace-pre-line text-gray-700">
                {result.content}
              </p>

            </div>

            {result.analysis && (

              <div className="bg-gray-100 rounded-lg p-5">

                <h4 className="text-2xl font-bold mb-4">
                  🤖 AI Analysis
                </h4>

                <p className="whitespace-pre-line text-gray-700">
                  {result.analysis}
                </p>

              </div>

            )}

            {result.seo && (

              <div className="mt-8">

                <h4 className="text-2xl font-bold mb-5">
                  📊 SEO Report
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                  <div className="bg-green-100 rounded-lg shadow p-5">
                    <p className="text-gray-600">
                      SEO Score
                    </p>

                    <h2 className="text-4xl font-bold text-green-700">
                      {result.seo.score}/100
                    </h2>
                  </div>

                  <div className="bg-white rounded-lg shadow p-5">
                    <p className="text-gray-600">
                      Meta Description
                    </p>

                    <p className="mt-2">
                      {result.seo.meta_description}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg shadow p-5">
                    <p className="text-gray-600">
                      H1 Tags
                    </p>

                    <h2 className="text-3xl font-bold">
                      {result.seo.h1_count}
                    </h2>
                  </div>
                                    <div className="bg-white rounded-lg shadow p-5">
                    <p className="text-gray-600">
                      Images
                    </p>

                    <h2 className="text-3xl font-bold">
                      {result.seo.total_images}
                    </h2>
                  </div>

                  <div className="bg-white rounded-lg shadow p-5">
                    <p className="text-gray-600">
                      Images with Alt
                    </p>

                    <h2 className="text-3xl font-bold">
                      {result.seo.images_with_alt}
                    </h2>
                  </div>

                  <div className="bg-white rounded-lg shadow p-5">
                    <p className="text-gray-600">
                      Internal Links
                    </p>

                    <h2 className="text-3xl font-bold">
                      {result.seo.internal_links}
                    </h2>
                  </div>

                  <div className="bg-white rounded-lg shadow p-5">
                    <p className="text-gray-600">
                      External Links
                    </p>

                    <h2 className="text-3xl font-bold">
                      {result.seo.external_links}
                    </h2>
                  </div>

                </div>

              </div>

            )}

            {/* Technology Stack */}

            {result.technologies &&
              result.technologies.length > 0 && (

              <div className="mt-8">

                <h4 className="text-2xl font-bold mb-5">
                  💻 Technology Stack
                </h4>

                <div className="flex flex-wrap gap-3">

                  {result.technologies.map((tech, index) => (

                    <span
                      key={index}
                      className="bg-blue-600 text-white px-4 py-2 rounded-full shadow font-semibold hover:bg-blue-700 transition"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            )}

          </div>

        )}

      </div>

    </section>
  );
}

export default UrlForm;