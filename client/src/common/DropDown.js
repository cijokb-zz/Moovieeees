import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.toggleList = this.toggleList.bind(this);
        this.selectItem = this.selectItem.bind(this);
        let filters = props.filters;
        let selectedItem = filters[0].type;

        this.state = {
            itemSelected: false,
            list: filters,
            open: false,
            selectedItem: selectedItem
        };

        console.log(this.state);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ list: nextProps.filters, selectedItem: nextProps.filters[0].type });
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
        console.log(list);
        // return (
        //     <div className="dropdown" onClick={this.toggleList}>
        //         {list.length > 0 ? <label>{this.props.title ? this.props.title : "Title"}</label> : null}
        //         {this.state.open && list ?
        //             <div onClick={this.selectItem}>
        //                 {list.map(function (item, index) {
        //                     return <DropDownList key={index} {...item} />
        //                 })}
        //             </div> : null}
        //     </div>
        // );
        return (
            <div className="dropdown">
                {list.length > 0 ? <label>{this.props.title ? this.props.title : "Title"}</label> : null}
                <DropdownButton id="dropdown-basic-button" title={this.state.selectedItem}>
                    <div onClick={this.selectItem}>
                        {list.map(function (item, index) {
                            return <DropDownList key={index} {...item} />
                        })}
                    </div>
                </DropdownButton>
            </div>
        );
    }
}


const DropDownList = ({ type }) => (
    <Dropdown.Item data-type={type}>{type}</Dropdown.Item>
)

export default DropDown;