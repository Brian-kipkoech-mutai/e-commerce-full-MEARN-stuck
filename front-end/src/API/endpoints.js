export const apiUrls = {
  //auth endpoints
  GET_USERS: "/user",
  GET_PRODUCTS: "/user",
  REGISTER_USER: "/auth/register",
  RESEND_EMAIL_LINK: "auth/resendLink",
  LOGIN: "/auth/login",
  CHECK_AUTH: "/auth/checkAuth",
  GOOGLE_REGISTER: "/auth/google/register",
  GOOGLE_LOGIN: "/auth/google/login",
  //products  endpoints
  GET_SEARCH_PRODUCTS: "/products/search",
  GET_PRODUCTS_FILTERS: "/products/filters",
  GET_PRODUCTS_BESTSELLING: "/products/bestselling",
  GET_PRODUCTS_LATEST: "/products/latest",
  GET_PRODUCTS_FEATURED: "/products/featured",
  GET_PRODUCTDETAILS: "/products/details",
  GET_SIMILAR_PRODUCTS: "/products/similar",
  GET_PRODUCT_REVIEWS: "/products/reviews",
  GET_PRODUCT_DESCRIPTION: "/products/description",
  POST_PRODUCT_REVIEW: "/products/add/review",
  
  //cart endpoints
  ADD_TO_CART: "/cart/add",
  GET_CART: "/cart/get",
  UPDATE_CART: "/cart/update",
  REMOVE_FROM_CART: "/cart/remove",
  CLEAR_CART: "/cart/clear",
  
  //whishList endpoints
  GET_WHISLIST: "/whishlist/get",
  ADD_TO_WHISHLIST: "/whishlist/add",
  REMOVE_FROM_WHISHLIST: "/whishlist/remove",

  

  //shipping endpoints
  GET_SHIPPING_ADDRESS: "/shipping/get",
  UPDATE_SHIPPING_ADDRESS: "/shipping/update",
  DELETE_SHIPPING_ADDRESS: "/shipping/delete",

  //payment endpoints
  MAKE_PAYMENT: "/payment/make",
  GET_PAYMENT_STATUS: "/payment/status",

  //order endpoints
  GET_ORDERS: "/order/get",
  GET_ORDER_DETAILS: "/order/details",
  CANCEL_ORDER: "/order/cancel",
  UPDATE_ORDER_STATUS: "/order/update",
  PLACE_ORDER: "/order/place",
  GET_ORDER_SHIPMENT: "/order/shipment",

  //order endpoints
};
