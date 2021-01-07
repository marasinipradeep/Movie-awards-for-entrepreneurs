import React from 'react'

export default function SearchBar(props) {
    return (

        
        <div>
            <form>

                <div className="row">
                    <p className="col-md-12">Movie Title: </p>
                    <input onChange={props.handleSearch} type="text"></input>
                </div>
            </form>

        </div>
    )
}
