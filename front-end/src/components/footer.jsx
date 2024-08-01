import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ComapanyLogoPlain from "@/assets/footerLogo";
import { Link } from "react-router-dom";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import YoutubeIcon from "@/assets/youtubeIcon";
import { MasterCard, Amex, Visa } from "@/assets/paymentsLogo";

function Footer() {
  return (
    <footer className="">
      <section className="bg-gray-100 px-2 py-16">
        <section className="bg-gray-100 flex flex-col  space-y-2 px-2 mx-auto max-w-screen-lg lg:flex-row lg:justify-between">
          <div className="space-y-2">
            <h2 className=" text-2xl font-bold">Join Our Newsletter</h2>
            <p className="text-muted-foreground">
              We love to surprise our subscribers with occasional gifts.
            </p>
          </div>

          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </section>
      </section>
      <section className="py-10 ">
        <div className=" w-80 md:w-full max-w-screen-lg mx-auto ">
          <div className="px-2 flex  justify-between flex-wrap gap-5 gap-y-8 ">
            <div className="space-y-3   ">
              <section className="flex gap-2 items-center ">
                <ComapanyLogoPlain />{" "}
                <span className=" font-bold">TrendHive</span>
              </section>
              <p className="text-muted-foreground">
                TrendHive: Where Trends Thrive
              </p>
              <section className="flex  items-center gap-6">
                <Link>
                  <GitHubLogoIcon className="w-5 h-5" />{" "}
                </Link>
                <Link>
                  <InstagramLogoIcon className="w-5 h-5" />
                </Link>
                <Link>
                  {" "}
                  <YoutubeIcon />{" "}
                </Link>
              </section>
            </div>
            <div className="">
              <div className=" flex space-x-8 text-muted-foreground ">
                <section className="flex flex-col gap-4 ">
                  <h2 className="font-semibold ">Support</h2>
                  <div className=" flex flex-col gap-3  text-sm">
                    <Link className="hover:text-blue-500  hover:underline">
                      FAQ
                    </Link>
                    <Link className="hover:text-blue-500  hover:underline">
                      Terms of use
                    </Link>
                    <Link className="hover:text-blue-500  hover:underline">
                      Privacy Plolicy
                    </Link>
                  </div>
                </section>
                <section className="flex flex-col gap-4  ">
                  <h2 className="font-semibold">Company</h2>
                  <div className=" flex flex-col gap-3 text-sm">
                    <Link className="hover:text-blue-500  hover:underline">
                      About Us
                    </Link>
                    <Link className="hover:text-blue-500  hover:underline">
                      Contact
                    </Link>
                    <Link className="hover:text-blue-500  hover:underline">
                      Careers
                    </Link>
                  </div>
                </section>
                <section className="flex flex-col gap-4 ">
                  <h2 className="font-semibold">Shop</h2>
                  <div className=" flex flex-col gap-3 text-sm">
                    <Link className="hover:text-blue-500  hover:underline">
                      My Account
                    </Link>
                    <Link className="hover:text-blue-500  hover:underline">
                      Checkout
                    </Link>
                    <Link className="hover:text-blue-500  hover:underline">
                      Cart
                    </Link>
                  </div>
                </section>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <h2 className="font-semibold text-sm text-muted-foreground">
                ACCEPTED PAYMENTS
              </h2>
              <div className="flex  gap-3 flex-1  items-center ">
                <MasterCard />
                <Amex />
                <Visa />
              </div>
            </div>
          </div>
          <div>
            <p className="text-center text-muted-foreground text-sm mt-10">
              © 2024 Trendhive. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
