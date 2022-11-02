export default function Card(props) {
    return(
        <div className="card">
            <a href={props.linkurl}>{props.name}</a>
        </div>
    )
}