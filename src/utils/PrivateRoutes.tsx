import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";

const PrivateRoutes = ({ children }) => {
  const user = useAppSelector(selectCurrentUser);
  const router = useRouter();
  console.log(user);

  if (!user) {
    router.push("/login");
  }
  return children;
};

export default PrivateRoutes;
