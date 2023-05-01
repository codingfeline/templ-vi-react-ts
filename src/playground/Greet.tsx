type GreetProps = {
  name: string
  messageCount?: number
  isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props
  return (
    <div>
      <h5>Greet</h5>
      {props.isLoggedIn
        ? `Welcome ${props.name}! You have ${messageCount} unread messages`
        : 'Welcoe Guest'}
    </div>
  )
}

export default Greet

// imported in CustomComponents to demo Extracting a Components Prop Type
