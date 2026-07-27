import { useState } from "react";
import API from "../services/api";


function QuestionBox() {


  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);



  const askQuestion = async () => {


    if (!question.trim()) {

      alert("Please enter a question");

      return;

    }



    const userQuestion = question;



    setMessages((prev)=>[

      ...prev,

      {
        role:"user",
        text:userQuestion
      }

    ]);



    setQuestion("");

    setLoading(true);




    try {


      const response = await API.post(
        "/ask",
        {
          question:userQuestion
        }
      );



      setMessages((prev)=>[

        ...prev,

        {
          role:"ai",
          text:response.data.answer
        }

      ]);



    }


    catch(error){


      console.error(error);



      setMessages((prev)=>[

        ...prev,

        {
          role:"ai",
          text:"Sorry, I could not find an answer."
        }

      ]);



    }



    finally{

      setLoading(false);

    }


  };





  const handleKeyPress=(e)=>{


    if(e.key==="Enter"){

      askQuestion();

    }


  };






  return (

    <div className="bg-white shadow-lg rounded-xl p-6 mt-8">


      <h2 className="text-2xl font-bold text-blue-700 mb-5">

        🤖 Ask AI About This Website

      </h2>





      <div className="
        h-80
        overflow-y-auto
        bg-gray-50
        rounded-lg
        p-4
        space-y-4
      ">



        {
          messages.length===0 && (


            <p className="text-gray-500 text-center">

              Ask questions about the analyzed website

            </p>


          )
        }






        {
          messages.map((msg,index)=>(


            <div

              key={index}

              className={
                
                msg.role==="user"

                ?

                "flex justify-end"

                :

                "flex justify-start"

              }

            >



              <div

                className={

                  msg.role==="user"

                  ?

                  "bg-blue-600 text-white px-4 py-3 rounded-xl max-w-lg"

                  :

                  "bg-gray-200 text-gray-800 px-4 py-3 rounded-xl max-w-lg"

                }

              >


                <b>

                  {
                    msg.role==="user"
                    ?
                    "You"
                    :
                    "AI"
                  }

                </b>


                <p className="mt-1 whitespace-pre-line">

                  {msg.text}

                </p>



              </div>



            </div>


          ))

        }






        {
          loading && (


            <p className="text-blue-600">

              AI is thinking...

            </p>


          )
        }




      </div>







      <div className="flex gap-3 mt-5">



        <input

          type="text"

          placeholder="Ask something like: What is this website used for?"

          value={question}

          onChange={(e)=>setQuestion(e.target.value)}

          onKeyDown={handleKeyPress}


          className="
            flex-1
            border
            rounded-lg
            px-4
            py-3
          "

        />





        <button

          onClick={askQuestion}

          className="
            bg-blue-600
            text-white
            px-6
            rounded-lg
            hover:bg-blue-700
          "

        >

          Ask


        </button>



      </div>






      {
        messages.length>0 && (


          <button

            onClick={()=>setMessages([])}

            className="
              mt-4
              text-red-600
              hover:underline
            "

          >

            Clear Chat

          </button>


        )
      }



    </div>


  );

}


export default QuestionBox;