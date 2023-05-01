type InputProps = React.ComponentProps<'input'>

const CustomInput = (props: InputProps) => {
  return (
    <div>
      <h5>Custom Input</h5>
      <input {...props} />
    </div>
  )
}

export default CustomInput
