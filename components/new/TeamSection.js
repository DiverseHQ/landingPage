import React from "react";
import MemberCard from "../teamSection/MemberCard";

const TeamSection = () => {
  return (
    <div className="flex flex-col mt-[300px]">
      <h1 className="place-self-center text-7xl font-semibold mb-9">
        Team Members
      </h1>
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-row itemse-center justify-center">
          <MemberCard
            image={
              "https://cdn.discordapp.com/attachments/1014407377056968754/1043118148926312528/WFDFwC_I_400x400.jpg"
            }
            name={"Deven Rathod"}
            bio={"Creative dev"}
          />
          <MemberCard
            image="/Kirrttiraj.jpg"
            name={"Kirrttiraj"}
            bio={"Frontend dev"}
          />
        </div>
        <MemberCard
          image="/Kirrttiraj.jpg"
          name={"Taha"}
          bio={"Community dev"}
        />
      </section>
    </div>
  );
};

export default TeamSection;
