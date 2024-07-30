import Blogs from './components/blog/Blogs';
import Bookmark from './components/bookmarks/Bookmark';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </>
  );
}

export default App;
