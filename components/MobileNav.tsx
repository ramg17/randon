'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";


const MobileNav = ({user}: MobileNavProps) => {

    const pathname = usePathname();



  return (
    <section className="w-full  max-w-[264px]">
        <Sheet>
        <SheetTrigger>
            <Image
                src="/icons/hamburger.svg"
                alt="Menu"
                width={24}
                height={24}
                className="cursor-pointer"
            />
        </SheetTrigger>

      <SheetContent side="left" className="px-4  border-none bg-gradient-to-b from-blue-100 via-sky-100 to-indigo-200 dark:bg-gradient-to-b dark:from-blue-100 dark:via-sky-100 dark:to-indigo-200">
            <Link
                 href="/"
                 className="mb-4 flex cursor-pointer mt-4 items-center gap-2"
                 >
                <Image
                 src="/icons/logo.png"
                 alt="Gasdaniel logo"
                 width={24}
                 height={24}
                 className="size-[24px] max-xl:size-[24px]"
               />
               <h1 className="text-[26px] font-ibm-plex-serif font-bold      text-indigo-900  4xl:text-[20px]">
                 Gasdaniel
               </h1>
           </Link>


           <div className="mobilenav-sheet">
             <SheetClose asChild>

              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                 {sidebarLinks.map((item) => {
             const isActive = pathname === item.route || pathname.startsWith(`$   {item.route}/`)



               return (
                  <SheetClose asChild key={item.route}>
                   <Link
                     href={item.route}
                     key={item.label}
                     className={cn('mobilenav-sheet_close flex gap-4 p-2       rounded-md', {
                       'bg-indigo-400 text-indigo-900': isActive,
                     })}
                     >
                   <div className='relative size-6'>
                      <Image
                      src={item.imgURL}
                      alt={item.label}
                      
                      fill
                        className={cn('size-6', {
                            'brightness-[3] invert-0': isActive,
                        })}
                       />
                     </div>
                    <p className={cn('text-16 font-semibold text-indigo-900', {
                    'text-white': isActive,
                     })}>
                    {item.label}
                    </p>
                   </Link>
                  </SheetClose>
                   
                  )
                })}

                  USER
              </nav>
             </SheetClose>
             FOOTER
           </div>
     </SheetContent>
   
</Sheet>
    </section>
  )
}

export default MobileNav