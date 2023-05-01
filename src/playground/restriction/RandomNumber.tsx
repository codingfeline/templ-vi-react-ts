type RandomNumberType = {
  value: number
  isPositive?: boolean
  isNegative?: boolean
  isZero?: boolean
}

type PositiveNumber = RandomNumberType & {
  isPositive: boolean
  isNegative?: never
  isZero?: never
}

type NegativeNumber = RandomNumberType & {
  isNegative: boolean
  isPositive?: never
  isZero?: never
}

type Zero = RandomNumberType & {
  isZero: boolean
  isPositive?: never
  isNegative?: never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      <h5>RandomNumber</h5>
      {value} {isPositive && 'positive'} {isNegative && 'negative'} {''}
      {isZero && 'zero'}
    </div>
  )
}

export default RandomNumber

// imported in /ref
