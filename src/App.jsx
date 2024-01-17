import './App.css'
import Profile from './components/Profile'

function App() {

  const user = {
    name: 'Rita Correia',
    avatar: 'https://r2.starryai.com/results/911754633/bccb46bd-67fe-47c7-8e5e-3dd39329d638.webp',
    location: 'London',
    followers: '80k',
    likes: '803k',
    photos: '1.4k'
  }

  return (
    <>
      <Profile user={user}/>
    </>
  )
}

export default App
