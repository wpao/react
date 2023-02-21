const root = document.getElementById('root')
function App(){
    // React.useEffect(()=>
    //     fetch('https://api.spaceflightnewsapi.net/v3/blogs')
    //     // .then(function(response){console.log(response)})
    //     // .then(function(response){console.log(response.json())})
    //     // .then(function(response){return response.json()})
    //     // .then(function(response){console.log(response)})
    //     // =======
    //     .then(response=>response.json())
    //     .then(response=>console.log(response))
    // , [])
    // ===
    React.useEffect(function(){
        async function getData(){
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs')
            const response = await request.json()
            console.log(response)
        }
        getData()
    }, [])

    return <h1>hello</h1>
}


ReactDOM.render(<App />, root)