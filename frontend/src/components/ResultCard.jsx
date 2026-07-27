import ReactMarkdown from "react-markdown";


function ResultCard({ data }) {

  return (
    <div className="mt-10 space-y-6">


      {/* Website Information */}

      <div className="bg-white shadow-lg rounded-xl p-6">

        <h2 className="text-2xl font-bold text-blue-700">
          Website Information
        </h2>

        <p className="mt-4">
          <b>Title:</b> {data.title || "No title found"}
        </p>

        <p className="break-all">
          <b>URL:</b> {data.url}
        </p>

      </div>




      {/* AI Analysis */}

      <div className="bg-white shadow-lg rounded-xl p-6">

        <h2 className="text-2xl font-bold text-blue-700">
          AI Analysis
        </h2>


        <div className="mt-4 text-gray-700 leading-relaxed">

          <ReactMarkdown>
            {data.analysis}
          </ReactMarkdown>

        </div>

      </div>





      {/* Technology Stack */}

      <div className="bg-white shadow-lg rounded-xl p-6">

        <h2 className="text-2xl font-bold text-blue-700">
          Technology Stack
        </h2>


        <div className="flex flex-wrap gap-3 mt-4">


          {data.technologies && data.technologies.length > 0 ? (

            data.technologies.map((tech,index)=>(

              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold"
              >
                {tech}
              </span>

            ))

          ) : (

            <p className="text-gray-500">
              No technologies detected
            </p>

          )}


        </div>

      </div>







      {/* SEO Report */}

      <div className="bg-white shadow-lg rounded-xl p-6">


        <h2 className="text-2xl font-bold text-blue-700">
          SEO Report
        </h2>



        {data.seo && (

          <>

          <div className="mt-5">


            <div className="flex justify-between mb-2">

              <span className="font-semibold">
                SEO Score
              </span>

              <span className="font-bold">
                {data.seo.score}/100
              </span>

            </div>



            <div className="w-full bg-gray-200 rounded-full h-4">


              <div
                className="bg-green-500 h-4 rounded-full"
                style={{
                  width: `${data.seo.score}%`
                }}
              >

              </div>


            </div>


          </div>





          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">



            <div className="bg-gray-50 p-4 rounded-lg">

              <b>Meta Description</b>

              <p className="mt-2 text-gray-700">
                {data.seo.meta_description || "Not Found"}
              </p>

            </div>




            <div className="bg-gray-50 p-4 rounded-lg">

              <b>H1 Tags</b>

              <p className="text-2xl font-bold mt-2">
                {data.seo.h1_count}
              </p>

            </div>





            <div className="bg-gray-50 p-4 rounded-lg">

              <b>Total Images</b>

              <p className="text-2xl font-bold mt-2">
                {data.seo.total_images}
              </p>

            </div>





            <div className="bg-gray-50 p-4 rounded-lg">

              <b>Images with ALT</b>

              <p className="text-2xl font-bold mt-2">
                {data.seo.images_with_alt}
              </p>

            </div>





            <div className="bg-gray-50 p-4 rounded-lg">

              <b>Internal Links</b>

              <p className="text-2xl font-bold mt-2">
                {data.seo.internal_links}
              </p>

            </div>





            <div className="bg-gray-50 p-4 rounded-lg">

              <b>External Links</b>

              <p className="text-2xl font-bold mt-2">
                {data.seo.external_links}
              </p>

            </div>



          </div>

          </>

        )}

      </div>








      {/* Website Statistics */}


      <div className="bg-white shadow-lg rounded-xl p-6">


        <h2 className="text-2xl font-bold text-blue-700">
          Website Statistics
        </h2>



        {data.statistics && (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">


          <div className="bg-gray-50 p-5 rounded-lg text-center">

            <p className="text-gray-600">
              Words
            </p>

            <h3 className="text-3xl font-bold">
              {data.statistics.word_count}
            </h3>

          </div>





          <div className="bg-gray-50 p-5 rounded-lg text-center">

            <p className="text-gray-600">
              Paragraphs
            </p>

            <h3 className="text-3xl font-bold">
              {data.statistics.paragraph_count}
            </h3>

          </div>





          <div className="bg-gray-50 p-5 rounded-lg text-center">

            <p className="text-gray-600">
              Reading Time
            </p>

            <h3 className="text-3xl font-bold">
              {data.statistics.reading_time} min
            </h3>

          </div>


        </div>

        )}


      </div>



    </div>
  );
}


export default ResultCard;