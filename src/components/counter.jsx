import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Counter extends Component {
    state = {
        count: 0,
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = (product) => {
        // this.setState({
        //     count: this.state.count + 1
        // });
        console.log(product);
    }

    render(){
        return (
        <div> 
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm">Increment</button>
      </div>
        );
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>
    
        return (<ul>{
            //this.state.tags.map(tag => <li key={tag}>{tag}</li>)
            this.state.tags.forEach(tag => {
                return(
                    <li>
                        Monkey
                    </li>
                ); 
            })
        }
        </ul>);
    }

    getBadgeClasses() {

        //Set the class of the span to either a warning badge or a normal badge
        //This is determined by the count in the state

        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        //Object Destructuring
        const { count } = this.state;
        //We're taking the count property from the state of the component and storing
        //it in a constant called count

        return count === 0 ? 'Zero' : count;
    }
}