import { CSSProperties, LegacyRef } from 'react'

export default function MyIcon({name,style}:
  { name: string,style?:CSSProperties }
) {
    return (
        <svg
          aria-hidden="true"
          style={{
            width: '1em',
            height: '1em',
            verticalAlign: '-0.15em',
            fill: 'currentcolor',
            overflow: 'hidden',
            ...style
        }}>
            <use xlinkHref={'#'+name}/>
        </svg>
    )
}
