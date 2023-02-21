

// 
const root = document.getElementById('root')

// ===========
// function klick(){
//     alert(1)
// }

// const element = (
//     <button onClick={klick}>click me</button>
// )
// ==============
// function klick(msg){
//     alert(msg)
// }

// const element = (
//     <button onClick={function(){
//         klick('hello world')
//     }}>click me</button>
// )
// =======
// function klick(msg){
//     alert(msg)
// }

// const element = (
//     <button onClick={klick.bind(this,'hello world')
//     }>click me</button>
// )
// =======
function klick(msg){alert(msg)}

const element = (
    <button onClick={() => klick('hello world')}>click me</button>
)
// =======

ReactDOM.render(element, root)