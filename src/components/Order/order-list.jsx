import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const headerItems = [
  "Date",
  "Customer",
  "Payment",
  "Total",
  "Delivery",
  "Action",
];
const Header = () => (
  <div className="flex justify-between items-center p-2 font-semibold text-center text-grayText bg-primary2/30 shadow-md shadow-white/5">
    <div className="flex gap-2 flex-1 justify-center items-center">
      <input type="checkbox" className="size-3" />
      <span>Order</span>
    </div>

    {headerItems.map((item, i) => (
      <h6 className="flex-1" key={i}>
        {item}
      </h6>
    ))}
  </div>
);

export const OrderList = () => {
  const demoOrders = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    customerName: `Customer ${index + 1}`,
    date: new Date(
      2025,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    )
      .toISOString()
      .split("T")[0],
    paymentMessage: ["Success", "Pending"][Math.floor(Math.random() * 2)],
    total: (Math.random() * 150).toFixed(2),
    items: orderItems[Math.floor(Math.random() * 20)],
    delivery: [
      "Delivered",
      "In Transit",
      "Pending",
      "Out for Delivery",
      "Shipped",
    ][Math.floor(Math.random() * 5)],
  }));

  return (
    <section className="text-white bg-primary2">
      <Header />
      <div className="text-white/70 text-sm">
        {demoOrders.map((order) => (
          <div
            key={order.id}
            className="bg-primary1 flex justify-between items-center gap-5 border-y border-grayText/10 p-2 text-center"
          >
            <div className="flex gap-2 flex-1 justify-center items-center">
              <input type="checkbox" className="size-3" />
              <span>#{order.id}</span>
            </div>

            <div className="flex-1 ">{order.date}</div>
            <div className="flex-1 ">{order.customerName}</div>
            <div className="flex-1">
              <span
                className={`rounded-full px-2 py-0.5 text-[13px] ${
                  order.paymentMessage === "Success"
                    ? "bg-green-500/20 text-green-500/70"
                    : "bg-amber-500/20 text-amber-500/70"
                }`}
              >
                {order.paymentMessage}
              </span>
            </div>
            <div className="flex-1 ">{order.total}</div>
            <div className="flex-1 ">{order.delivery}</div>

            <div className="flex gap-5 text-xl flex-1 justify-center items-center">
              <button className="cursor-pointer">
                <CiEdit className="text-green-500" />
              </button>
              <button className="cursor-pointer">
                <MdDeleteOutline className="text-red-500/70" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const orderItems = [
  "Coffee",
  "Bagel",
  "Latte",
  "Sandwich",
  "Espresso",
  "Croissant",
  "Cappuccino",
  "Muffin",
  "Mocha",
  "Brownie",
  "Tea",
  "Scone",
  "Macchiato",
  "Danish",
  "Flat White",
  "Toast",
  "Hot Chocolate",
  "Green Tea",
  "Cookies",
  "Iced Coffee",
];
