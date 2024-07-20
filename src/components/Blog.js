import "./App.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import Chat from "../components/chat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    // Cleanup function to handle disconnection when component unmounts
    return () => {
      socket.emit("leave_room", room);
    };
  }, [room]);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1399284554/photo/group-member-discusses-her-review-of-the-book.jpg?s=2048x2048&w=is&k=20&c=E3G2vvPke8Dx8TqXzczq20Yhliasfblre31j8lX2wLQ=')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
