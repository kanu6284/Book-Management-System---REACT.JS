import React from 'react';

const Dashboard = () => {
  // Replace 'image-url.jpg' with your actual image URL
  const imageUrl = 'https://media.istockphoto.com/id/1339845062/photo/reading-room-or-library-interior-with-leather-armchair-bookshelf-and-floor-lamp.jpg?s=2048x2048&w=is&k=20&c=LW0L8CbScPswfMuJBoZK3Az8BF9RTB0PBt1boNz9tbo=';

  return (
    <div className="dashboard-container" style={{ display: 'flex', minHeight: '100%' }}>
      <div className="sidebar">
        {/* Sidebar content goes here */}
      </div>
      <div className="content" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', flex: 1 }}>
        <div style={{ padding: '300px', paddingLeft: '400px', paddingRight:'300px', color: 'white' }}>
          Dashboard Content
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
