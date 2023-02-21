const root = document.getElementById('root')
function App(){
    const namaRef = React.useRef(null)

    function ketikaSubmit(event){
        event.preventDefault()
        const nama = namaRef.current.value
        console.log('nama: ', nama)
    }

    return (
        <form onSubmit={ketikaSubmit}>
            <div>
                <label>Nama: </label>
                <input type="text" name="nama" ref={namaRef} />
            </div>
            <button type="submit">add</button>
        </form>
    )
}


ReactDOM.render(<App />, root)