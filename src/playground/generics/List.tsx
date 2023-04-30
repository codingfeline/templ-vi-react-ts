import { ReactNode } from 'react'

type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}

// extends {} means except anything
// restrictions can be set eg, T extends number | string
const List = <T extends number | string>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item as ReactNode}
          </div>
        )
      })}
    </div>
  )
}

export default List

// imported in /ref
