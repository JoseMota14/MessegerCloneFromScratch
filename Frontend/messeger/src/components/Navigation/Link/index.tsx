import { HiChat } from "react-icons/hi";
import { HiUsers } from "react-icons/hi2";
import useNavigation from "../../../hooks/useNavigation";
import { Icon, LinkContainer } from "./styles";

interface Props {
  to: string;
  children: React.ReactNode;
}

export default function Link({ to, children }: Props) {
  const { navigate } = useNavigation();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <LinkContainer href={to} onClick={handleClick}>
      <Icon aria-hidden="true" />
      {children === "Conversations" ? (
        <HiChat></HiChat>
      ) : children === "Users" ? (
        <HiUsers></HiUsers>
      ) : (
        <></>
      )}
      {children}
    </LinkContainer>
  );
}
