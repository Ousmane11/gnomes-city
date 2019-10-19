import React, { Component } from "react"
import "./gnomes.css"

class Gnomes extends Component {
  constructor(props) {
    super(props);
    this.state = { citizens: [] }
    this.filter = false
  }

  static getDerivedStateFromProps(props, state) {
    if (props.currentRow !== state.lastRow) {
    }
    return { citizens: props.citizens }
  }

  handleSearch = e => {
    this.filter = true
    const { value } = e.target
    const copyAllGnomes = [...this.state.citizens]
    const gnomeFiltered = copyAllGnomes.filter(gnome => {
      return gnome.name.includes(value)
    })
    console.log(gnomeFiltered)
    this.setState({ filteredGnomes: gnomeFiltered })
  }

  render() {
    return (
      <>
        <main>
          <section className="search-filter">
            <label>Search a Citizen</label>
            <input onChange={e => this.handleSearch(e)} />
          </section>

          {/* //Searching citizens in the input */}
          {this.state.filteredGnomes &&
            this.state.filteredGnomes.map(elm => (
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

                    {elm.professions.map((jobs, idx) => (
                      <p key={idx}>{jobs} </p>
                    ))}
                  </div>

                  <div className="friends">
                    <h3>Friends</h3>
                    {elm.friends.length <= 0 ? (
                      <p>Has no friends</p>
                    ) : (
                      <p>{elm.friends.map(friends => friends)}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

          {/* //Full list of Gnomes. Nothing being searched */}
          {!this.state.filteredGnomes &&
            this.state.citizens &&
            this.state.citizens.map(elm => (
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

                    {elm.professions.map((jobs, idx) => (
                      <p key={idx}>{jobs} </p>
                    ))}
                  </div>

                  <div className="friends">
                    <h3>Friends</h3>
                    {elm.friends.length <= 0 ? (
                      <p>Has no friends</p>
                    ) : (
                      <p>{elm.friends.map(friends => friends)}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

        </main>
        )}
      </>
    )
  }
}

export default Gnomes
