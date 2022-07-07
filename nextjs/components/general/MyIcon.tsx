export default function MyIcon({name}: { name: string }) {
    return (
        <svg style={{
            width: '1em',
            height: '1em',
            verticalAlign: '-0.15em',
            fill: 'currentcolor',
            overflow: 'hidden'
        }}>
            <use xlinkHref={name}/>
        </svg>
    )
}
