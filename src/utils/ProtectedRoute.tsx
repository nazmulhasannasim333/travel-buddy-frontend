"use client";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const handleUnauthorizedAccess = () => {
      dispatch(logout());
      router.push("/login");
      toast.success("Logged out", { duration: 2000 });
    };

    if (!user || user?.role !== "ADMIN") {
      handleUnauthorizedAccess();
    }
  }, [dispatch, user, router]);

  return children;
};

export default ProtectedRoute;
