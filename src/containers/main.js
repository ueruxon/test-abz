import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import ReactModal from 'react-modal';

import Header from '../components/header/header';
import LeftAside from '../components/left-aside/leftAside';
import RightAside from '../components/right-aside/rightAside';
import CategoriesList from '../components/categories/categories';
import LoaderBlock from '../components/otherBlocks/loaderBlock';

import { fetchCategories } from '../actions/index';

import styles from './main.scss';

class Main extends React.Component {
    state = {
        showModal: false
    };

    componentDidMount() {
        this.props.fetchCategories();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.error) {
            this.setState({ showModal: true });
        }
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    };

    render() {
        const { isFetch, categories, error } = this.props;

        return (
            <Fragment>
                <Header />
                <main className={styles.wrapper}>
                    <LeftAside />
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="onRequestClose Example"
                        onRequestClose={this.handleCloseModal}
                        className={styles.Modal}
                        overlayClassName={styles.Overlay}
                        ariaHideApp={false}
                    >
                        <div>
                            <span>
                                <strong>Error. Status: {error.status}</strong>
                            </span>
                            <p>{error.description}</p>
                            <span>Please, trying again</span>
                        </div>
                    </ReactModal>
                    <LoaderBlock loading={isFetch}>
                        <CategoriesList categories={categories} />
                    </LoaderBlock>
                    <RightAside />
                </main>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    isFetch: state.isFetching,
    error: state.error
});

export default connect(
    mapStateToProps,
    { fetchCategories }
)(Main);
