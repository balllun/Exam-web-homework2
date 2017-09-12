import React from  'react';

class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.state = {num1:"" ,num2:""};
    }

    setNum1(n1){
        const num1 = parseInt(n1.target.value);
        this.setState({num1: num1});
    }

    setNum2(n2){
        const num2 = parseInt(n2.target.value);
        this.setState({num2: num2})
    }

    getSUM(){

        return this.state.num1+this.state.num2;
    }

    getSUB(){
        return this.state.num1-this.state.num2;
    }

    getNUMK(){
        return this.state.num1*this.state.num2;
    }

    getsubn(){
        return this.state.num1/this.state.num2;
    }

    onClicksum()
    {
        this.setState({sum: this.getSUM()})
        let str ="/SumRouting/" +this.state.num1+"+"+this.state.num2+"="+ this.getSUM();
        window.location.href=str;
    }

    onClicksub()
    {
        this.setState({sum: this.getSUB()})
        let str ="/SumRouting/" +this.state.num1+"-"+this.state.num2+"="+ this.getSUB();
        window.location.href=str;
    }

    onClicknumk()
    {
        this.setState({sum: this.getNUMK()})
        let str ="/SumRouting/" +this.state.num1+"*"+this.state.num2+"="+ this.getNUMK();
        window.location.href=str;
    }

    onClicksubn()
    {
        this.setState({sum: this.getsubn()})
        let str ="/SumRouting/" +this.state.num1+"÷"+this.state.num2+"="+ this.getsubn();
        window.location.href=str;
    }

    render(){
        // console.log(this.props);

        return(
           <div>
               <div>
                   <h2>ENTER NUMBER</h2>
               </div>

                  <div>

                      <div> num1: <input onChange={this.setNum1.bind(this)} name="num1"/></div>
                      <div> num2: <input onChange={this.setNum2.bind(this)} name="num2"/></div>
                      <button onClick={this.onClicksum.bind(this)}>+</button>
                      <button onClick={this.onClicksub.bind(this)}>-</button>
                      <button onClick={this.onClicknumk.bind(this)}>*</button>
                      <button onClick={this.onClicksubn.bind(this)}>/</button>
                      {/*<div name="sum">*/}
                          {/*/!*SUM = {this.state.sum}*!/*/}
                          {/*/!*{this.props.sum}*!/*/}
                      {/*</div>*/}
                  </div>
               {/*-----Test------*/}
               {/*<h1>SUM + : {this.getSUM()}</h1>*/}
               {/*<h1>SUM - : {this.getSUB()}</h1>*/}
               {/*<h1>SUM * : {this.getNUMK()}</h1>*/}
               {/*<h1>SUM / : {this.getsubn()}</h1>*/}

           </div>
            
        );
    }
}



export default Calculator;