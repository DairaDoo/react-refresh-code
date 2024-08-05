import classes from './Post.module.css'
import { Link } from 'react-router-dom';
// los estilos se importan como objetos con propiedades al usar el module.css 
// el module css es la manera en que se importa el css a los componentes.

function Post({id, author, body}) {

    return (
    <li className={classes.post}>
        <Link to={id}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </Link>
    </li>
    );
}

export default Post;