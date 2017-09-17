import React, { Component } from 'react';

import CommentItem from './CommentItem'

export default class CommentList extends Component{

    constructor(props){
        super(props);

    }

comHandler(data) {
//    console.log(data);
    this.props.appDeleteHandler(data);
}
modHandler(data) {
//    console.log(data);
this.props.appModifyHandler(data);
}

    render(){
//console.log(this.props);

        var arr = [];
        this.props.commentData.forEach((ele,index)=>{

            arr.push(<CommentItem key={index} author={ele.comments_author} content={ele.comments_content} id={ele.comments_id} listHandler={this.comHandler.bind(this)} modifyListHandler={this.modHandler.bind(this)}></CommentItem>)
        })

        return (
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">你对Alice的blog有什么意见呢？</h3>
                  </div>
                  <div className="panel-body">
                       {arr}
                  </div>
                </div>
            )
    }
}
