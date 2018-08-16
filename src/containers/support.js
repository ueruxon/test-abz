import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/support/header';
import SupportForm from '../components/support/form';

class Support extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SupportForm />
            </div>
        )
    }
}



export default connect(null, null)(Support);

