import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BankCard = ({account, userName, showBalance = true}: CreditCardProps) => {
  return (
    <div className='flex flex-col'>
        <Link href='/' className='relative flex h-[190px] w-full max-w-[320px] justify-between rounded-[20px] border border-white shadow-creditCard backdrop-blur-[6px] bg-[#0179FE]'>
        <div className='relative z-10 flex size-full max-w-[228px] flex-col justify-between rounded-l-[20px]  bg-[#0179FE]  px-5 pb-4 pt-5'>
            <div>
                <h1 className='text-16 font-semibold text-white'>

                    {account.name || userName}

                </h1>
                <p className='font-ibm-plex-serif font-black text-white'>

                    {formatAmount(account.currentBalance)}

                </p>
            </div>
            <article className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                    <h1 className='text-12 font-semibold text-white'>
                        {userName}
                    </h1>
                    <h2 className='text-12 font-semibold text-white'>
                        ●●/●●
                    </h2>
                </div>
                <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                    ●●●● ●●●● ●●●● <span className='text-16'>1234</span>
                </p>
            </article>
        </div>

        <div className='flex size-full flex-1 flex-col items-end justify-between rounded-r-[20px] bg-[#026be3] bg-cover bg-center bg-no-repeat py-5 pr-5'>
            <Image
            src="/icons/Paypass.svg"
            height={20}
            width={24}
            alt='pay'
             />
            
            <Image
            src="/icons/mastercard.svg"
            height={45}
            width={40}
            alt='mastercard'
            className='ml-5'
             />
        </div>
            <Image
            src="/icons/lines.png"
            height={316}
            width={300}
            alt='lines'
            className='absolute top-0 left-0'
             />
        </Link>
    </div>
  )
}

export default BankCard