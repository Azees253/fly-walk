import jwt from "jsonwebtoken";

const authMiddleWare = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Autorized Login Again" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!req.body) {
      req.body = {};
    }
    req.body._id = token_decode.id; // Use userId from decoded token
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Errors" });
  }
};

export default authMiddleWare;
