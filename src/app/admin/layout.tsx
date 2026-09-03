"use client";
import { supabase } from "@/src/supabase/client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        setAuthorized(true);
      }
    };
    checkSession();
  }, [router]);

  if (!authorized) return null;

  return (
    <div className="w-full py-30 px-30">
      <button
        onClick={async () => {
          await supabase.auth.signOut();
          router.push("/login");
        }}
        className="text-gray-500 hover:text-black hover:cursor-pointer inline-flex items-center gap-2 pb-10"
      >
        Sign out
        <span>
          <LogOut />
        </span>
      </button>
      <main className="flex justify-center">{children}</main>
    </div>
  );
}
