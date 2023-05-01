type ButtonProps = {
  variant: 'primary' | 'secondary'
  children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <div>
      <h5>Custom Button</h5>
      <button className={`class-with-${variant}`} {...rest} f>
        {children}
      </button>
    </div>
  )
}

export default CustomButton

// imported in /ref
