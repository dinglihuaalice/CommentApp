import React, { Component } from 'react';


export default class CommentItem extends Component{
    constructor(props){
        super(props);

    }
handlerDelete(event){
//event.stopPropagation();
event.preventDefault();
//console.log(this.props.author);
//console.log(this.props.content);
//console.log(this.props.id);
var data = {
    author: this.props.author,
    content: this.props.content,
    id: this.props.id
};
console.log(data);
this.props.listHandler(data);

}

handlerModify(event){
event.preventDefault();
//console.log(this.props.author);
//console.log(this.props.content);
//console.log(this.props.id);

var data = {
    author: this.props.author,
    content: this.props.content,
    id: this.props.id
};
//console.log(data);
this.props.modifyListHandler(data);

}


    render(){
//console.log(this.props.id);
        return (

            <div className="item" >
             <div className='row'>
             <div className="col-md-6">
               <i className='h4Style fl' >作者:{this.props.author}</i>
                <br/>
                <i className='fl'>内容: </i> <i className='fl'> {this.props.content}</i>
            </div>
            <div className="col-md-6">
           <a href="/modifyComment" onClick={this.handlerModify.bind(this)}>修改评论</a>
              <br/>
                <a href="/deleteComment" onClick={this.handlerDelete.bind(this)}>删除评论</a>
            </div>
            </div>
            </div>

            )
    }
}
