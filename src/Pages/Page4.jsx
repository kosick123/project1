import React from "react";
import big1 from "../assets/images-page-4/page4 big1.jpg";
import big2 from "../assets/images-page-4/page4 big2.jpg";
import big3 from "../assets/images-page-4/page4 big3.jpg";
import imagespart5 from "../imagespart5";

function Page4(){
    return(
        <div>

            {/*page4 div1 */}
            <div className="flex flex-col md:flex-col flex-wrap gap-7 p-7 ">
                <h1 className="text-5xl  text-black font-sans">Organised Living</h1>
                <p className="text-black">Inspired choices for all your Organisers needs. For any occasion, for every occasion</p>
                <img 
                src={big1}
                alt="big1"
                />
            </div>

            <div className="flex justify-center items-center text-center ">
                <p className="text-2xl text-black font-bold font-sans">Shop By Categories</p>
            </div>

            {/*page4 div2/ */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5 p-5">
                {imagespart5.slice(0,5).map((item4) => (
                    <img
                    key={item4.id}
                    src={item4.url}
                    alt="neha"
                    className="transition-transform duration-300 hover:scale-90"
                    />
                ))}
            </div>

            {/*page4 div3 */}
            <div className="flex flex-wrap p-5 gap-5">
                <img
                src={big2}
                alt="big2"
                />
            </div>

            {/* pag4 div4 */}
            <div className="grid grid-cols-2 md:grid-cols-4 p-5 gap-5">
                {imagespart5.slice(5,9).map((item4 => (
                    <img 
                    key={item4.id}
                    src={item4.url}
                    alt="nissi"
                    />
                )))}
            </div>

            <div className="flex flex-wrap justify-center items-center text-center">
                <p className="text-2xl text-black font-bold">Home Essentials</p>
            </div>


            {/* page4 div5 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
                {imagespart5.slice(9,12).map((item4) => (
                    <img
                    key={item4.id}
                    src={item4.url}
                    alt="nehaa"
                    />
                ))}
            </div>

            <div className="flex flex-wrap justify-center items-center text-center p-5">
                <p className="text-2xl text-black font-bold">Living Room Organisers</p>
            </div>


            {/* page4 div6 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
                {imagespart5.slice(12,16).map((item4) => (
                    <img
                    key={item4.id}
                    src={item4.url}
                    alt="jsc"
                    />
                ))}
            </div>

            <div className="flex flex-wrap justify-center items-center text-center p-5 ">
                <p className="text-black font-bold text-2xl">Bathroom Organisers</p>
            </div>


            <div className="flex flex-wrap gap-5 p-5">
                <img
                src={big3}
                alt="tqy"
                />
            </div>


            {/*page4 div7 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
                {imagespart5.slice(16,19).map((item4) => (
                        <img 
                        key={item4.id}
                        src={item4.url}
                        alt="imgwe"
                        />
                       
                ))}
            </div>


            <div className="flex flex-wrap justify-center items-center text-center gap-5 p-5">
                <p className="text-black text-2xl font-bold">Bedroom Organisers</p>
            </div>

                 {/*page4 div8 */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
                {imagespart5.slice(19,23).map((item4) => (
                        <img 
                        key={item4.id}
                        src={item4.url}
                        alt="imgwe"
                        />
                       
                ))}
            </div>

        
          <div className="p-10">
        <hr className="w-full mx-auto  rounded-full " />
       </div>


        </div>
    )
}
export default Page4