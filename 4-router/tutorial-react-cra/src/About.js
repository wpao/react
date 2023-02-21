import { Link, Outlet } from "react-router-dom";

export default function About(){
    return (
    <>
    <h1>Halaman About</h1>
    <p>silahkan lihat <Link to="/about/team">Team</Link></p>
    <Outlet />
    </>
    )
}