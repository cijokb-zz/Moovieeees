import React, { Component } from 'react';
import './resizable.scss';
class Resizable extends Component {
    static defaultProps = {
        width: 400,
        height: 300,
    };
    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
        this.resizeCont = React.createRef();
    }
    handleResize(e) {
        let container = this.resizeCont.current;

        let calcWidth = window.document.documentElement.clientWidth - this.innerWidth;

        console.table({
            "window.innerWidth": window.innerWidth,
            "window.document.documentElement.clientWidth": window.document.documentElement.clientWidth,
            "calcWidth": calcWidth,
            "container.offsetWidth": container.offsetWidth,
            "container.style.width": container.style.width,
            "container.getBoundingClientRect().width": container.getBoundingClientRect().width
        });
        // if (container.style) {
        //     if (calcWidth > 0) {
        //         container.style.width = (container.getBoundingClientRect().width + calcWidth) + 'px';
        //     }
        //     else if (calcWidth < 0) {
        //         container.style.width = (container.getBoundingClientRect().width - calcWidth) + 'px';
        //     }
        //     //container.style.width = (window.innerWidth - 60) + 'px'; 
        // }
        this.innerWidth = window.document.documentElement.clientWidth;
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.innerWidth = window.document.documentElement.clientWidth;
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    render() {
        let { width, height } = this.props;
        return (<div ref={this.resizeCont} style={{ width: width + 'px', height: height + 'px' }} className="resizable-container">
            <div style={{ width: '100%', height: '100%' }}>
                {
                    this.props.children
                }
            </div>
        </div>
        );
    }
}
export default Resizable;