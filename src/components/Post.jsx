import classes from './Post.module.css'
// los estilos se importan como objetos con propiedades al usar el module.css 
// el module css es la manera en que se importa el css a los componentes.

function Post(props) {

    return (
    <li className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
    </li>
    );
}

export default Post;