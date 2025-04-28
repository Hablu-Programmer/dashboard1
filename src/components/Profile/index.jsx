import React from "react";

const Profile = () => {
  return (
    <main className="pt-5 xl:pt-10 min-h-screen">
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
    </main>
  );
};

export default Profile;
