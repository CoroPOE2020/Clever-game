import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store/store';
import { addAge, addName, fetchPokemonData } from '../../store/slices/testSlice';


class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: null,
            pokemon: '',
            error: null
        };

        store.subscribe(() => {
            this.setState({
                name: store.getState().test.name,
                age: store.getState().test.age,
                pokemon: store.getState().test.pokemon,
                error: store.getState().test.error
            });
        });

        this.testClick = this.testClick.bind(this);
    }

    componentDidMount() {
        this.props.addName({
            name: 'Manuscrit'
        });

        this.props.addAge({
            age: -12
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
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
                <p>{this.state.pokemon}</p>
                <button onClick={this.testClick}>Modifier</button>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
        age: state.age,
        pokemon: state.pokemon,
        error: state.error
    }
};

const mapDispatchToProps = { addName, addAge, fetchPokemonData };

export default connect(mapStateToProps, mapDispatchToProps)(Test);