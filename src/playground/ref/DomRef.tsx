import { useEffect, useRef } from 'react'
import { ClassCounter } from '../class/ClassCounter'
import Private from '../componentProp/Private'
import { Profile } from '../componentProp/Profile'
import List from '../generics/List'
import RandomNumber from '../restriction/RandomNumber'
import Toast from '../templateLiterals/Toast'

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!)
  // -- ! without the exclamation mark, below needs optional chaining inputRef.current?.focus()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <input type="text" ref={inputRef} />
      <ClassCounter message="The counter value is " />
      <Private isLoggedIn={false} component={Profile} />
      <Private isLoggedIn={true} component={Profile} />
      <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={item => console.log(item)}
      />
      <List items={[1, 2, 3, 4]} onClick={item => console.log(item)} />

      <RandomNumber value={10} isPositive={true} />

      <Toast position="center" />
    </div>
  )
}

export default DomRef
