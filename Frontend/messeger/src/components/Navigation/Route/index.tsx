import useNavigation from "../../../hooks/useNavigation";

interface Props {
  path: string;
  children: React.ReactElement;
}

export default function Route({ path, children }: Props) {
  const { currentPath } = useNavigation();
  if (path === currentPath) {
    return children;
  }

  return null;
}
