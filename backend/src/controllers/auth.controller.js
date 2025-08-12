import {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} from "http-status-codes";
export const signup = (req, res) => {
  res.send("Signup");
};
export const signin = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(StatusCodes.LENGTH_REQUIRED);
  } else {
  }
};
export const logout = (req, res) => {
  res.send("logout");
};
