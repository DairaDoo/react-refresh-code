const names = ['Dairan', 'Samir'];

function Post() {

    // choose a random name any time the page is up.
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];

    return (
    <div>
         <p>{chosenName}</p> {/* Between those curly braces we can put any javascript expresion*/}
        <p>React.js is an amazing framework.</p>
    </div>
    );
}

export default Post;