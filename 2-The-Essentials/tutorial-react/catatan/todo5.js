const root = document.getElementById('root')
function App(){
    const [activity, setActivity] = React.useState('')
    const [edit, setEdit] = React.useState({})
    const [todos, setTodos] = React.useState([])

    function generateId(){
        return Date.now()
    }

    function saveTodoHendler(event){ event.preventDefault()

        if(edit.id){
            const updatedTodo = {
                id: edit.id,
                activity
            }

            const editTodoIndex = todos.findIndex(function(todo){
                return todo.id == edit.id
            })
            
            const updatedTodos = [...todos]
            updatedTodos[editTodoIndex] = updatedTodo

            setTodos(updatedTodos)   
            return cencleEditHandler()       
        }

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
        if(edit.id) cencleEditHandler()
    }

    function editTodoHandler(todo){
        setActivity(todo.activity)
        setEdit(todo)
    }

    function cencleEditHandler(){
        setEdit({})
        setActivity('')
    }

    return (<>
        <form onSubmit={saveTodoHendler}>
            <input type="text" placeholder="nama" value={activity} onChange={nilai => setActivity(nilai.target.value)} />
            <button type="submit">{edit.id ? 'save' : 'add'}</button>
            {edit.id && <button onClick={cencleEditHandler}>batal edit</button>}
        </form>
        <ul>
            {todos.map(function(todo){
                return <li key={todo.id}>
                    {todo.activity}
                    <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                    <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
                </li>
            })}
        </ul>        
    </>)
}

ReactDOM.render(<App />, root)