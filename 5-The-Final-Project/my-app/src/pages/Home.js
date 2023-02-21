import { useEffect } from "react"

export default function Home() {
    useEffect(function(){
        document.title = 'Home';
    }, [])
    
    return (
    <section className="section">
        <h1 className="section-title">Home</h1>
        <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio incidunt odit sint nam ea commodi provident molestias beatae unde tempora veniam delectus ipsam, iure facere eos? Asperiores, dolorem ducimus!</p>
    </section>
    )
}