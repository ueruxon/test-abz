import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header/header';
import LeftAside from '../components/left-aside/leftAside';
import RightAside from '../components/right-aside/rightAside';
import CategoriesList from '../components/categories/categories';

import { fetchCategories } from '../actions/index';

import styles from './main.scss';

class Main extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        console.log(this.props);
        
        return <Fragment>
                <Header />
                <main className={styles.wrapper}>
                    <LeftAside />
                    {this.props.categories && <CategoriesList categories={this.props.categories} /> }
                    <RightAside />
                </main>
            </Fragment>;
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    isFetch: state.isFetching
});

export default connect(
    mapStateToProps,
    { fetchCategories }
)(Main);
