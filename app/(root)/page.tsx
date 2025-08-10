import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox";


const Home = () => {

  const loggedIn = {firstName: "Gaspar"};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
         
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account settings, preferences, and more."
          />
          
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2070900029.45}


          
          />
          

        </header>
      </div>
    </section>
  )
}

export default Home