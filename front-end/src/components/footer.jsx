import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
      <section>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </footer>
  );
}

export default Footer;
