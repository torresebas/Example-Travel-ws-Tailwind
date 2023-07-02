import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>Luxury Included Vacations For Tow people</h2>
          <p className="py-4">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste at
            perferendis, aliquam quos natus dolore fugiat distinctio reiciendis
            dicta illo quaerat porro minus rerum numquam similique iure
            necessitatibus, eius officiis.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div className="">
              <h3 className="py-2">Leading Service</h3>
              <p className="py-1">
                All-inclusive company for 20 years In-A-Arow
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div className="">
              <h3 className="py-2">Leading Service</h3>
              <p className="py-1">
                All-inclusive company for 20 years In-A-Arow
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center ">
          <p className="py-2">Get an additional 10% Off</p>
          <p className="py-4">12 Hours Left</p>
          <p className="bg-gray-800 text-white py-2">Book now and safe</p>
        </div>

        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select  className="border rounded-md p-2">
              <option>Grande Antigua</option>
              <option>key West</option>
              <option>Maldives</option>
              <option>Coszumel</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>

          <button className="w-full my-4">Rates & Availabilities</button>
        </form>

      </div>
    </div>
  );
};

export default Search;
