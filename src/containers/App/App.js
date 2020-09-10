import React, { Component } from 'react'
import LoremGenerator from '../../components/LoremGenerator/LoremGenerator';


class MainApp extends Component {
    render(){
        return(
            <div style={{textAlign: "center"}}>
                <LoremGenerator />
                
                
            </div>
        )
    }
}

export default MainApp;