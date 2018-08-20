import React from 'react';
import { connect } from 'react-redux';

import ReactModal from 'react-modal';

import Header from '../components/support/header';
import SupportForm from '../components/support/form';
import AboutUs from '../components/support/aboutUs';
import Footer from '../components/support/footer';

import styles from './main.scss';

import { fetchTypes, sendMessage } from '../actions/index';

class Support extends React.Component {
    state = {
        typeValue: '',
        files: [],
        textInArea: '',
        showModal: false
    };

    componentDidMount() {
        this.props.fetchTypes();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.answer !== this.props.answer) {
            this.setState({ showModal: true });
        }
    }

    setTypeValue = event => {
        const value = event.target.value;
        this.setState({ typeValue: value });
    };

    changeTextArea = text => {
        this.setState({ textInArea: text });
    };

    upLoadFile = files => {
        if (files[0]) {
            this.setState({
                files: [...this.state.files, files[0]]
            });
        }
    };

    handleCloseModal = () => {
        this.setState({ showModal: false });
    };

    submit = values => {
        const { files } = this.state;
        const message = new FormData();

        const formatData = {
            ...values,
            ['enquiry_type']: values.otherType || values['enquiry_type']
        };

        files.forEach((file, i) => {
            message.append(`file${i + 1}`, file, file.name);
        });

        for (const key in formatData) {
            message.append(key, formatData[key]);
        }

        this.props.sendMessage(message);
    };

    render() {
        return (
            <div>
                <Header />
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Sending Message"
                    onRequestClose={this.handleCloseModal}
                    className={styles.Modal}
                    overlayClassName={styles.Overlay}
                    ariaHideApp={false}
                >
                    <div>
                        <p>{this.props.answer}</p>
                    </div>
                </ReactModal>
                <SupportForm
                    types={this.props.types}
                    onSubmit={this.submit}
                    setTypeValue={this.setTypeValue}
                    data={this.state}
                    upLoadFile={this.upLoadFile}
                    changeTextArea={this.changeTextArea}
                />
                <AboutUs />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    types: state.typesReducer.types,
    isFetch: state.typesReducer.isFetching,
    answer: state.typesReducer.answer
});

export default connect(
    mapStateToProps,
    { fetchTypes, sendMessage }
)(Support);
