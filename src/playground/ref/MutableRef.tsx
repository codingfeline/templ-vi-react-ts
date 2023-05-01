import { useState, useRef, useEffect } from 'react'
import Text from '../polymorphic/Text'

const MutableRef = () => {
  const [timer, setTimer] = useState(0)
  const interValRef = useRef<number | null>(null)

  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current)
  }

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    return () => {
      stopTimer()
    }
  }, [])

  return (
    <div className="bg-blue-100">
      <h2>MutableRef</h2>
      HookTimer = {timer}
      <button onClick={() => stopTimer()}>Stop Timer</button>
      <h5>Polymorphic Components</h5>
      <Text as="h5" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text htmlFor="someID" as="label" size="sm" color="secondary">
        Label
      </Text>
    </div>
  )
}

export default MutableRef
