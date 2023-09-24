import { getData } from "../hooks/useFetch";

export async function getOtherUser(mine: string) {
  try {
    return await getData(`/people/others/${mine}`);
  } catch (err) {
    return err;
  }
}
