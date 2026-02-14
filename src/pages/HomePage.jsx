import Navbar from '../components/organisms/Navbar'
import HomeLayout from '../components/templates/HomeLayout'

function Home() {
  return (
    <HomeLayout
    navbar={<Navbar/>}
    />
  )
}

export default Home