import ErrorHandler from "../ErrorHandler.js";
import WhishList from "../models/whishlist.js";

export const addTowWhislistService = async (data) => {
  const { userId, productId: newProductId, name } = data;
    // console.log(data)
  const whishList = WhishList.findOne({ userId });
  if (!whishList) {
    await WhishList.create({ userId, items: [{ productId: newProductId }] });
    return `${name} added to wishlist`;
  } else {
    console.log(whishList.userId)
    return;
    
    const existingItem = whishList.items.find(({ productId }) =>
      productId.equals(newProductId)
    );
    if (!existingItem) {
      whishList.items.push({ productId: newProductId});
      await whishList.save();
      return `${name} added to wishlist`;
    } else {
      throw new ErrorHandler(`${name} already exists in wishlist`, 409);
    }
  }
};
