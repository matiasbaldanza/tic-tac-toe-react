export default function NotificationsBanner({ turn }) {
    return <h2 className={turn}>{turn.toUpperCase()} plays!</h2>
}