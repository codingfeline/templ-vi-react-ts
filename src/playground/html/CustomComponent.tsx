import Greet from "../Greet"

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div> <h5>Customer Component</h5>
    {props.}
    </div>
  )
}

export default CustomComponent