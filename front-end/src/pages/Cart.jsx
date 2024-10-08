import CartItemQuantity from "@/components/CartItemQuantity";
import { DashIcon } from "@radix-ui/react-icons";
import { XIcon } from "lucide-react";
import React from "react";

function Cart(props) {
  return (
    <div>
      <div className="mx-auto max-w-screen-lg p-2">
        <h1 className="text-lg font-semibold">Your Cart</h1>
  <CartItemQuantity/>
         
      </div>
    </div>
  );
}

export default Cart;
