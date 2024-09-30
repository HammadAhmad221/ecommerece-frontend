import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = {
  status: "idle",
  loading: false,
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  currentRole: (JSON.parse(localStorage.getItem("user")) || {}).role || null,
  currentToken: (JSON.parse(localStorage.getItem("user")) || {}).token || null,
  isLoggedIn: false,
  error: null,
  response: null,

  responseReview: null,
  responseProducts: null,
  responseSellerProducts: null,
  responseSpecificProducts: null,
  responseDetails: null,
  responseSearch: null,
  responseCustomersList: null,

  productData: [],
  sellerProductData: [],
  specificProductData: [],
  productDetails: {},
  productDetailsCart: {},
  filteredProducts: [],
  customersList: [],
};

const updateCartDetailsInLocalStorage = (cartDetails) => {
  const currentUser = JSON.parse(localStorage.getItem("user")) || {};
  currentUser.cartDetails = cartDetails;
  localStorage.setItem("user", JSON.stringify(currentUser));
};

export const updateShippingDataInLocalStorage = (shippingData) => {
  const currentUser = JSON.parse(localStorage.getItem("user")) || {};
  const updatedUser = {
    ...currentUser,
    shippingData: shippingData,
  };
  localStorage.setItem("user", JSON.stringify(updatedUser));
};

// export const mergeCartAfterLogin = (userId, token) => {
//   const localCart = JSON.parse(localStorage.getItem("cart"));

