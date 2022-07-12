import React, { Component } from 'react'
import ErrorDetail from './ErrorDetail'

export default class ErrorBoundary extends Component {
    state = {
        errorMessage: ''
    }
    //it is a static life-cycle method
    //this method will be executed as soon as there is an error thrown by child component.this is executed before render, wheras componentDidCatch() is executed after render
    //you must return a new state object from this method
    //NOTE: never ever call setState() method in this method
    //React JS passes one argument to this method (the error object thrown by child component)
    //you should use this method in order set the state early
    static getDerivedStateFromError(err) {
        return {
            errorMessage: err.message
        }
    }
    render() {
        if (this.state.errorMessage === '')
            return this.props.children
        else
            return <ErrorDetail message={this.state.errorMessage} />
    }
    /**
     * this method will be called if any of the children component throws error, but after render
     * wil receive two arguments: a complete error object and stack of the error
     * you can use this method to catch error later and set the state by calling setState method
     * also you can log error stack
     * this method is mainly used to log error in database/file etc.
     */
    componentDidCatch(err, errorStack) {
        // this.setState({
        //     errorMessage: err.message
        // })
        // console.log(err.message);
        // console.log(errorStack)
        if (this.props.errorLogger !== undefined) {
            this.props.errorLogger(err, errorStack)
        }
    }
}
