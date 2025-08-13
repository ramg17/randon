'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx' // Assuming clsx for cn utility
import { sidebarLinks } from '@/constants'

// Define SidebarProps interface
interface SidebarProps {
  user: {
    name?: string
    // Add other user properties as needed
  }
}

// Utility function for classNames (replacing cn)
const cn = (...inputs: any[]) => clsx(...inputs)

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname()

  return (
    <section className="sidebar">
      <nav className="flex flex-col px-4 gap-4">
        <Link
          href="/"
          className="mb-6 flex cursor-pointer items-center gap-2"
        >
          <Image
            src="/icons/logo.png"
            alt="Gasdaniel logo"
            width={24}
            height={24}
            className="size-[24px] max-xl:size-[24px]"
          />
          <h1 className="text-[26px] font-ibm-plex-serif font-bold text-indigo-900 max-xl:hidden 4xl:text-[20px]">
            Gasdaniel
          </h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link flex items-center gap-2 p-2 rounded-md', {
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
                <p className={cn('text-16 font-semibold text-indigo-900 max-xl:hidden', {
                    'text-white': isActive,
              })}>
                    {item.label}
                </p>
            </Link>
          )
        })}

        USER
      </nav>
       FOOTER
    </section>
  )
}

export default Sidebar