import React from "react";
import big1 from "../assets/images-page-9/page9 big1.jpg"
import big2 from "../assets/images-page-9/page9 big2.jpg"
import big3 from "../assets/images-page-9/page9 big3.jpg"
import big4 from "../assets/images-page-9/page9 big4.jpg"
import big5 from "../assets/images-page-9/page9 big5.jpg"
import imagespart10 from "../imagespart10";

function Page9(){
    return(
        <div>

             {/*page4 div1 */}
            <div className="flex flex-col md:flex-col flex-wrap gap-7 p-7 ">
                <h1 className="text-5xl  text-black font-sans">Bath & Laundry</h1>
                <p className="text-black">Brighten your bathroom and make it smarter in the process with a fabulous collection of bath & laundry essentials.</p>
               <img
                src={big1}
                alt="big1"
                />
            </div>

            <div className="flex justify-center items-center text-center ">
                <p className="text-2xl text-black font-bold font-sans">Shop By Categories</p>
            </div>

            {/*page4 div2/ */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-5 p-5">
                {imagespart10.slice(0,6).map((item4) => (
                    <img
                    key={item4.id}
                    src={item4.url}
                    alt="neha"
                    className="transition-transform duration-300 hover:scale-90"
                    />
                ))}
            </div>


             <div className="flex flex-wrap justify-center items-center text-center gap-5 p-5">
                <p className="text-2xl font-bold text-black">New Arrivals</p>
            </div>




            <div className="grid grid-cols-2 md:grid-cols-4 p-5 gap-5">
                {imagespart10.slice(6,10).map((item4 => (
                    <img 
                    key={item4.id}
                    src={item4.url}
                    alt="nissi"
                    />
                )))}
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
                {imagespart10.slice(10,14).map((item4) => (
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
                {imagespart10.slice(14,18).map((item4) => (
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
            
            <div className="flex flex-wrap gap-5 p-5">
                <img
                src={big5}
                alt="tjdjy"
                />
            </div>
           


        
          <div className="p-10">
        <hr className="w-full mx-auto  rounded-full " />
       </div>



        </div>
    )
}
export default Page9