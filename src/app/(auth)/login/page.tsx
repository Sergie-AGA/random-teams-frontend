"use client";

import Logo from "@/components/Logo/Logo";
import LoginFormContainer from "@/features/auth/components/Forms/LoginFormContainer";

export default function Login() {
  return (
    <div className="max-width-container flex items-center justify-center h-[calc(100vh-40px)] pl-4 pr-4">
      <section className="flex gap-4 w-full justify-center max-w-screen-lg flex-col md:flex-row items-center">
        <div className="flex-1 flex flex-col">
          <div className="mb-10">
            <Logo />
          </div>
          <p className="text-xl">Choose your Log In Method:</p>
        </div>
        <div className="flex-1">
          <LoginFormContainer />
        </div>
      </section>
    </div>
  );
}
