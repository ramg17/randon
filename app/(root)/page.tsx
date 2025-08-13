'use client'

import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";


const Home = () => {

  const loggedIn = {firstName: "Gaspar", lastName: "Daniel", email:"gasdanielcompany@gmail.com"};

  return (
    <section className="home no-scrollbar">
      <div className="home-content no-scrollbar">
        <header className="home-header no-scrollbar">
         
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account settings, preferences, and more."
          />
          
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={207090000.55}
          />

        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 82200003.50}, {currentBalance: 1200000003.50}]}
      />
    </section>
  )
}

export default Home