import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

interface AuthWrapperProps {
  title: string;
  description: string;
  isLoginPage: boolean;
  btnText: string;
  children: React.ReactNode;
  formAction: (FormData: FormData) => Promise<void>;
}

export default function AuthWrapper({
  title,
  description,
  isLoginPage,
  btnText,
  children,
  formAction,
}: AuthWrapperProps) {
  return (
    <Card className="mx-auto xs:max-w-sm w-full mt-16 xs:mt-0 transition-all duration-1000">
      <CardHeader className="relative">
        <div className="absolute h-2 w-24 bg-orange-500 rounded-full top-2 left-1/2 -translate-x-1/2 xs:hidden"></div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <form
            action={async (formData: FormData) => {
              "use server";
              await formAction(formData);
            }}
            className="grid gap-4"
          >
            {children}
            <Button type="submit" className="w-full font-bold">
              {btnText}
            </Button>
          </form>
          <div className="flex items-center gap-2">
            <div className="h-[1px] bg-gray-300 w-full"></div>
            <div className="uppercase text-nowrap text-xs">
              Or continue with
            </div>
            <div className="h-[1px] bg-gray-300 w-full"></div>
          </div>
          <div className="flex gap-4">
            <form className="w-1/2">
              <Button
                type="submit"
                variant="outline"
                className="flex gap-2 w-full font-semibold text-lg"
              >
                <span>
                  <FaGithub />
                </span>
                <span>Github</span>
              </Button>
            </form>
            <form className="w-1/2">
              <Button
                type="submit"
                variant="outline"
                className="flex gap-2 w-full font-semibold text-lg"
              >
                <span>
                  <FcGoogle />
                </span>
                <span>Google</span>
              </Button>
            </form>
          </div>
        </div>

        {isLoginPage ? (
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?&nbsp;
            <Link href="/signup" className="underline">
              Create now
            </Link>
          </div>
        ) : (
          <div className="mt-4 text-center text-sm">
            Already have an account?&nbsp;
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
