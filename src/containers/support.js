import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/support/header';
import SupportForm from '../components/support/form';

import { fetchTypes } from '../actions/index';

class Support extends React.Component {
    componentDidMount() {
        this.props.fetchTypes();
    }

    render() {
        return (
            <div>
                <Header />
                <SupportForm types={this.props.types}/>
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
