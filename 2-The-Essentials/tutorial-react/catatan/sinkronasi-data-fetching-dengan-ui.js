const root = document.getElementById('root')
function App(){
    const [news, setNews] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(function(){
        fetch('https://api.spaceflightnewsapi.net/v3/blogs')
        .then(response=>response.json())
        .then(response=>setNews(response))
        setLoading(false)
    }, [])

    return (<><h1>hello</h1>
        {loading ? (<i>loading...</i>) : (
        <ul>
            {news.map(item=>
            <li key={item.id}><img width="400" src={item.imageUrl} /></li>
            // console.log(item.imageUrl)
            )}        
        </ul>
        )}
    </>)
}

ReactDOM.render(<App />, root)