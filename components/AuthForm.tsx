'use client'


import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


import { email, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Custominput from './Custominput'


const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  
})

const AuthForm = ({type}:{type:string}) => {

    const [user, setUser] =useState(null);

      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <section className='flex min-h-screen w-full max-w-[420px] flex-col  gap-5 py-10 md:gap-8'>
        <header className='flex flex-col  gap-5 md:gap-8'>
             <Link
                 href="/"
                 className="mb-4 flex cursor-pointer mt-4 items-center justify-center gap-2"
                 >
                <Image
                 src="/icons/logo.png"
                 alt="Gasdaniel logo"
                 width={24}
                 height={24}
                 className="size-[24px] max-xl:size-[24px]"
               />
               <h1 className="text-[26px] font-ibm-plex-serif font-bold text-indigo-900  4xl:text-[20px]">
                 Gasdaniel
               </h1>
           </Link>
           <div className='flex flex-col   gap-2 md:gap-4'>
            <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
            {user
            ? 'Link Account'

            : type === 'sign-in'
              ? 'Sign In'
              : 'Sign Up'
            }


             <p className='text-16 font-normal text-gray-600 '>
              {user
              ? 'link your account to get started'
              : 'Please enter your details'
              }

            </p>
            </h1>
           </div>
        </header>
        {user ? (
          <div className='flex flex-col w-full gap-2 md:gap-4'>
            {/* PlaidLink */}
          </div>)
          : (
              <>
              <Form {...form}>
                 <form onSubmit={form.handleSubmit(onSubmit)}className="space-y-8">
                 
                       <Custominput
                       form={form}
                       name="Username"
                       label="Username"
                       placeholder="Enter your username"
                       />

                      <Custominput
                       form={form}
                       name="Password"
                       label="Password"
                       placeholder="Enter your Password"
                       />
                       
                      <Button type="submit">Submit</Button>
                  </form>
               </Form>
              </>
          )
          }
    </section>
  )
}

export default AuthForm