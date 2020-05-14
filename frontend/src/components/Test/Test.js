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
            console.log(store.getState().varTest);
            this.setState({
                name: store.getState().varTest.name,
                age: store.getState().varTest.age
            })
        });
    }

    componentDidMount() {
        this.props.addName({
            name: 'Manuscrit'
        });

        this.props.addAge({
            age: 12
        });
    }


    testClick() {
        this.props.addName({
            name: 'Clément Vilain'
        });

        this.props.addAge({
            age: 22
        });
    }

    render() {
        <Fragment>
            <p>{this.varTest.name}</p>
            <p>{this.varTest.age}</p>
            <button onClick={testClick}>Modifier</button>
        </Fragment>  
    }
}

const mapStateToProps = state => {
    return {
        name: varTest.name,
        age: varTest.age
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