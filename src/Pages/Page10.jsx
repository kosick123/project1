import React from "react";
import big1 from "../assets/images-page-10/page10 big1.jpg"
import big2 from "../assets/images-page-10/page10 big2.jpg"
import big3 from "../assets/images-page-10/page10 big3.jpg"
import big4 from "../assets/images-page-10/page10 big4.jpg"
import big5 from "../assets/images-page-10/page10 big5.jpg"
import big6 from "../assets/images-page-10/page10 big6.jpg"
import imagespart11 from "../imagespart11";

function Page10(){
    return(
        <div>

              {/*page4 div1 */}
            <div className="flex flex-col md:flex-col flex-wrap gap-7 p-7 ">
                <img
                src={big1}
                alt="big1"
                />
            </div>

            {/*page4 div2/ */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
                {imagespart11.slice(0,4).map((item4) => (
                    <img
                    key={item4.id}
                    src={item4.url}
                    alt="neha"
                    className="transition-transform duration-300 hover:scale-90"
                    />
                ))}
            </div>


            <div className="grid grid-cols-2 md:grid-cols-6 p-5 gap-5">
                {imagespart11.slice(4,10).map((item4 => (
                    <img 
                    key={item4.id}
                    src={item4.url}
                    alt="nissi"
                    className="transition-transform duration-300 hover:scale-90"
                    />
                )))}
            </div>

             <div className="flex flex-wrap justify-center items-center text-center gap-5 p-5">
                <p className="text-2xl font-bold text-black">Wedding Gift Ideas</p>
            </div>


             {/*page4 div3 */}
            <div className="flex flex-wrap p-5 gap-5">
                <img
                src={big2}
                alt="big2"
                />
            </div>


            {/* page4 div5 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
                {imagespart11.slice(10,14).map((item4) => (
                    <img
                    key={item4.id}
                    src={item4.url}
                    alt="nehaa"
                    />
                ))}
            </div>

            <div className="flex flex-wrap gap-5 p-5">
                <img
                src={big3}
                alt="big3"
                />
            </div>


            {/* page4 div6 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
                {imagespart11.slice(14,18).map((item4) => (
                    <img
                    key={item4.id}
                    src={item4.url}
                    alt="jsc"
                    />
                ))}
            </div>


            {/*page4 div7 */}
             <div className="flex flex-wrap gap-5 p-5">
                <img
                src={big4}
                alt="tqy"
                />
            </div>


             <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
                {imagespart11.slice(18,22).map((item4) => (
                    <img
                    key={item4.id}
                    src={item4.url}
                    alt="jsc"
                    />
                ))}
            </div>

            

             <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
                {imagespart11.slice(22,25).map((item4) => (
                    <img
                    key={item4.id}
                    src={item4.url}
                    alt="jsc"
                    />
                ))}
            </div>

            <div className="flex flex-wrap justify-center items-center text-center gap-5 p-5">
                <p className="text-2xl font-bold text-black">Kitchen Gift Ideas</p>
            </div>
            
            <div className="flex flex-wrap gap-5 p-5">
                <img
                src={big5}
                alt="tjdjy"
                />
            </div>


                <div className="flex flex-wrap justify-center items-center text-center gap-5 p-5">
                <p className="text-2xl font-bold text-black">Go-To Gifts</p>
            </div>
            
            
             <div className="flex flex-wrap gap-5 p-5">
                <img
                src={big6}
                alt="tjdjy"
                />
            </div>



            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
                {imagespart11.slice(25,29).map((item4) => (
                    <img
                    key={item4.id}
                    src={item4.url}
                    alt="jsc"
                    className="transition-transform duration-300 hover:scale-90"
                    />
                ))}
            </div>

   
          <div className="p-10">
        <hr className="w-full mx-auto  rounded-full " />
       </div>





        </div>
    )
}
export default Page10