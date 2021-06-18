const  chatRoutes=require("./chatRoutes.js");
const  adminRoutes=require("./adminRoutes.js");
const  authRoutes=require("./authRoutes.js");

module.exports = (app)=>{
  app.use("/chat", chatRoutes);
  app.use("/adminpage", adminRoutes);
  app.use("/auth", authRoutes);
};
