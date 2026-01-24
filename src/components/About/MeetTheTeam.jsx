// components/MeetTheTeam.tsx
import React from "react";

const teamMembers = [
  {
    name: "Minty",
    title: "Senior Technician",
    image: "/images/minty.png", // Replace with actual image path
    experience: [
      "Halfords 11 years",
      "NVQ 3",
      "Mercedes 9 years",
      "Maintenance qualified",
      "Mercedes System technician Qualified",
    ],
    bio: `Hi, I'm Minty! I love boxing 🥊. 1 of my bucket list items was fighting in the ring, which I actually ticked off ✅. I'm 1 of the very few people who hasn't ever watched Avatar, Lord of the Rings, or Harry Potter 🤯. My favorite jobs are fixing brakes, which is why people like to call me Mintex. I got my nickname Minty because I'm always late (after eight) ✨.`,
  },
  {
    name: "Jon",
    title: "Senior Technician",
    image: "/images/jon.png", // Replace with actual image path
    experience: [
      "Vauxhall 4 years",
      "NVQ 3",
      "Arriva 4 years",
      "Bus technician Qualified",
      "Halfords 6 years",
      "Mercedes 8 years",
      "System technician Qualified",
    ],
    bio: `Hi I'm Jon! I look rough and ready but deep down I'm a bit of a geek 🧠. I like PC gaming and unlike Minty I have watched Avatar, Lord of the Rings and all the Harry Potter films 🎥. 🧍‍♂️ I guess I'm a part time raver. Occasionally I put down the spanner and hit up festivals and raves with my Mrs and friends. Ps I'll 1 v 1 on (fav game) for a free service.`,
  },
];

const MeetTheTeam = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-red-600 font-semibold uppercase tracking-wide">Our Experts</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Meet the Team</h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Our team of experienced professionals is committed to providing the highest quality service for your vehicle.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
          >
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="w-full md:w-1/2 h-auto object-cover"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold text-red-600">{member.name}</h3>
              <p className="text-sm text-gray-700 font-semibold mb-4">{member.title}</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mb-4">
                {member.experience.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="bg-red-600 text-white p-4 rounded text-sm leading-relaxed">
                {member.bio}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
