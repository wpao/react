import { useParams } from "react-router-dom";

export default function BlogDetail(){
    const urlParams = useParams();
    return (
        <>
        <h2>Detail</h2>
        <p>Lorem ipsum, {urlParams.slug} dolor sit amet consectetur adipisicing elit. Expedita vel aut accusantium minus quaerat sunt veniam ipsa facere. Est reiciendis nam ullam nobis distinctio assumenda earum recusandae dolores accusantium animi?</p>
        </>
    );
}