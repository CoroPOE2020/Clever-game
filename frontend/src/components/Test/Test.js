import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store/store';
import { addAge, addName, fetchPokemonData } from '../../store/reducers/reducerTest';

class Test extends Component {
    constructor(props) {
        super(props);

        this.varTest = {
            name: '',
            age: null,
            pokemon: null
        };

        store.subscribe(() => {
            console.log(store.getState().test);
            this.setState({
                name: store.getState().test.name,
                age: store.getState().test.age,
                pokemon: store.getState().test.pokemon
            })
        });

        this.testClick = this.testClick.bind(this);
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
            name: 'Clément Gentil'
        });

        this.props.addAge({
            age: 22
        });

        this.props.fetchPokemonData('ditto');
    }

    render() {
        return (
            <Fragment>
                <p>{store.getState().test.name}</p>
                <p>{store.getState().test.age}</p>
                <p>{store.getState().test.pokemon}</p>
                <button onClick={this.testClick}>Modifier</button>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
        age: state.age,
        pokemon: state.pokemon
    }
};

const mapDispatchToProps = { addName, addAge, fetchPokemonData };

// const mapDispatchToProps = dispatch => {
//     return {
//         addNameCall: payload => dispatch(addName(payload)),
//         addAgeCall: payload => dispatch(addAge(payload)),
//         getPokemonCall: () => dispatch(getPokemon())
//     }
// };

export default connect(mapStateToProps, mapDispatchToProps)(Test);