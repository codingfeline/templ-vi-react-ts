import { useEffect, useRef } from 'react'
import { ClassCounter } from '../class/ClassCounter'
import Private from '../componentProp/Private'
import { Profile } from '../componentProp/Profile'

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!)
  // -- ! without the exclamation mark, below needs optional chaining inputRef.current?.focus()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <h2>domref</h2>
      <input type="text" ref={inputRef} />

      <h3>Class Counter</h3>
      <ClassCounter message="The counter value is " />

      <h3>Auth</h3>
      <Private isLoggedIn={false} component={Profile} />
      <Private isLoggedIn={true} component={Profile} />
    </div>
  )
}

export default DomRef
