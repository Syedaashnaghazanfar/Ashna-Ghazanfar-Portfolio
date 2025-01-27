"use client";
import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
interface Comment {
  id: string;
  text: string;
  date: string;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState<string>("");

  // Load comments from localStorage on component ount
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to localStorage whenever the comments change 
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);

  // Handle comment text change
  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };

  // Handle comment submission
  const handleCommentSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (commentText.trim()) {
      const newComment: Comment = {
        id: new Date().toISOString(), // Unique ID for the comment
        text: commentText,
        date: new Date().toLocaleString(),
      };

      setComments((prevComments) => [newComment, ...prevComments]);
      setCommentText(""); // Clear input field after submission
    }
  };

  // Handle comment deletion
  const handleDeleteComment = (commentId: string) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className="comment-section p-6 max-w-4xl mx-auto border-2 border-solid border-gray-700 rounded-lg shadow-lg mb-6 mt-6">
    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Comments</h2>
  
    {/* Comment Input */}
    <form onSubmit={handleCommentSubmit} className="my-6 space-y-4">
      <input
        type="text"
        value={commentText}
        onChange={handleCommentChange}
        placeholder="Write your comment..."
        className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 dark:focus:ring-primary focus:ring-gray-600"
      />
      <button
        type="submit"
        className="w-full py-3 bg-gray-600 hover:bg-gray-500 dark:bg-primary text-white dark:text-black dark:hover:text-white rounded-lg dark:hover:bg-primary-foreground transition-colors duration-200"
      >
        Submit
      </button>
    </form>
  
    {/* Display Comments */}
    {comments.length === 0 ? (
      <p className="text-center text-gray-500">No comments yet. Be the first to comment!</p>
    ) : (
      <ul className="space-y-6">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="ml-0 p-4 border border-gray-600 rounded-lg bg-gray-300 text-gray-200 flex justify-between"
          >
            <div>
              <p className="text-lg text-black dark:text-white">{comment.text}</p>
              <span className="text-sm text-gray-800">{comment.date}</span>
            </div>
            <button
              onClick={() => handleDeleteComment(comment.id)}
              className="ml-4 text-red-500 hover:text-red-700 transition-colors"
            >
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
  
  );
};

export default Comments;