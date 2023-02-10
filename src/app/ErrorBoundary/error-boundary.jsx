import React from "react";

export class ErrorBoundary extends React.Component {



  static getDerivedStateFromError(error, errInfo) {
    console.log( error, errInfo)
  }
  render() {
    const {isError} = this.props;
    if (isError) {
      return <h3 style={{color:"indianred", backgroundColor:"white", padding:"20px"}}>Что-то пошло не так, попробуйте позже!</h3>
    }
    return this.props.children
  }
}