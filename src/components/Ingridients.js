export default function Ingridients(props) {
    return (
        <>{props.ingridients.map(ing => <li key={ing}>{ing}</li>)}
           
        </>
    )
}