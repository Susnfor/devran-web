import React from "react";

const Book = () => {
  return (
    <div className="flex items-center justify-center py-20 ">
      <form className="py-5 flex items-center flex-col justify-center border-4 border-dashed border-orange-200 w-1/3 bg-zinc-900">
        <div className="flex flex-col">
            <label htmlFor="name" className="px-2">Full Name</label>
            <input type="text" id="name" className="bg-slate-950 border-4 border-solid border-orange-200 px-5"/>
            <label htmlFor="email" className="px-2">Email</label>
            <input type="email" id="email" className="bg-slate-950 border-4 border-solid border-orange-200" />
        </div>
       
        <div className="py-5 flex flex-row">
          <div className="flex flex-col">
          <label htmlFor="date" className="px-2">Date</label>
          <input type="date" id="date" className="bg-slate-950 border-4 border-solid border-orange-200 px-2" />
          </div>
          <div className="flex flex-col">
          <label htmlFor="time"className="px-2">Time</label>
          <input type="time" id="time" className="bg-slate-950 border-4 border-solid border-orange-200"/>
          </div>
        </div>

        <div className="flex-col flex">
          <label htmlFor="guests">Guests</label>
          <input type="number" id="guests" className="bg-slate-950 border-4 border-solid border-orange-200 px-5" />
          <label htmlFor="message">Special Requirements?</label>
          <textarea id="message"  className="bg-slate-950 border-4 border-solid border-orange-200"/>
        </div>
        <div className="py-5">
          <button className="bg-orange-200 px-5 py-2" type="submit">Book</button>
        </div>
      </form>
    </div>
  );
};

export default Book;
