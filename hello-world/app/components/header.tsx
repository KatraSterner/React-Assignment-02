export function Header() {
    return (
        <header className="bg-slate-700 text-lg p-5 flex flex-row justify-between">
            <h1>React Example of Components</h1>
            <ul className="flex flex-row">
                <li className="px-2"><a href="#">Home</a></li>
                <li className="px-2"><a href="#">Info</a></li>
                <li className="px-2"><a href="#">Components</a></li>
            </ul>
        </header>
    )
}