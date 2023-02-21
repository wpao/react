const root = document.getElementById('root')
function App(){
    const [activity, setActivity] = React.useState('')
    const [todos, setTodos] = React.useState([])

    function generateId(){
        return Date.now()
    }

    function addTodoHendler(event){
        event.preventDefault()

        setTodos([
            ...todos, 
            {
                id: generateId(),
                activity
            }
        ])
        setActivity('')
    }

    function removeTodoHandler(todoId){
        const filteredTodos = todos.filter(function(todo){
            return todo.id !== todoId
        })
        setTodos(filteredTodos)
    }

    return (<>
        <form onSubmit={addTodoHendler}>
            <input type="text" placeholder="nama" value={activity} onChange={nilai => setActivity(nilai.target.value)} />
            <button type="submit">add</button>
        </form>
        <ul>
            {todos.map(function(todo){
                return <li key={todo.id}>
                    {todo.activity}
                    <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
                </li>
            })}
        </ul>        
    </>)
}

ReactDOM.render(<App />, root)