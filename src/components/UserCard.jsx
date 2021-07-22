import React from 'react';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            allUsers: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this._fetchUsers();
        this._fetchAllUsers();
    }

    _fetchUsers =  () => {
        this.setState({
            isLoading: true
        }, async () => {
            const response = await fetch('https://randomuser.me/api/?results=1')
            .then(response => response.json());
            this.setState({
                userInfo: response.results,
                isLoading: false
            })
        })
    }

    _fetchAllUsers = async () => {
        const response = await fetch('https://randomuser.me/api/?results=6')
        .then(response => response.json());
        this.setState({
            allUsers: response.results
        })
    }

    render() {
        const { userInfo, allUsers, isLoading } = this.state
        return(
            <>
            <h1>Generate a Fake Identity</h1>
            <h2>{!!isLoading ? "Generating Identity..." : 'Your identity: '}</h2>
                {userInfo.map((information) => 
                   <div className="IdentityDiv">
                    <h3>{information.name.first} {information.name.last}</h3>
                    <img src={information.picture.large} alt="fake user"/>
                    <p><strong>Gender: </strong>{information.gender}</p>
                    <p><strong>Age: </strong>{information.dob.age}</p>
                    <p><strong>Hometown:</strong> {information.location.city}, {information.location.country}</p>
                    </div>
                )}
            <button type="button" onClick={this._fetchUsers}>Get a New Identity</button>

            <div className="AllUsers">
                <h2>Don't like those Indenties? Choose From One of These:</h2>
                {allUsers.map((user) => 
                    <div className="userCard">
                        <h3>{user.name.first} {user.name.last}</h3>
                        <img src={user.picture.large} alt="fake user"/>
                        <p><strong>Gender: </strong>{user.gender}</p>
                        <p><strong>Age: </strong>{user.dob.age}</p>
                        <p><strong>Hometown:</strong> {user.location.city}, {user.location.country}</p>
                    </div>
                
                )}
            </div>
            <button type="button" onClick={this._fetchAllUsers}>Generate Different Identities</button>
            </>
        )
    }
}



export default UserCard;