import React from "react";
import big1 from "../assets/images-page-5/page5 big1.jpg";
import big2 from "../assets/images-page-5/page5 big2.jpg";
import big3 from "../assets/images-page-5/page5 big3.jpg";
import big4 from "../assets/images-page-5/page5 big4.jpg";
import big5 from "../assets/images-page-5/page5 big5.jpg";
import big6 from "../assets/images-page-5/page5 big6.jpg";
import imagespart6 from "../imagespart6";

function Page5(){
    return(
        <div>

              {/*page4 div1 */}
            <div className="flex flex-col md:flex-col flex-wrap gap-7 p-7 ">
                <h1 className="text-5xl  text-black font-sans">Decor</h1>
                <p className="text-black">Captivating designs that add beauty to every nook and corner of your home</p>
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
                {imagespart6.slice(0,6).map((item4) => (
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

            <div className="flex flex-wrap justify-center items-center text-center gap-5 p-5">
                <p className="text-2xl font-bold text-black">New Arrivals</p>
            </div>

            {/* pag4 div4 */}
            <div className="grid grid-cols-2 md:grid-cols-4 p-5 gap-5">
                {imagespart6.slice(6,10).map((item4 => (
                    <img 
                    key={item4.id}
                    src={item4.url}
                    alt="nissi"
                    />
                )))}
            </div>

            <div className="flex flex-wrap gap-5 p-5">
                <img
                src={big3}
                alt="big3"
                />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5 p-5">
                <p className="text-black text-2xl font-bold">Online Exclusives</p>
            </div>


            {/* page4 div5 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
                {imagespart6.slice(10,14).map((item4) => (
                    <img
                    key={item4.id}
                    src={item4.url}
                    alt="nehaa"
                    />
                ))}
            </div>

            <div className="flex flex-wrap gap-5 p-5">
                <img
                src={big4}
                alt="big4"
                />
            </div>

             <div className="flex flex-wrap justify-center items-center gap-5 p-5">
                <p className="text-black text-2xl font-bold">Decor Accessories</p>
            </div>



            {/* page4 div6 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
                {imagespart6.slice(14,18).map((item4) => (
                    <img
                    key={item4.id}
                    src={item4.url}
                    alt="jsc"
                    />
                ))}
            </div>

        
            <div className="flex flex-wrap gap-5 p-5">
                <img
                src={big5}
                alt="tqy"
                />
            </div>


            {/*page4 div7 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
                {imagespart6.slice(18,21).map((item4) => (
                        <img 
                        key={item4.id}
                        src={item4.url}
                        alt="imgwe"
                        />
                       
                ))}
            </div>


              <div className="flex flex-wrap gap-5 p-5">
                <img
                src={big6}
                alt="tsdj"
                />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5 p-5">
                <p className="text-black text-2xl font-bold">Brands to Explore</p>
            </div>


                 {/*page4 div8 */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
                {imagespart6.slice(21,25).map((item4) => (
                        <img 
                        key={item4.id}
                        src={item4.url}
                        alt="imgwe"
                        className="transition-transform duration-300 hover:scale-90"
                        />
                       
                ))}
            </div>



                        {/* page2 div6 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
                {imagespart6.slice(25,29).map((item4) => (
                    <img
                    key={item4.id}
                    src={item4.url}
                    alt="jsc"
                    className="transition-transform duration-300 hover:scale-90"
                    />
                ))}
            </div>

            <div className="flex flex-wrap justify-center items-center text-center p-5 ">
                <p className="text-black font-bold text-2xl">Bestsellers</p>
            </div>


            {/*page2 div7 */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5 p-5">
                {imagespart6.slice(29,34).map((item4) => (
                    <div key={item4.id} >
                        <img 
                        src={item4.url}
                        alt="imgwe"
                        className="w-full object-cover transition-transform duration-300 hover:scale-90"
                        />
                        <p className="text-black font-bold text-xl font-sans">{item4.price}</p>
                        <p className="font-sans text-black">{item4.name}</p>
                    </div>
                ))}
            </div>
           

        
          <div className="p-10">
        <hr className="w-full mx-auto  rounded-full " />
       </div>



        </div>
    )
}
export default Page5