import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

// you can always return one single element on react. You must have on root JSX element.
function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false); // state para mostrar y ocultar el modal.

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }


  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList
         isPosting={modalIsVisible} 
         onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;