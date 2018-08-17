import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/support/header';
import SupportForm from '../components/support/form';

import { fetchTypes } from '../actions/index';

class Support extends React.Component {
    state = {
        typeValue: ''
    };

    setTypeValue = event => {
        const value = event.target.value;
        this.setState({ typeValue: value });
    };

    componentDidMount() {
        this.props.fetchTypes();
    }

    submit = values => {
        console.log(values);
    };

    render() {
        return (
            <div>
                <Header />
                <SupportForm
                    types={this.props.types}
                    onSubmit={this.submit}
                    setTypeValue={this.setTypeValue}
                    typeValue={this.state.typeValue}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    types: state.typesReducer.types,
    isFetch: state.typesReducer.isFetching
});

export default connect(
    mapStateToProps,
    { fetchTypes }
)(Support);
