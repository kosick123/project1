import React from "react";
import big1 from "../assets/images-page-3/page3 big1.jpg";
import big2 from "../assets/images-page-3/page3 big2.jpg";
import big3 from "../assets/images-page-3/page3 big3.jpg";
import big4 from "../assets/images-page-3/page3 big4.jpg";
import imagespart4 from "../imagespart4";

function Page3(){
    return(
        <div className="">
            {/*page3 div1 */}
            <div className="flex flex-col md:flex-col flex-wrap gap-5 p-5">
                <h1 className="text-5xl text-black font-sans">Dining Room</h1>
                <p className="text-black">Inspired choices for all your Diningroom needs. For any occasion, for every occasion.</p>
                <img
                src={big1}
                alt="big1"
                />
            </div>

            <div className="flex flex-wrap justify-center items-center text-center">
                <p className="text-2xl font-bold text-black">Shop By Categories</p>
            </div>


          {/*page3 div2 */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-5 p-5">
            {imagespart4.slice(0,6).map((item) => (
                <img 
                 key={item.id}
                 src={item.url}
                 alt="kk"
                 className="transition-transform duration-300 hover:scale-90 cursor-pointer"
                 />
            ))}
          </div>

          <div className="flex flex-wrap gap-5 p-5">
            <img
            src={big2}
            alt="hhj"
            />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5 p-5">
            <p className="text-2xl text-black font-bold">Dining Accessories</p>
          </div>


          {/* page3 div3 */}

         <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
            {imagespart4.slice(6,10).map((item) => (
                <img
                key={item.id}
                src={item.url}
                alt="hdsj"
                />
            ))}
          </div>

          <div className="flex flex-wrap gap-5 p-5">
            <img
            src={big3}
            alt="abc"
            />
          </div>

          <div className="flex flex-wrap justify-center items-center text-center gap-5 p-5">
            <p className="text-black font-bold text-2xl">Dining Add ons</p>
          </div>


          {/*page3 div4 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
            {imagespart4.slice(10,14).map((item) => (
                <img
                key={item.id}
                src={item.url}
                alt="hdsj"
                />
            ))}
          </div>

          <div className="flex flex-wrap gap-5 p-5">
            <img
            src={big4}
            alt="bcd"
            />
          </div>

          <div className="flex flex-wrap justify-center items-center text-center gap-5 p-5">
            <p className="text-black font-bold text-2xl">Deals</p>
          </div>


          {/* page3 div5 */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
            {imagespart4.slice(14,18).map((item) => (
                <img
                key={item.id}
                src={item.url}
                alt="hdsj"
                className="transition-transform duration-300 hover:scale-90"
                />
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center text-center gap-5 p-5">
            <p className="text-black font-bold text-2xl">Bestsellers</p>
          </div>

        

        {/*page3 div6 */}
         <div className="grid grid-cols-2 md:grid-cols-5 gap-5 p-5">
                {imagespart4.slice(18,24).map((item) => (
                    <div key={item.id} >
                        <img 
                        src={item.url}
                        alt="wetu"
                        className="w-full object-cover transition-transform duration-300 hover:scale-90"
                        />
                        <p className="text-black font-bold text-xl font-sans">{item.price}</p>
                        <p className="font-sans text-black">{item.name}</p>
                    </div>
                ))}
            </div>

            
          <div className="p-10">
        <hr className="w-full mx-auto  rounded-full " />
       </div>

          



        </div>
    )
}
export default Page3