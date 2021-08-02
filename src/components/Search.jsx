import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

         _fetchResults = async () => {
        const response = await fetch(`https://randomuser.me/api/?gender=${this.state.value}&results=6`)
        .then(response => response.json())
        this.setState({
            searchResults: response.results
        })
    }

    handleChange(event) {
        console.log('GENDER IS: ',event.target.value)
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
      }


    render() {
        // const { searchResults } = this.state
        return (
            <>
            <h2>Narrow Your Search By Gender!</h2>
            <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
                <button type="submit" onClick={this._fetchResults} data-testid="genderButton">Search</button>
            </form>

            <div className="SearchResults" data-testid="usersContainerGender">
                {this.state.searchResults.map((result) => 
                    <div className="userCard">
                        <h3>{result.name.first} {result.name.last}</h3>
                        <img src={result.picture.large} alt="fake user"/>
                        <p data-testid="gender"><strong>Gender: </strong>{result.gender}</p>
                        <p><strong>Age: </strong>{result.dob.age}</p>
                        <p><strong>Hometown:</strong> {result.location.city}, {result.location.country}</p>
                    </div>
                )}
            </div>
            </>
        )
    }
}


export default Search;