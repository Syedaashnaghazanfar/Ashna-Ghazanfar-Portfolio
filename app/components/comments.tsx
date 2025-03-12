"use client";
import { useState, useEffect } from "react";
import { FaTrashAlt, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import { FiSmile } from "react-icons/fi";

interface Comment {
  id: string;
  text: string;
  date: string;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState<string>("");

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to localStorage whenever the comments change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (commentText.trim()) {
      const newComment: Comment = {
        id: new Date().toISOString(),
        text: commentText,
        date: new Date().toLocaleString(),
      };
      setComments((prev) => [newComment, ...prev]);
      setCommentText("");
    }
  };

  const handleDeleteComment = (commentId: string) => {
    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-black rounded-xl border-2 border-yellow-400 shadow-2xl shadow-yellow-400/20 mb-6 mt-6">
      {/* Header with Icon */}
      <div className="flex items-center gap-3 mb-8">
        <FaCommentDots className="text-yellow-400 text-3xl" />
        <h2 className="text-3xl font-bold text-yellow-400">Comments</h2>
      </div>

      {/* Comment Input */}
      <form onSubmit={handleCommentSubmit} className="mb-10 group">
        <div className="relative">
          <input
            type="text"
            value={commentText}
            onChange={handleCommentChange}
            placeholder="Share your thoughts..."
            className="w-full p-4 pl-10 bg-black border-2 border-yellow-400 rounded-lg
                      text-yellow-300 placeholder-yellow-400/60 focus:outline-none
                      focus:ring-2 focus:ring-yellow-400 focus:border-transparent
                      transition-all duration-300"
          />
          <FiSmile className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400 text-xl" />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-yellow-400
                      rounded-lg hover:bg-yellow-300 transition-colors duration-200"
          >
            <FaPaperPlane className="text-black text-xl" />
          </button>
        </div>
      </form>

      {/* Comments List */}
      {comments.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-yellow-400/30 rounded-lg">
          <p className="text-yellow-400/60 text-lg">Be the first to spark the conversation!</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="p-4 bg-black/50 border-2 border-yellow-400/20 rounded-lg
                        hover:border-yellow-400/40 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <FaCommentDots className="text-black text-sm" />
                    </div>
                    <span className="text-yellow-400/80 text-sm">{comment.date}</span>
                  </div>
                  <p className="text-yellow-300 ml-11">{comment.text}</p>
                </div>
                <button
                  onClick={() => handleDeleteComment(comment.id)}
                  className="text-red-400/80 hover:text-red-300 p-2 rounded-lg
                            hover:bg-red-900/20 transition-colors duration-200"
                >
                  <FaTrashAlt className="text-lg" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;