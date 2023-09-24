import { useMemo } from "react";
import { useQuery } from "react-query";
import useAuth from "../../../hooks/useAuth";
import useUsers from "../../../hooks/useUsers";
import { getOtherUser } from "../../../utils/services";
import { Aside, Bold, Flex, Padder } from "./styles";

export default function UserData() {
  const { users, set } = useUsers();
  const { user } = useAuth();
  const { isLoading } = useQuery(["users"], async () => {
    const res = await getOtherUser(user);
    set(res);
    return res;
  });

  const getUsers = useMemo(() => {
    if (users === undefined) {
      return [];
    }
    return users;
  }, [users]);

  return (
    <Aside>
      <Padder>
        <Flex>
          <Bold>People</Bold>
        </Flex>
      </Padder>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div>
          {getUsers.map((el: any, index) => {
            return (
              <div
                style={{ paddingLeft: "200px", border: "1px solid grey" }}
                key={index}
              >
                {el.name}
              </div>
            );
          })}
        </div>
      )}
    </Aside>
  );
}
