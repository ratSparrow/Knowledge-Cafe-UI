import PropTypes from 'prop-types';
import SingleBookmark from './SingleBookmark';

const Bookmark = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
      <div>
        <h3 className="text-4xl">Reading Time: {}</h3>
      </div>
      <h2 className="text-3xl text-center ">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <SingleBookmark key={idx} bookmark={bookmark}></SingleBookmark>
      ))}
    </div>
  );
};

export default Bookmark;

Bookmark.propTypes = {
  bookmarks: PropTypes.object.isRequired,
};
