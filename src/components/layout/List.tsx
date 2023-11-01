// generic Type

import { ReactNode } from "react";

interface ListProps<T>{
    items: T[],
    render: (item: T) => ReactNode
}

// <T extends {}> or <T,> to recognise TS it is a genegic
export const List = <T extends {}>({items, render}: ListProps<T>) => {
  return (

    <ul>
        {
            items.map((item, i) => (
                <li key={i}>
                    {render(item)}
                </li>
            ))
        }
    </ul>
  )
}
