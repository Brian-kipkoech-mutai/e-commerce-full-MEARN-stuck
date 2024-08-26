import { Button } from "@/components/ui/button";
import heroImg from "../assets/images/hero.png";
import { ArrowRight, Medal, ShieldCheck, Truck } from "lucide-react";
import React from "react";
import Featured from "@/assets/images/pexels-leticiacurveloph-26093505-removebg-preview.png";
import CardContainer from "@/components/card";
import { Link, NavLink, Outlet } from "react-router-dom";
import Trasition from "@/components/Trasition";
import CardBox from "@/components/listingBox";
import BestSelling from "@/components/BestSelling";

function Home(props) {
  return (
    <div className="">
      <section
        className="h-[70vh] my-[-5px] mt-[-7px]  w-full bg-cover bg-center flex items-center  px-4"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="flex flex-col gap-14 max-w-screen-lg mx-auto w-full">
          <div className=" flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Fresh Arrivals Online</h1>
            <p className="text-sm text-muted-foreground">
              Discover Our Newest Collection Today.
            </p>
          </div>
          <div>
            <Link to={"/search"}>
              <Button className="py-6 px-8 flex  gap-2 group">
                View Collection{" "}
                <ArrowRight className="group-hover:translate-x-4 transition-transform duration-200 "></ArrowRight>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <section className="w-full max-w-screen-lg px-8 md:mx-auto flex  md:justify-between flex-wrap  items-center gap-4   py-28 ">
          <section className=" w-full max-w-xs text-justify  lg:w-3/12   ">
            <div className="flex flex-col gap-4">
              <section>
                <Truck className="bg-gray-100  h-14 w-14 p-4 rounded-full "></Truck>
              </section>
              <section>
                <h2 className="text-lg font-semibold ">Free Shipping</h2>
              </section>
              <section>
                <p className="text-sm">
                  Upgrade your style today and get FREE shipping on all orders!
                  Don{"'"}t miss out.
                </p>
              </section>
            </div>
          </section>
          <section className="w-full max-w-xs lg:w-3/12  text-justify  ">
            <div className="flex flex-col gap-4">
              <section>
                <Medal className="bg-gray-100  h-14 w-14 p-4 rounded-full "></Medal>
              </section>
              <section>
                <h2 className="text-lg font-semibold ">
                  Satisfaction Guarantee
                </h2>
              </section>
              <section>
                <p className="text-sm">
                  Shop confidently with our Satisfaction Guarantee: Love it or
                  get a refund.
                </p>
              </section>
            </div>
          </section>
          <section className="w-full max-w-xs lg:w-3/12  text-justify">
            <div className="flex flex-col gap-4">
              <section>
                <ShieldCheck className="bg-gray-100  h-14 w-14 p-4 rounded-full "></ShieldCheck>
              </section>
              <section>
                <h2 className="text-lg font-semibold ">Secure Payment</h2>
              </section>
              <section>
                <p className="text-sm">
                  Your security is our priority. Your payments are secure with
                  us.
                </p>
              </section>
            </div>
          </section>
        </section>
      </section>
      <section className=" mx-auto max-w-screen-xl   bg-bg-red-200  space-y-4   ">
        <p className="text-center text-muted-foreground  text-xs uppercase">
          Shop Now
        </p>
        <h2 className=" text-2xl font-semibold text-center">Best Selling</h2>

      <BestSelling/>
      </section>
      <section className="   bg-gray-100  ">
        <div className="flex justify-between w-full  items-center mx-auto max-w-screen-lg pl-4">
          <div className="space-y-5 w-[40%]">
            <h2 className=" text-2xl font-bold ">
              Browse Our Fashion Paradise!
            </h2>
            <p className="text-muted-foreground">
              Step into a world of style and explore our diverse collection of
              clothing categories.
            </p>
            <Button className="py-6 px-8 flex  gap-2 group">
              Start Browsing{" "}
              <ArrowRight className="group-hover:translate-x-4 transition-transform duration-200 "></ArrowRight>
            </Button>
          </div>
          <div className="">
            <img
              src={Featured}
              alt=""
              sizes=""
              className=" h-96 w-40 lg:w-80 object-cover rounded-md "
            />
          </div>
        </div>
      </section>
      <section>
        <section className="pt-20 lg:pb-10">
          <header className="flex gap-3 justify-center font-semibold ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "py-1 px-4 border rounded-full "
                  : "py-1 px-4 text-muted-foreground "
              }
              to={"featured"}
              end
            >
              Featured
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "py-1 px-4 border rounded-full"
                  : "py-1 px-4 text-muted-foreground "
              }
              to={"latest"}
            >
              Latest
            </NavLink>
          </header>
          <div>
            <Outlet />
          </div>
        </section>
      </section>
      <Trasition />
    </div>
  );
}

export default Home;
