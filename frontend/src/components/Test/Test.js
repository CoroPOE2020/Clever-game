import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store/store';

class Test extends Component {
    constructor(props) {
        super(props);

        this.varTest = {
            name: '',
            age: null
        };

        store.subscribe(() => {
            console.log(store.getState().test.name);
            this.setState({
                name: store.getState().test.name,
                age: store.getState().test.age
            })
        });

        this.testClick = this.testClick.bind(this);
        this.sayHello = this.sayHello.bind(this);

    }

    componentDidMount() {
        this.props.addName({
            name: 'Manuscrit'
        });

        this.props.addAge({
            age: 12
        });
    }

    sayHello() {
        alert('Hello!');
      }

    testClick() {
        this.props.addName({
            name: 'Clément Gentil'
        });

        this.props.addAge({
            age: 22
        });
    }

    render() {
        // return (
        //     <Fragment>
        //         <p>{this.varTest.name}</p>
        //         <p>{this.varTest.age}</p>
        //         <button onClick={this.testClick}>Modifier</button>
        //     </Fragment>
        // )
        return (
            <button onClick={this.testClick}>
              Click me!
            </button>
          );
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
        age: state.age
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addName: payload => dispatch({
            type: 'ADD_NAME',
            payload
        }),
        addAge: payload => dispatch({
            type: 'ADD_AGE',
            payload
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);