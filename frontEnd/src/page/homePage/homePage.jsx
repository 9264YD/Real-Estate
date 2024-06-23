import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import './homePage.scss';
import { AuthContext } from "../../context/authContext";

function HomePage() {
    const {currentUser} = useContext(AuthContext)

    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                <h1 className="title">Get Your Dream Property</h1>
                <p>
                Your premier destination for real estate listings and property services.
                </p>
                <SearchBar />
                <div className='boxes'>
                <div className='box'>
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                </div>
                <div className='box'>
                    <h1>200</h1>
                    <h2>Award Gained</h2>
                </div>
                <div className='box'>
                    <h1>1200+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
            </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage;