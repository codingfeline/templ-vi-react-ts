/*
 ** Position prop can be one of 'left-center' | 'left-top' | 'left-bottom' and the rest of the permutaions
 */

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    | 'center'
}

const Toast = ({ position }: ToastProps) => {
  return (
    <div>
      <h2>Toast Notification Position - {position}</h2>
    </div>
  )
}

export default Toast

// imported in /ref
