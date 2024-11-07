import './Post.css'
import styles from './Post.module.css'
import { Route, Routes, useParams } from "react-router-dom"
import posts from 'json/posts.json'
import PostModelo from "componentes/postModelo";
import ReactMarkDown from "react-markdown";
import NaoEncontrado from 'paginas/NaoEncontrado';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';
const Post = () =>{
    const parametros = useParams();
    const post = posts.find((post) =>{
        return(post.id === Number(parametros.id))
    })
    if (!post) {
        return <NaoEncontrado/>
    }
        const postsRecomendados = posts
            .filter((post) =>
                post.id !== Number(parametros.id))
            .sort((a,b) => b.id - a.id)
            .slice(0,4)

    return(
        <Routes> 
            <Route path='*' element={<PaginaPadrao/>}>
                <Route index element={
                    <PostModelo
                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}>
                    <div className="post-markdown-container">
                        <ReactMarkDown>
                            {post.texto}
                        </ReactMarkDown>
                    </div>
                    <h2 
                        className={styles.tituloOutrosPosts}>
                        Recomendação de outros posts
                    </h2>
                    <ul className={styles.postsRecomendados}>
                        {postsRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        ))}
                    </ul>
                 </PostModelo>
            }/>

            </Route>
        </Routes>


)
}
export default Post