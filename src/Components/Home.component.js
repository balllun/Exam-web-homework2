import React, {Component} from  'react';
import './Calculator.component';
import Calculator from "./Calculator.component";


class Home extends React.Component{
    render(){
        return(
            <div>
               <h1 className="Text-menubar">Calculator</h1>
                <div>
                    <Calculator/>
                </div>

            </div>
        );
    }
}
export default Home;