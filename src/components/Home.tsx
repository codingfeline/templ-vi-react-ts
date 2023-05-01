import Compo from './Compo'
import { Awe, envelope } from '../components/icons'
import Button from './Button'
import { useState } from 'react'
import Input from '../playground/Input'
import { ThemeContextProvider } from '../playground/context/ThemeContext'
import Box from '../playground/context/box'

import { UserContextProvider } from '../playground/context/UserContext'
import User from '../playground/context/User'

const Home = () => {
  const [test, setTest] = useState(null)
  return (
    <div>
      <h2>Home</h2>
      <Awe icon={envelope} />

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <button>button</button>
      <Compo />
      <Button
        handleClick={(event, id) => {
          console.log('button clicked', event, id)
        }}
      />
      <Input value="" handleChange={event => console.log(event)} />
    </div>
  )
}

export default Home
