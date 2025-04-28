import React from "react";
import { FaEllipsisV, FaFilter, FaSearch } from "react-icons/fa";
import { OrderList } from "./order-list";
const Button = ({ children }) => (
  <button className="px-2 py-1.5 rounded-md bg-primary2 text-grayText cursor-pointer">
    {children}
  </button>
);

const Order = () => {
  // bg-primary2 text-white/70
  return (
    <main className="pt-5 px-2.5 min-h-screen">
      {/* Header */}
      <section className="flex items-center justify-between text-white bg-primary2 rounded-md p-1.5 md:py-2 md:px-2.5">
        <h1 className="text-xl md:text-2xl text-grayText font-bold pl-1 sm:pr-0">
          Order
        </h1>
        <button className="bg-[#341196]/10 border border-blue-700/40 rounded-md py-1.5 px-2.5 text-blue-500 hover:bg-[#341196]/20 active:bg-[#341196]/30 transition-all duration-150 active:scale-95">
          Create Order
        </button>
      </section>

      {/* Filter Section */}
      <section className="py-4 flex justify-between gap-2">
        <div className="flex gap-x-1 text-sm md:text-base">
          <Button>All</Button>
          <Button>Open</Button>
          <Button>Closed</Button>
          <Button>Add</Button>
        </div>

        <div className="flex gap-x-2">
          <Button>
            <FaSearch className="size-4 text-white/50" />
          </Button>
          <Button>
            <FaFilter className="size-4 text-white/50" />
          </Button>

          <Button>
            <FaEllipsisV className="size-4 text-white/50" />
          </Button>
        </div>
      </section>

      {/* Table */}
      <section className="w-full">
        <OrderList />
      </section>
    </main>
  );
};

export default Order;
