import React from "react";
import div1 from "../assets/page1/desktop img.jpg";
import div3 from "../assets/page1/big 2.webp";
import div41 from "../assets/small/part5.jpg";
import div42 from "../assets/small/part52.jpg";
import div43 from "../assets/small/part53.jpg";
import div44 from "../assets/small/part54.jpg";
import big2 from "../assets/page1/big3.jpg";
import big3 from "../assets/page1/big4.jpg";
import big5 from "../assets/page1/big5.jpg";
import big6 from "../assets/page1/big6.jpg";
import apple from "../assets/apple.avif";
import play from "../assets/playstore.avif";
import images from "../images";
import imagespart from "../imagespart";
import imagespart2 from "../imagespart2";

function Page1(){
    return(
        <div className="flex flex-col md:flex-col flex-wrap p-2">

            {/*div1*/}
            <div className="flex flex-col md:flex-col flex-wrap p-7 gap-7">
                <h1 className="text-black font-sans text-5xl">Living Room</h1>
                <p>Inspired choices for all your Livingroom needs. For any occasion, for every occasion.</p>
                <img
                src={div1}
                alt="div1"
                />
            </div>

            {/*div2 */}
            <div className="flex md:flex flex-wrap justify-center items-center text-center ">
                <p className=" text-2xl font-bold text-black">Shop By Categories</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-5">
                {images.map((item) => (
                    <div key={item.id}
                    className="shadow-md overflow-hidden transition-transform duration-300 hover:scale-90 "
                    >
                    <img
                    src={item.url}
                    alt="pic"
                    className="w-full h-40 object-cover"
                    />
                    </div>
                     
                ))}
            </div>

            {/*div3*/}
            <div className="flex sm:flex md:flex flex-wrap p-5 ">
                <img
                src={div3}
                alt="big"
                />
            </div>
            <div className="flex md:flex justify-center flex-wrap items-center p-5">
                <p className="text-3xl font-bold">Online Exclusives</p>
            </div>

            {/*div4*/}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
                <img 
                src={div41}
                alt="div1"
                />
                 <img 
                src={div42}
                alt="div2"
                />
                 <img 
                src={div43}
                alt="div3"
                />
                 <img 
                src={div44}
                alt="div4"
                />
            </div>

            {/*div5*/}
            <div className="flex flex-wrap gap-5 p-5">
                <div>
                    <img
                    src={big2}
                    alt="big"
                    />
                </div>
                <div>
                     <img
                    src={big3}
                    alt="big"
                    />
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center text-center p-5">
                <p className="text-3xl font-bold text-black">Add ons</p>
            </div>


            {/*div6*/}
            <div className="grid grid-cols-2 md:grid-cols-4 p-5 gap-4">
               {imagespart.map((item1) => (
                <div key={item1.id} className="shadow-sm overflow-hidden">
                    <img
                    src={item1.url}
                    alt="kk"
                    />
                </div>
               ))}
            </div>
            


           {/*div7*/}
           <div className="flex flex-wrap gap-5 p-5">
            <div>
                <img
                src={big5}
                alt="big5"
                />
            </div>
            <div>
                <img
                src={big6}
                alt="big6"
                />
            </div>
           </div>

           <div className="flex justify-center items-center text-center p-5">
            <p className="text-black text-3xl font-bold">Deals</p>
           </div>


           {/*slice images div8*/}
           {/* small part1 */}
           <div className="grid grid-cols-2 md:grid-cols-4 p-5 gap-4">
            {imagespart2.slice(0,4).map((item3) => (
                  <img
              key={item3.id}
              src={item3.url}
              alt="joy"
              className="w-full  object-cover rounded border transition-transform duration-300 hover:scale-90"
            />
            ))}
           </div>

           <div className="flex justify-center items-center text-center p-5">
            <p className="text-3xl text-black font-bold">Bestsellers</p>
           </div>

           {/* small part2 */}
           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-5">
            {imagespart2.slice(4,9).map((item3) => (
                <div key={item3.id} className="">
                <img
                src={item3.url}
                alt="jk"
                className="w-full object-cover transition-transform duration-300 hover:scale-90"
                />
                <p className=" text-black font-bold text-xl font-sans">{item3.price}</p>
                <p className="font-sans text-black">{item3.name}</p>
                </div>
            ))}
           </div>



        {/*div9*/}
        <div className="flex flex-wrap justify-between p-7 gap-16">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <p className="text-3xl font-bold text-black">Subscribe to our awesome emails.</p>
                    <p className="text-gray-500">Get our latest offers and news straight in your inbox.</p>
                </div>
                <div className="flex flex-row mt-5">
                    <input
                     type="email"
                     placeholder="Please enter an email address"
                     className="w-3/4 h-12 bg-gray-50 text-start p-3 shadow-sm"
                     />
                     <button className="text-bold text-white bg-black h-12 w-1/2 font-bold rounded-sm ">Subscribe</button>
                </div>
            </div>


            <div className="flex flex-col gap-5 mr-20">
                <div className="flex flex-col gap-2">
                    <p className="text-3xl font-bold text-black">Download our apps</p>
                    <p className="text-gray-500">Shop our products and offers on-the-go.</p>
                </div>
                <div className="flex flex-row gap-7">
                    <img 
                    src={apple}
                    alt="apl"
                    className="transition-transform duration-300 hover:scale-110"
                    />
                    <img
                    src={play}
                    alt="play"
                    className="transition-transform duration-300 hover:scale-110"
                    />
                </div>
            </div>
        </div>


       <div className="p-10">
        <hr className="w-full mx-auto  rounded-full " />
       </div>

        </div>
    )
}
export default Page1;