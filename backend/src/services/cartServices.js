import Cart from "../models/cart.js";

export const addProductsToCatService = async (data) => {
  const { userId, name, ...ItemData } = data;
  console.log(ItemData);

  const cart = await Cart.findOne({ userId });

  if (!cart) {
    await Cart.create({
      userId: data.userId,
      items: [ItemData],
    });
    return `Cart created and  ${name}  added successfully`;
  } else {
    const existingItem = cart.items.find(({ productId }) =>
      productId.equals(data.productId)
    );

    if (existingItem) {
      if (["color", "size"].every((key) => existingItem[key] == data[key])) {
        existingItem.quantity += data.quantity;

        await cart.save();
        return `${name} Quantity updated successfully to ${existingItem.quantity}`;
      }
    }
    cart.items.push(ItemData);
    await cart.save();
    return `${name} Item added to cart successfully`;
  }
};
