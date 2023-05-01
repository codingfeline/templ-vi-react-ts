type ButtonProps = {
  variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <div>
      <h5>Custom Button</h5>
      <button className={`class-with-${variant}`} {...rest}>
        {children}
      </button>
    </div>
  )
}

export default CustomButton

// imported in /ref
