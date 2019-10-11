import React, {Component} from 'react'
import './gnomes.css'

class Gnomes extends Component {

constructor(props) {
super(props)
this.state = { citizens: this.props}
}

render() {

    

    return(
        <div className="citizens">
        {/* {citizens.forEach( elm =>  <p>elm.name</p>) */}

        })}
        </div>
    )
}


}
export default Gnomes