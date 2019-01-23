import React, { Component } from 'react';
class DropDown extends Component {
    constructor(props) {
        super(props);
        this.toggleList = this.toggleList.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.state = {
            itemSelected: false,
            list: [],
            open: false,
            selectedItem: null
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ list: nextProps.data });
    }
    toggleList(e) {
        e.preventDefault();
        this.setState({ open: !this.state.open });
    }
    selectItem(e) {
        e.preventDefault();
        e.stopPropagation();
        let type = e.target.dataset.type;
        this.setState({ selectedItem: type });
        this.props.dropDownFilter(type);
    }
    render() {
        const list = this.state.list;
        return (
            <div className="dropdown" onClick={this.toggleList}>
                {list.length > 0 ? <label>{this.props.title ? this.props.title : "Title"}</label> : null}
                {this.state.open && list ?
                    <div onClick={this.selectItem}>
                        {list.map(function (item, index) {
                            return <DropDownList key={index} {...item} />
                        })}
                    </div> : null}
            </div>
        );
    }
}


const DropDownList = ({ type }) => (
    <div data-type={type}>{type}</div>
)

export default DropDown;