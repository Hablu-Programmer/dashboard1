import React from "react";

const Order = () => {
  // bg-primary2 text-white/70
  return (
    <main className="pt-5 px-2.5 min-h-screen">
      <section className="flex items-center justify-between text-white bg-primary2 rounded-md p-1.5 md:py-2 md:px-2.5">
        <h1 className="text-xl md:text-2xl text-grayText font-bold pl-1 sm:pr-0">
          Order
        </h1>
        <button className="bg-[#341196]/10 border border-blue-700/40 rounded-md py-1.5 px-2.5 text-blue-500 hover:bg-[#341196]/20 active:bg-[#341196]/30 transition-all duration-150 active:scale-95">
          Create Order
        </button>
      </section>
    </main>
  );
};

export default Order;
