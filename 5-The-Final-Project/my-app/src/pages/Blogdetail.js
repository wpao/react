
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function Blogdetail() {
    const params = useParams();
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(function(){
        document.title = 'Blog Detail';
        async function getArticle(){
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`)
            
            if(!request.ok){
                return setNotFound(true)
            }
            
            const response = await request.json()

            setArticle(response)
            setLoading(false)
        }
        getArticle()
    }, [params])

    if(notFound){
        return <h1>Article tidak ditemukan</h1>
    }

    return (
        <section className="section">
            {loading ? (
                <i>Loading...</i>
            ) : (
                <article className="article">
                    <h2 className="article-title">{article.title}</h2>
                    <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
                    <img src={article.imageUrl} className="article-image" alt="sorry" />
                    <p className="article-summery">{article.summary}</p>
                    <p className="article-source">Source:{' | '}<a href={article.url} target="_blank" rel="noreferrer">{article.newsSite}</a></p>
                </article>
            ) }
            
        </section>
    )
}