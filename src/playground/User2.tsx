import { Auth } from '@supabase/auth-ui-react'
import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { increment, reset } from '../features/counter/counterSlice'

type AuthUser = {
  name: string
  email: string
}

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const counter = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const handleLogin = () => {
    setUser({
      name: 'Chlo',
      email: 'chlo@domain.uk',
    })
  }

  const handleLogout = () => {
    setUser({} as AuthUser)
  }

  return (
    <div>
      <h2>user</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user.name && JSON.stringify(user)}
      <hr />
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      {counter}
    </div>
  )
}

export default User
