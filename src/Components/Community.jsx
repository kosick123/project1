import React from "react";
import book from "../assets/book.svg";
import finger from "../assets/fingers.svg";
import connect from "../assets/network.svg";
import people from "../assets/peopl.svg";

function Community() {
  return (
    <div className="flex flex-col justify-center items-center w-full">

      {/* Part 1 */}
      <div className="flex flex-col bg-gray-50 w-full">
        <div className="flex flex-col justify-center items-center p-10">
          <h1 className="text-3xl font-semibold text-center">About The Odin Project</h1>
          <p className="text-center max-w-4xl p-10">
            The Odin Project is one of those "What I wish I had when I was learning" resources. Not everyone has access to a computer science education or the funds to attend an intensive coding school and neither of those is right for everyone anyway. This project is designed to fill in the gap for people who are trying to hack it on their own but still want a high quality education.
          </p>
        </div>
        <div className="flex justify-center items-center text-center p-5">
          <p className="text-2xl font-semibold">What you can expect at The Odin Project</p>
        </div>

        {/* Feature Boxes */}
        <div className="flex flex-col justify-center items-center">
          {/** Book Feature **/}
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-10 p-10">
            <img src={book} alt="book" />
            <div className="flex flex-col items-start gap-2">
              <h2 className="font-semibold text-center md:text-left">Receive support from others</h2>
              <p className="text-center md:text-left">
                Our free, comprehensive curriculum will equip you to be a full stack developer, no matter your current experience level.
              </p>
            </div>
          </div>

          {/** Finger Feature **/}
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-10 p-10">
            <img src={finger} alt="finger" />
            <div className="flex flex-col items-start gap-2">
              <h2 className="font-semibold text-center md:text-left">Receive support from others</h2>
              <p className="text-center md:text-left">
                Our free, comprehensive curriculum will equip you to be a full stack developer, no matter your current experience level.
              </p>
            </div>
          </div>

          {/** Connect Feature **/}
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-10 p-10">
            <img src={connect} alt="connect" />
            <div className="flex flex-col items-start gap-2">
              <h2 className="font-semibold text-center md:text-left">Receive support from others</h2>
              <p className="text-center md:text-left">
                Our free, comprehensive curriculum will equip you to be a full stack developer, no matter your current experience level.
              </p>
            </div>
          </div>

          {/** People Feature **/}
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-10 p-10">
            <img src={people} alt="people" />
            <div className="flex flex-col items-start gap-2">
              <h2 className="font-semibold text-center md:text-left">Receive support from others</h2>
              <p className="text-center md:text-left">
                Our free, comprehensive curriculum will equip you to be a full stack developer, no matter your current experience level.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2 */}
      <div className="flex flex-col justify-center items-center text-center p-10 bg-gray-100 w-full">
        <h1 className="text-2xl font-semibold mb-10">Overview of The Odin Project</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center w-full">

          {/* Box 1 */}
          <div className="flex flex-col justify-center items-center text-center p-6 shadow-md rounded-lg bg-white transition-transform duration-300 hover:scale-105 w-full max-w-full md:w-72">
            <p className="text-2xl font-semibold">1,719,194</p>
            <p>Learners</p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col justify-center items-center text-center p-6 shadow-md rounded-lg bg-white transition-transform duration-300 hover:scale-105 w-full max-w-full md:w-72">
            <p className="text-2xl font-semibold">5000+</p>
            <p>Contributors</p>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col justify-center items-center text-center p-6 shadow-md rounded-lg bg-white transition-transform duration-300 hover:scale-105 w-full max-w-full md:w-72">
            <p className="text-2xl font-semibold">2013</p>
            <p>Founded</p>
          </div>

          {/* Box 4: Origin */}
          <div className="col-span-1 md:col-span-2 flex flex-col p-5 bg-white rounded-md shadow-md items-start gap-5 w-full max-w-full h-auto">
            <p className="text-black text-2xl p-5 font-bold">Origin of The Odin Project</p>
            <p className="max-w-full">
              The Odin Project provides a free open source coding curriculum that can be taken entirely online. Since its inception, it has helped many students get hired as developers and has assisted countless others in learning enough programming to work on their own personal projects.
            </p>
            <p>
              Erik Trautman founded The Odin Project in 2013. Currently it is maintained and continually improved by a team of volunteers many of whom learned to code with us. Many find success from Odin Project's curriculum because of its hands-on approach with learning and emphasis on building projects. The curriculum is meticulously curated to ensure the content is up-to-date.
            </p>
          </div>

          {/* Box 5: Open Source */}
          <div className="flex flex-col bg-white rounded-md shadow-md items-start gap-5 w-full max-w-full h-auto">
            <p className="text-black text-2xl p-5 font-bold">Open Source</p>
            <p className="max-w-full">
              This website and the curriculum it hosts are completely open source. That means anyone can work on new features or fix existing bugs on the website. This also extends to the curriculum itself, anyone can work on new lessons, add new resources and improve existing lessons.
            </p>
            <p className="max-w-full">
              If you're interested in helping us make The Odin Project better, please find out how to contribute.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Community;
