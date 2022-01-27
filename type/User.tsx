import { InferGetStaticPropsType } from "next";
import Address from "./Address";

export type UserResponse = {
  user?: User;
} & InferGetStaticPropsType<any>;

export type User = {
  id?: Number;
  name?: String;
  email?: String;
  website?: String;
  address?: Address;
}

export default User;