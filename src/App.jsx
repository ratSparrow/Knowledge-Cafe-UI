import Blogs from './components/blog/Blogs';
import Bookmark from './components/bookmarks/Bookmark';
import Header from './components/header/Header';
import { useState } from 'react';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = blog => {
    console.log(blog);
    const newBookmarkBlog = [...bookmarks, blog];
    setBookmarks(newBookmarkBlog);
  };
  const handleMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
          readingTime={readingTime}
        ></Blogs>
        <Bookmark readingTime={readingTime} bookmarks={bookmarks}></Bookmark>
      </div>
    </>
  );
}

export default App;
