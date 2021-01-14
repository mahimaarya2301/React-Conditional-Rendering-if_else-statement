//Import Area
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Let's create a Class Component
class A extends Component {
    //1.Property
    state = {  }

    //2.Constructor
    constructor(props){
        super(props);
        this.state = { isLoggedIn: true};
    }

    //3.Method
    //Every Class Component must have render method which return HTML(JSX) 
    render() { 
        //Let's create a local variable
        let {isLoggedIn} = this.state;
        return ( 
            <div>
                <h1>Conditional Rendering</h1>
                {
                    (function(){
                        if( isLoggedIn ){
                            //True
                            return <button>Logged Out</button>
                        }else{
                            //False
                            return <button>Logged In</button>
                        }
                    })()
                }
            </div>
         );
    }
}
 
ReactDOM.render(<A />,document.getElementById('root'));