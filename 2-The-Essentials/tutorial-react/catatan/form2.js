const root = document.getElementById('root')
function App(){
    const [nama, setNama] = React.useState('Nauval')

    function ketikaSubmit(event){
        event.preventDefault()

        console.log('nama: ', nama)
    }

    return (
        <form onSubmit={ketikaSubmit}>
            <div>
                <label>Nama: </label>
                <input type="text" name="nama" value={nama} onChange={event=>setNama(event.target.value)} />
            </div>
            <button type="submit">add</button>
        </form>
    )
}


ReactDOM.render(<App />, root)