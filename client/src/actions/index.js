import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const status = await axios.get("/api/v1/user");

  dispatch({ type: FETCH_USER, payload: status.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/v1/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
