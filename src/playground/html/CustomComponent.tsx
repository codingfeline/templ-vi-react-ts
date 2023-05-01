import Greet from '../Greet'

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      {' '}
      <h5>Custom Component</h5>
      {props.messageCount}
    </div>
  )
}

export default CustomComponent
