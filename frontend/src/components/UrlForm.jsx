import { useState } from "react";
import API from "../services/api";
import ResultCard from "./ResultCard";
import QuestionBox from "./QuestionBox";


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


      let websiteUrl = url.trim();



      if (
        !websiteUrl.startsWith("http://") &&
        !websiteUrl.startsWith("https://")
      ) {

        websiteUrl = "https://" + websiteUrl;

      }




      const response = await API.post(
        "/scrape",
        {
          url: websiteUrl
        }
      );



      console.log(
        "Backend Response:",
        response.data
      );



      setResult(response.data);



    } 



    catch(error) {



      console.error(
        "Scraping Error:",
        error
      );



      if(error.response) {


        alert(
          error.response.data.detail ||
          "Backend error occurred"
        );


      }


      else {


        alert(
          "Cannot connect to backend. Make sure FastAPI is running."
        );


      }


    }



    finally {


      setLoading(false);


    }


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


            onChange={(e)=>setUrl(e.target.value)}



            className="
              flex-1
              border
              rounded-lg
              px-4
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "


            required


          />





          <button


            type="submit"


            disabled={loading}


            className="
              bg-blue-600
              text-white
              px-8
              rounded-lg
              hover:bg-blue-700
              disabled:bg-gray-400
            "


          >


            {
              loading
              ?
              "Analyzing..."
              :
              "Analyze"
            }



          </button>



        </form>






        {
          loading && (


            <div className="
              text-center
              text-blue-600
              font-semibold
              text-lg
            ">


              🔍 Scraping website and generating AI insights...


            </div>


          )
        }







        {
          result && (


            <>


              {/* Website Analysis Report */}


              <ResultCard
                data={result}
              />





              {/* RAG Question Answering */}


              <QuestionBox />



            </>


          )
        }




      </div>



    </section>


  );


}



export default UrlForm;