import React from "react";

const TeamSection = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="place-self-center text-2xl font-semibold">Team Members</h1>
      <section className="flex  items-center justify-center p-3 flex-wrap ">
        <div className="flex flex-row border rounded p-1 m-2">
          <img
            src="https://cdn.discordapp.com/attachments/1014407377056968754/1043118148926312528/WFDFwC_I_400x400.jpg"
            alt="avatar"
            className="w-20 h-20 border rounded-full"
          />
          <div className="flex flex-col justify-center p-3 mx-2">
            <h3 className="text-lg">Deven</h3>
            <p>Creative dev</p>
          </div>
        </div>
        <div className="flex flex-row border rounded p-1 m-2">
          <img
            src="/Kirrttiraj.jpg"
            alt="avatar"
            className="w-20 h-20 border rounded-full"
          />
          <div className="flex flex-col justify-center p-3 mx-2">
            <h3 className="text-lg">Kirrttiraj</h3>
            <p>Frontend dev</p>
          </div>
        </div>
        <div className="flex flex-row border rounded p-1 m-2">
          <img
            src="/Kirrttiraj.jpg"
            alt="avatar"
            className="w-20 h-20 border rounded-full"
          />
          <div className="flex flex-col justify-center p-3 mx-2">
            <h3 className="text-lg">Taha</h3>
            <p>Community dev</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
