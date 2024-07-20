import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown, FaComment, FaRetweet, FaTrash } from 'react-icons/fa'; // Importing icons from react-icons

// Define the Card component
const Card = ({ title, image }) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [comment, setComment] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [retweets, setRetweets] = useState(0);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
    setSuccessMessage('Liked successfully!');
  };

  const handleDislike = () => {
    setDislikes((prevDislikes) => prevDislikes + 1);
    setSuccessMessage('Disliked successfully!');
  };

  const handleComment = () => {
    setShowCommentInput(true);
  };

  const handleSubmitComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setSuccessMessage('Comment added successfully!');
      setShowCommentInput(false);
      setComment('');
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    setSuccessMessage('Comment deleted successfully!');
  };

  const handleRetweet = () => {
    setRetweets((prevRetweets) => prevRetweets + 1);
    setSuccessMessage('Retweeted successfully!');
  };

  return (
    <div style={{ width: 'calc(25% - 20px)', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
      <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }} />
      <div style={{ padding: '20px' }}>
        <h3>{title}</h3>
        <p>Explore the beauty of {title}.</p>
        <button onClick={handleLike} style={buttonStyle}><FaThumbsUp /> Like ({likes})</button>
        <button onClick={handleDislike} style={buttonStyle}><FaThumbsDown /> Dislike ({dislikes})</button>
        <button onClick={handleComment} style={buttonStyle}><FaComment /> Comment</button>
        {showCommentInput && (
          <div style={{ marginTop: '10px' }}>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              style={{ padding: '5px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '60%' }}
            />
            <button onClick={handleSubmitComment} style={buttonStyle}>Submit</button>
          </div>
        )}
        {comments.map((c, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '10px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
            <p style={{ flexGrow: 1 }}>{c}</p>
            <button onClick={() => handleDeleteComment(index)} style={{ ...buttonStyle, backgroundColor: 'red' }}><FaTrash /> Delete</button>
          </div>
        ))}
        <button onClick={handleRetweet} style={buttonStyle}><FaRetweet /> Retweet ({retweets})</button>
      </div>
      {successMessage && <p style={{ textAlign: 'center', marginTop: '20px', color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

// Define the BlogPage component
const BlogPage = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Blog Posts</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <Card title="Himachal Book" image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D" />
        <Card title="Uttar Pradesh Book" image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8fDA%3D" />
        <Card title="Punjab Book" image="https://images.unsplash.com/photo-1677652565537-9d725adb8222?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3ByaXR1YWwlMjBib29rfGVufDB8fDB8fHww" />
        <Card title="Jammu Book" image="https://images.unsplash.com/photo-1608659597669-b45511779f93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3ByaXR1YWwlMjBib29rc3xlbnwwfHwwfHx8MA%3D%3D" />
      </div>
    </div>
  );
};

// CSS for button style
const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '10px',
  marginBottom: '10px',
};

export default BlogPage;
