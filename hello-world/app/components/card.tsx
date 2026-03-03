export function Card(props: any) {
    return (
        <div className="card m-2 p-2 bg-slate-500 rounded-md items-center flex flex-col">
            <img src={props.url} alt="image of {props.name}" className="mh-100"></img>
            <h3 className="font-bold text-lg">{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}