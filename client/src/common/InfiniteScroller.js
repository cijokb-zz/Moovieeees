import React, { Component } from 'react';
class InfiniteScroller extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.InfiniteScrollerRef = React.createRef();
    }

    componentDidMount() {
        //listen for scroll events
        this.InfiniteScrollerRef.current.addEventListener('scroll', () => {
            console.log("scrolling");
        });
    }
    render() {
        return (
            <div className="InfiniteScroller" ref={this.InfiniteScrollerRef} style={{ height: (this.props.height || '250') + 'px', overflow: 'scroll' }}>
                {this.props.children}
            </div >
        );
    }
}

export default InfiniteScroller;