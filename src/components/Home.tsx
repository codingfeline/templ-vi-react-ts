import Compo from './Compo'
import { Awe, envelope } from '../components/icons'

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Awe icon={envelope} />
      <button>button</button>
      <Compo />
    </div>
  )
}

export default Home
