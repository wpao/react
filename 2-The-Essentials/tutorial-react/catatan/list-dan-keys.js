const root = document.getElementById('root')

const fruits = ['Apel', 'Duren', 'Naga']

function App(){
    return (
        <ul>
            {/* {fruits.map(function(fruit){
                return <li key={fruit}>{fruit}</li>
            })} */}

            {/* === */}
            {fruits.map(fruit=>
                <li key={fruit}>{fruit}</li>
            )}
        </ul>
    )
}


ReactDOM.render(<App />, root)