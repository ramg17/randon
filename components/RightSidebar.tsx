import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'

const RightSidebar = ({ user, transactions, banks}: RightSidebarProps) => {
  return (
    <aside className="right-sidebar no-scrollbar">
        <section className=" flex flex-col mb-6 no-scrollbar">
            <div className='profile-banner bg-gradient-mesh no-scrollbar' />
            <div className='profile'>
                <div className='flex-center justify-center absolute -top-8 size-24  rounded-full bg-conic-180 from-indigo-400 via-indigo-50 to-indigo-400 border-6 border-white shadow-profile px-3'>
                    <span className='text-7xl  font-bold text-indigo-900'>
                        {user.firstName[0]}
                    </span>
                </div>
                <div className='profile-details'>
                    <h1 className='text-24 font-semibold text-gray-900'>
                        {user.firstName} {user.lastName}
                    </h1>
                    <p className='text-16 font-normal text-gray-600'>
                        {user.email}

                    </p>
                </div>
            </div>
        </section>
        <section className='banks'>
            <div className=' flex w-full justify-between'>
                <h2 className='text-18 font-semibold text-gray-900'>
                    My Banks
                </h2>
                <Link href="/" className='flex gap-2 '>
                  <Image 
                     src="/icons/plus.svg"
                     height={20}
                     width={20}
                     alt='plus'
                     
                  />
                  <h2 className='text-14 font-semibold text-gray-700'>
                    Add Bank
                  </h2>
                </Link>
            </div>

        {banks?.length > 0 && (
             <div className="relative flex flex-1 flex-col items-center justify-center            gap-5">
               <div className="relative z-10">
                 <BankCard
                   key={banks[0].$id}
                   account={banks[0]}
                   userName={`${user.firstName} ${user.lastName}`}
                   showBalance={false}
                 />
               </div>
               {banks[1] && (
                 <div className="absolute right-0 top-8 z-0 w-[90%]">
                   <BankCard
                     key={banks[1].$id}
                     account={banks[1]}
                     userName={`${user.firstName} ${user.lastName}`}
                     showBalance={false}
                   />
                 </div>
               )}
  </div>
)}
        </section>
    </aside>
  )
}

export default RightSidebar