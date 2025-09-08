import AuthForm from "@/components/AuthForm";
import { z } from "zod";



const SignIn = () => {
  return (
    <section className="flex justify-center size-full max-sm:px-6">
      <AuthForm type="sign-in"  />
    </section>
  )
}

export default SignIn