import React from 'react';
import { connect } from 'react-redux';

const MainList = props => {
    return (
        <>
            { props.error ? (
                <div>{ props.error }</div>
            ) : (
                props.smurfs.map( smurf => <div key={ smurf.name }>{ smurf.name }</div>)
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {}
)(MainList)