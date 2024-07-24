import Post from "./components/Post";


// you can always return one single element on react. You must have on root JSX element.
function App() {
  return (
  <main>
    <Post author="Dairan" body="React is amazing!"/>
    <Post author="Pepe" body="I love React!"/>
  </main>
  );
}

export default App;