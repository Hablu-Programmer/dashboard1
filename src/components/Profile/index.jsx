import React from "react";
import { FaFacebook, FaInstagram, FaPinterestSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareTwitter } from "react-icons/fa6";

const data = [
  { id: 1, value: 350, label: "Article" },
  { id: 2, value: "25k", label: "Followers" },
  { id: 3, value: "8.9k", label: "Ratting" },
];
const socialLinks = [
  { id: 1, icon: <FaFacebook />, link: "https://www.facebook.com/" },
  { id: 2, icon: <FaPinterestSquare />, link: "https://www.pinterest.com/" },
  { id: 3, icon: <FaLinkedin />, link: "https://www.linkedin.com/" },
  { id: 4, icon: <FaSquareTwitter />, link: "https://www.twitter.com/" },
  { id: 5, icon: <FaInstagram />, link: "https://www.instagram.com/" },
];

const Profile = () => {
  return (
    <main className="pt-5 px-2.5 xl:pt-10 min-h-screen bg-primary2 text-white/70">
      {/* Profile section */}
      <section className="flex flex-col items-center justify-center">
        <figure>
          <img
            src="https://avatars.githubusercontent.com/u/96829173?v=4"
            alt="User Image"
            className="size-[200px] rounded-full"
          />
        </figure>

        <div className="text-center space-y-3.5 pt-5">
          <h1 className="text-xl md:text-2xl font-bold xl:text-4xl">
            Salman Ahamed
          </h1>
          <div className="space-y-2.5">
            <h2 className="text-lg font-semibold">
              Frontend Developer at Hablu Programmer
            </h2>
            <p className="text-sm text-slate-300/80 max-w-[600px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              nostrum voluptate reprehenderit qui? Labore eius cum totam
              aspernatur dolorem quia.
            </p>
          </div>
        </div>
      </section>

      {/* User Information */}
      <section className="flex items-center justify-around mt-20 px-5 bg-primary1/30 py-10 w-full">
        {data.map((i) => (
          <div
            key={i.id}
            className="bg-primary1 p-5 not-last:border-r not-last:border-grayText/30 w-full text-center space-y-3"
          >
            <h5 className="text-xl md:text-3xl lg:text-5xl font-black">
              {i.value}
            </h5>
            <p className="text-lg md:text-xl ">{i.label}</p>
          </div>
        ))}
      </section>

      {/* Social Links */}
      <section className="flex items-center justify-center gap-5 md:gap-10 py-5 md:py-10">
        {socialLinks.map((i) => (
          <a
            key={i.id}
            href={i.link}
            target="_blank"
            className="text-xl lg:text-3xl cursor-pointer hover:scale-[1.1] transition-all duration-150"
          >
            {i.icon}
          </a>
        ))}
      </section>
    </main>
  );
};

export default Profile;