//   if (localCart && localCart.length > 0) {
//     // Send the local cart to the backend to merge with the logged-in user's cart
//     fetch(`//${userId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ cartDetails: localCart }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // After successfully merging, clear localStorage cart
//         localStorage.removeItem("cart");
//       })
//       .catch((error) => console.error("Error:", error));
//   }
// };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authRequest: (state) => {
      state.status = "loading";
    },
    underControl: (state) => {
      state.status = "idle";
      state.response = null;
    },
    stuffAdded: (state) => {
      state.status = "added";
      state.response = null;
      state.error = null;
    },
    stuffUpdated: (state) => {
      state.status = "updated";
      state.response = null;
      state.error = null;
    },
    updateFailed: (state, action) => {
      state.status = "failed";
      state.responseReview = action.payload;
      state.error = null;
    },
    updateCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    authSuccess: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.currentUser = action.payload;
      state.currentRole = action.payload.role;
      state.currentToken = action.payload.token;
      state.status = "success";
      state.response = null;
      state.error = null;
      state.isLoggedIn = true;
    },

    addToCart: (state, action) => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if the product already exists in the cart
      const existingProductIndex = cart.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );

      if (existingProductIndex !== -1) {
        // If the product exists, increase its quantity
        cart[existingProductIndex].quantity += 1;
      } else {
        // If it's a new product, add it to the cart with quantity 1
        const newCartItem = { ...action.payload, quantity: 1 };
        cart.push(newCartItem);
      }

      // Update the localStorage with the updated cart
      localStorage.setItem("cart", JSON.stringify(cart));

      // No need to update Redux state since we are using localStorage
    },

    removeAllFromCart: (state, action) => {
      if (localStorage.getItem("cart")) {
        localStorage.removeItem("cart");
        console.log("Cart cleared for user.");
      } else {
        console.log("No cart found in localStorage.");
      }
    },

    removeFromCart: (state, action) => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Find the product in the cart
      const existingProductIndex = cart.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );

      if (existingProductIndex !== -1) {
        // If the product exists in the cart, decrease its quantity
        if (cart[existingProductIndex].quantity > 1) {
          // Decrement the quantity by 1 if it's greater than 1
          cart[existingProductIndex].quantity -= 1;
        } else {
          // If the quantity is 1, remove the product from the cart
          cart.splice(existingProductIndex, 1);
        }
      }

      // Update the localStorage with the updated cart
      localStorage.setItem("cart", JSON.stringify(cart));

      // No need to update Redux state since we are using localStorage
    },

    removeSpecificProduct: (state, action) => {
      const productIdToRemove = action.payload;

      if (state.currentUser) {
        const updatedCartDetails = state.currentUser.cartDetails.filter(
          (cartItem) => cartItem._id !== productIdToRemove
        );
        state.currentUser.cartDetails = updatedCartDetails;
        updateCartDetailsInLocalStorage(updatedCartDetails);
      } else {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = cart.filter(
          (cartItem) => cartItem._id !== productIdToRemove
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },

    fetchProductDetailsFromCart: (state, action) => {
      const productIdToFetch = action.payload;
      const productInCart = state.currentUser.cartDetails.find(
        (cartItem) => cartItem._id === productIdToFetch
      );

      if (productInCart) {
        state.productDetailsCart = { ...productInCart };
      } else {
        state.productDetailsCart = null;
      }
    },

    authFailed: (state, action) => {
      state.status = "failed";
      state.response = action.payload;
      state.error = null;
    },
    authError: (state, action) => {
      state.status = "error";
      state.response = null;
      state.error = action.payload;
    },
    authLogout: (state) => {
      localStorage.removeItem("user");
      state.status = "idle";
      state.loading = false;
      state.currentUser = null;
      state.currentRole = null;
      state.currentToken = null;
      state.error = null;
      state.response = true;
      state.isLoggedIn = false;
    },

    isTokenValid: (state) => {
      const decodedToken = jwtDecode(state.currentToken);

      if (state.currentToken && decodedToken.exp * 1000 > Date.now()) {
        state.isLoggedIn = true;
      } else {
        localStorage.removeItem("user");
        state.currentUser = null;
        state.currentRole = null;
        state.currentToken = null;
        state.status = "idle";
        state.response = null;
        state.error = null;
        state.isLoggedIn = false;
      }
    },

    getRequest: (state) => {
      state.loading = true;
    },
    getFailed: (state, action) => {
      state.response = action.payload;
      state.loading = false;
      state.error = null;
    },
    getError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getDeleteSuccess: (state) => {
      state.status = "deleted";
      state.loading = false;
      state.error = null;
      state.response = null;
    },

    productSuccess: (state, action) => {
      state.productData = action.payload;
      state.responseProducts = null;
      state.loading = false;
      state.error = null;
    },
    getProductsFailed: (state, action) => {
      state.responseProducts = action.payload;
      state.loading = false;
      state.error = null;
    },

    sellerProductSuccess: (state, action) => {
      state.sellerProductData = action.payload;
      state.responseSellerProducts = null;
      state.loading = false;
      state.error = null;
    },
    getSellerProductsFailed: (state, action) => {
      state.responseSellerProducts = action.payload;
      state.loading = false;
      state.error = null;
    },

    specificProductSuccess: (state, action) => {
      state.specificProductData = action.payload;
      state.responseSpecificProducts = null;
      state.loading = false;
      state.error = null;
    },
    getSpecificProductsFailed: (state, action) => {
      state.responseSpecificProducts = action.payload;
      state.loading = false;
      state.error = null;
    },

    productDetailsSuccess: (state, action) => {
      state.productDetails = action.payload;
      state.responseDetails = null;
      state.loading = false;
      state.error = null;
    },
    getProductDetailsFailed: (state, action) => {
      state.responseDetails = action.payload;
      state.loading = false;
      state.error = null;
    },

    customersListSuccess: (state, action) => {
      state.customersList = action.payload;
      state.responseCustomersList = null;
      state.loading = false;
      state.error = null;
    },

    getCustomersListFailed: (state, action) => {
      state.responseCustomersList = action.payload;
      state.loading = false;
      state.error = null;
    },

    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
      state.responseSearch = null;
      state.loading = false;
      state.error = null;
    },
    getSearchFailed: (state, action) => {
      state.responseSearch = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  authRequest,
  underControl,
  stuffAdded,
  stuffUpdated,
  updateFailed,
  authSuccess,
  authFailed,
  authError,
  authLogout,
  isTokenValid,
  doneSuccess,
  getDeleteSuccess,
  getRequest,
  productSuccess,
  sellerProductSuccess,
  productDetailsSuccess,
  getProductsFailed,
  getSellerProductsFailed,
  getProductDetailsFailed,
  getFailed,
  getError,
  getSearchFailed,
  setFilteredProducts,
  getCustomersListFailed,
  customersListSuccess,
  getSpecificProductsFailed,
  specificProductSuccess,

  addToCart,
  removeFromCart,
  removeSpecificProduct,
  removeAllFromCart,
  fetchProductDetailsFromCart,
  updateCurrentUser,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
