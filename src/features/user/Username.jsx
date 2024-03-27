import { useSelector } from "react-redux";

const Username = () => {
  const { username } = useSelector((state) => state.user);
  if (!username) return null;
  return <p className="text-sm font-semibold hidden md:block">{username}</p>;
};

export default Username;
