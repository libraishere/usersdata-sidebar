import React, { useEffect, useState } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        setUsers(await response.json());
    }
    useEffect(() =>{
        getUsers();
    }, []);
    return(
        <div className="container-fluid mt-5">
            <div className="row">
              {
                  users.map((curElement) => {
                     return (
                        <div className="col-lg-3 col-md-4 col-6 mb-3">
                            <div className="card">
                                <div className="coverImg"><img src={curElement.url} title="" /></div>
                                <div className="userInfo d-sm-flex p-4">
                                    <div className="userPic mb-3"><img src={curElement.thumbnailUrl} title="" /></div>
                                    <div className="userContent flex-grow-1">
                                        <h3>Rakesh Kumar</h3>
                                        <span>@designer</span>
                                        <p>{curElement.title}</p>
                                    </div>
                                </div>
                                <div className="buttonUser px-4 pb-4">
                                    <a href="#" className="btn btn-primary">Following</a>
                                </div>
                            </div>
                        </div>
                     )
                  })
              }
                
            </div>
        </div>
    )
}

export default UserList;