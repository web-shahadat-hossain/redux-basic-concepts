import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("current store", store);
  console.log("actin", action);
  next(action);
};

export default logger;
