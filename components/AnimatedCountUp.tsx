'use client'
import CountUp from 'react-countup'

const AnimatedCountUp = ({ amount} : {amount: number}) => {
  return (
    <div className="animated-count-up">
        <CountUp 
            end={amount}
            duration={2.75}
            separator=","
            prefix="Tsh "
            decimal='.'
            decimals={2}
            onEnd={() => console.log('CountUp finished!')}
            onStart={() => console.log('CountUp started!')}
            className="text-2xl font-bold text-blue-700 mb-2"
        />
    </div>
  )
}

export default AnimatedCountUp