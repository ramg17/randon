
import React from 'react'
import AnimatedCountUp from './AnimatedCountUp'
import DoughnutChart from './DoughnutChart'

const TotalBalanceBox = ({
    accounts = [],
    totalBanks,
    totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className="total-balance-chart">
         { /*DoughnutChart*/}
            <DoughnutChart accounts={accounts} />

        </div>

        <div className='flex flex-col gap-6 items-start justify-center gap-4'>
            <h2 className='header-2'>

                Bank Accounts: {totalBanks} 
            </h2>
            <div className='flex flex-col items-start justify-center gap-2'>
                <p className='total-balance-text'>
                    Total Current Balance
                   
                </p>
                <div className='total-balance-amount'>
                  <AnimatedCountUp amount={totalCurrentBalance} />
                </div>
            </div>

        </div>
    </section>
  )
}

export default TotalBalanceBox