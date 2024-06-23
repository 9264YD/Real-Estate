import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import "./profile.scss";
import apiRequest from "../../lib/apiRequest";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext"
import { useNavigate, Link } from "react-router-dom";

function ProfilePage() {
  const {updateUser,currentUser} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async() => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null)
      navigate("/");
    }catch(err){
      console.log(err);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
            <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src= {currentUser.avatar || "avatar.png"}
              alt="" 
              />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
              <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;