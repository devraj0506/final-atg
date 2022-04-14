import React,{useEffect,useState} from 'react'
import axios from "axios";
import './userlist.css'
import Spinner from './Spinner';
import UserDetails from './UserDetails';
import profile from './profilr.jpg'
import ReactImageFallback from "react-image-fallback";
import  {Link} from 'react-router-dom'


function UserList(props) {

    // const { url } = props;
    const [names, setNames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [img, setImg] = useState(true);
    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get("https://602e7c2c4410730017c50b9d.mockapi.io/users");
                setNames(data);
                console.log(data);
                setLoading(false)
            } catch (err) {
                console.error(err);
                alert("something went wrong")
            }
        };
        fetch();
    }, []);

    return (

        <div className='user-one'>

        {loading ? <Spinner /> : 
                <div className="userlist">
                    <h1 className='userlist-heading'>User List</h1>

                    {names.map((property) => (
                        <article key={property.id}>
                            <Link to ={`/user/${property.id}`}>
                            <div className="box">
                            <ReactImageFallback
                    src={names.avatar}
                    fallbackImage={profile}
                    initialImage={profile}
                    alt="cool image should be here"
                    className="small-pic" />
                                <p className="name-link">{property.profile.firstName}{property.profile.lastName}</p>
                            </div>
                            </Link>
                        </article>
                    ))}

                        {/* <UserDetails /> */}


                </div>
        
        }


       

        </div>
    )
}

export default UserList