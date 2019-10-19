import React, { Component } from "react";
import "./gnomes.css";

class Gnomes extends Component {
  constructor(props) {
    super(props);
    this.state = { citizens: [] };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    if (props.currentRow !== state.lastRow) {
    }
    return { citizens: props.citizens };
  }

  render() {
    return (
      <>
        {this.state.citizens && this.state.citizens.map(elm => 
            <div className="grid" id={elm.id} key={elm.id}>
              <figure className="image">
                <img alt="profileImage" src={elm.thumbnail}></img>

                  <h2>{elm.name}</h2>
                
              </figure>

              <ul>
                <li>{elm.age} years old</li>
                <li>{elm.weight} kilos</li>
                <li>{elm.height} cm</li>
                <li>Hair color: {elm.hair_color}</li>
              </ul>
              <div className="card-box">
                   <div className="jobs">
                        <h3>Jobs</h3>
                        <ul>
                          {elm.professions.map(jobs =>  <li>{jobs}</li>)}
                        </ul>
                   </div>
   
                   <div className="friends">
                       <h3>Friends</h3>
                       {elm.friends.length <= 0 ? <p>Has no friends</p> :
                       <p>{elm.friends.map(friends => friends )}</p>
                       }
                   </div>
                </div>
            </div>
          )})}
      </>
    )
  }
}

export default Gnomes;
