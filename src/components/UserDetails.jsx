import React, { useEffect, useState } from "react";
import "./userdetails.css";
import axios from "axios";
import profile from "./profilr.jpg";
import ReactImageFallback from "react-image-fallback";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

const UserDetails = () => {
  const [details, setDetails] = useState();
//   const [handleer, setHandleer] = useState(false);
//   const [httpcode, setHttpcode] = useState();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
        .then((res) => {
          setDetails(res.data);
          console.log("I am here");
          setLoading(false)
        })
        .catch((error) => {
            console.log(error);
        alert("Something went wrong")
        });
    };
    fetch();
}, [id]);

  // console.log(details)

  return (
    <>
    

      {details && (
        <div className="user-details">
          {/* {details && <h2>{details.profile.username}</h2>} */}

          {/* <h1 className="USER-DETAILS-HEADING">User Details</h1> */}

          {/* <img className='profile-pic' src={profile} alt="" /> */}

          <ReactImageFallback
            src={details.avatar}
            fallbackImage={profile}
            initialImage={profile}
            alt="cool image should be here"
            className="profile-pic"
          />

          <p className="username">{details.profile.username}</p>

          <div className="bio">
            <p className="bio-text">{details.Bio}</p>
          </div>

          <div className="rest-details">
            <div className="name">
              <label htmlFor="Full name" className="fullname">
                Full name
              </label>
              <div className="name-box">
                <p className="name">{details.profile.email}</p>
              </div>
            </div>

            <div className="name">
              <p className="fullname">Full Name</p>
              <div className="name-box">
                <p className="name">
                  {details.profile.firstName} {details.profile.lastName}
                </p>
              </div>
            </div>

            <div className="name">
              <p className="fullname">Job title</p>
              <div className="name-box">
                <p className="name">{details.jobTitle}</p>
              </div>
            </div>
          </div>
        </div>
      ) }
      
    </>
  );
};


export default UserDetails;
