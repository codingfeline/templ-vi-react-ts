import Login from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
  isLoggedIn: boolean
  component: React.ComponentType<ProfileProps>
}

const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Chloie" />
  } else {
    return <Login />
  }
}

export default Private

// imported in /ref
