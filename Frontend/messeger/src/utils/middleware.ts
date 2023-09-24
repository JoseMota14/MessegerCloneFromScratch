import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { Link } from "../models/links";

export const Paths: Link[] = [
  { label: "Home", path: "/", icon: HiArrowLeftOnRectangle },
  { label: "Conversations", path: "/conversations", icon: HiChat },
  { label: "Users", path: "/users", icon: HiUsers },
];
