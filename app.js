import express from "express";
import LoginRoutes from "./app/auth/login.js";
import SignupRoutes from "./app/auth/signup.js";
import ProductRoutes from "./app/router/product.js";
import CartRoutes from "./app/router/cart.js";
import ProfileRoutes from "./app/router/profile.js";

const app = express();
app.use(express.json());
app.use(SignupRoutes);
app.use(LoginRoutes);
app.use(ProductRoutes);
app.use(CartRoutes);
app.use(ProfileRoutes)

export default app;
