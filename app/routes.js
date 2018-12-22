import auth from "./routes/auth/auth";

const router = (app) => {
  app.use("/auth", auth);
};

export default router;
