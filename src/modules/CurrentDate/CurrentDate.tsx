import React from "react";

export const CurrentDate: React.FC = () => {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long", 
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const date = `${day}.${month}`;


  return <div className="date">{`${formattedDate} (${date})`}</div>;
};
