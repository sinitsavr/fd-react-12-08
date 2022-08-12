import React, { Component } from "react";
import CiaoHeading from "../CiaoHeading";
import CiaoList from '../CiaoList';
// import CiaoSortedList from '../CiaoSortedList';
import CiaoSortedBtn from '../CiaoSortedBtn';

class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 4,
          fname: "Elon",
          lname: "Musk",
        },
        {
          id: 1,
          fname: "Molly",
          lname: "Dolly",
        },
        {
          id: 3,
          fname: "Elen",
          lname: "Musk",
        },
        {
          id: 2,
          fname: "Tom",
          lname: "Chrom",
        },
        {
          id: 5,
          fname: "Fred",
          lname: "Bredsk",
        },
      ],
      isUpSortById: true,
      isUpSortByLname: true,
    };
  }
  sortById = () => {
    const { users, isUpSortById } = this.state;
    const copyUsers = JSON.parse(JSON.stringify(users));
    copyUsers.sort((a, b) => {
      return isUpSortById ? a.id - b.id : b.id - a.id;
    });
    this.setState({
      users: copyUsers,
      isUpSortById: !isUpSortById,
    });
  };
  sortByLname = () => {
    const { users, isUpSortByLname } = this.state;
    const copyUsers = [...users];
    copyUsers.sort((a, b) => {
      if (a.lname > b.lname) {
        return isUpSortByLname ? 1 : -1;
      }
      if (a.lname < b.lname) {
        return isUpSortByLname ? -1 : 1;
      }
      return 0;
    });
    this.setState({
      users: copyUsers,
      isUpSortByLname: !isUpSortByLname,
    });
  };

  render() {
    const { users, isUpSortById, isUpSortByLname } = this.state;
    return (
      <>
        <CiaoHeading content='Users Dashbord' title='react' className='heading'/>
        {/* <CiaoSortedList isUpSortById={isUpSortById} isUpSortByLname={isUpSortByLname} sortById={this.sortById} sortByLname={this.sortByLname}/> */}
        <CiaoSortedBtn isUpSort={isUpSortById} sortBy={this.sortById} context='ID'/>
        <CiaoSortedBtn isUpSort={isUpSortByLname} sortBy={this.sortByLname} context='Last Name'/>
        <CiaoList users={users}/>
      </>
    );
  }
}
export default CiaoSection;
