import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
        }
    }
    render() {
        return (<div>
            Base React Application
        </div>)
    }
}

render(<App />, document.getElementById('app'))
