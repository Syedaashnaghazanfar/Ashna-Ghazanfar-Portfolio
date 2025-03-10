import React from "react";
import { FaProjectDiagram, FaAward, FaSmile, FaBug } from "react-icons/fa";

const Statistics = () => {
  return (
    <section className="bg-black text-yellow-400 py-20 flex justify-center items-center" id="statistics">
      <div className="container mx-auto px-6">
        <div className="bg-black border-2 border-yellow-400 py-16 px-6 shadow-xl rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 text-center">
            {[
              {
                icon: <FaProjectDiagram size={60} className="text-yellow-400 mx-auto mb-4" />,
                number: "15+",
                text: "Finished Projects",
              },
              {
                icon: <FaAward size={60} className="text-yellow-400 mx-auto mb-4" />,
                number: "2+",
                text: "Hackathons Completed",
              },
              {
                icon: <FaSmile size={60} className="text-yellow-400 mx-auto mb-4" />,
                number: "5+",
                text: "Satisfied Clients",
              },
              {
                icon: <FaBug size={60} className="text-yellow-400 mx-auto mb-4" />,
                number: "30+",
                text: "Bugs Fixed",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-8 border-2 border-yellow-400 rounded-lg shadow-lg transition-transform transform hover:scale-110"
              >
                {stat.icon}
                <h1 className="text-5xl font-bold">{stat.number}</h1>
                <h4 className="mt-2 text-lg font-medium">{stat.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
