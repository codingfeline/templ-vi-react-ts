import { useEffect, useRef } from 'react'
import { ClassCounter } from '../class/ClassCounter'

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
    </div>
  )
}

export default DomRef
