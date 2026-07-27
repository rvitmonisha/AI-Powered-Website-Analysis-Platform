import { useEffect, useState } from "react";
import API from "../services/api";


function History(){

    const [history,setHistory] = useState([]);


    useEffect(()=>{

        loadHistory();

    },[]);



    const loadHistory = async()=>{

        try{

            const response = await API.get("/history");

            setHistory(response.data);

        }
        catch(error){

            console.log(error);

        }

    };




    return(

        <section className="py-16 bg-gray-100">


            <div className="max-w-5xl mx-auto px-6">


                <h1 className="
                text-4xl 
                font-bold 
                text-blue-700
                mb-10
                text-center
                ">

                    Website Analysis History

                </h1>




                {
                    history.map((item)=>(


                        <div
                        key={item.id}
                        className="
                        bg-white
                        rounded-xl
                        shadow-lg
                        p-6
                        mb-8
                        "
                        >



                            <div className="flex justify-between">


                                <h2 className="
                                text-2xl
                                font-bold
                                ">

                                    {item.title}

                                </h2>



                                <span className="
                                bg-blue-100
                                text-blue-700
                                px-4
                                py-2
                                rounded-full
                                font-semibold
                                ">

                                SEO:
                                {
                                    item.seo_score ?? 0
                                }/100


                                </span>


                            </div>





                            <p className="
                            text-blue-600
                            mt-2
                            ">

                                {item.url}

                            </p>





                            <hr className="my-5"/>





                            <details>


                                <summary className="
                                cursor-pointer
                                text-lg
                                font-semibold
                                text-gray-700
                                ">

                                    View AI Analysis

                                </summary>




                                <div className="
                                mt-5
                                text-gray-700
                                whitespace-pre-line
                                leading-7
                                ">

                                    {item.analysis}


                                </div>



                            </details>



                        </div>


                    ))
                }


            </div>


        </section>

    )

}


export default History;