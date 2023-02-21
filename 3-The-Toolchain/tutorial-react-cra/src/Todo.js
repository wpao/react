import React from "react";

function Todo(){
    const [activity, setActivity] = React.useState('')
    const [edit, setEdit] = React.useState({})
    const [todos, setTodos] = React.useState([])
    const [message, setMessage] = React.useState('')

    function generateId(){
        return Date.now()
    }

    function saveTodoHendler(event){ event.preventDefault()

        if(!activity){
            return setMessage('Nama activity jangan kosong')
        }

        setMessage('')

        if(edit.id){
            const updatedTodo = {
                ...edit,
                activity
            }

            const editTodoIndex = todos.findIndex(function(todo){
                return todo.id === edit.id
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
                activity,
                done: false
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

    function doneTodoHandler(todo){
        const updatedTodo = {
            ...todo,
            done: todo.done ? false : true
        }

        const editTodoIndex = todos.findIndex(function(currentTodo){
            return currentTodo.id === todo.id
        })
        
        const updatedTodos = [...todos]
        updatedTodos[editTodoIndex] = updatedTodo

        setTodos(updatedTodos)
    }

    return (<>
        {message && <div style={{color: 'red'}}>{message}</div>}
        <form onSubmit={saveTodoHendler}>
            <input type="text" placeholder="nama" value={activity} onChange={nilai => setActivity(nilai.target.value)} />
            <button type="submit">{edit.id ? 'save' : 'add'}</button>
            {edit.id && <button onClick={cencleEditHandler}>batal edit</button>}
        </form>
        {todos.length > 0 ? (
           <ul>
            {todos.map(function(todo){
                return <li key={todo.id}>
                    <input type="checkbox" checked={todo.done} onChange={doneTodoHandler.bind(this, todo)} />
                    {todo.activity}({todo.done ? 'selesai' : 'belum selesai'})
                    <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                    <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
                </li>
            })}
        </ul>   
        ) : (<i>Tidak ada todo</i>)}              
    </>)
}

export default Todo;

