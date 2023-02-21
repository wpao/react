const root = document.getElementById('root')
function App(){
    const [activity, setActivity] = React.useState('')
    const [todos, setTodos] = React.useState([])

    function addTodoHendler(event){
        event.preventDefault()

        setTodos([...todos, activity])
        setActivity('')
    }

    return (<>
        <form onSubmit={addTodoHendler}>
            <input type="text" placeholder="nama" value={activity} onChange={nilai => setActivity(nilai.target.value)} />
            <button type="submit">add</button>
        </form>
        <ul>
            {todos.map(function(todo){
                return <li key={todo}>{todo}</li>
            })}
        </ul>
        
    </>)
}

ReactDOM.render(<App />, root)