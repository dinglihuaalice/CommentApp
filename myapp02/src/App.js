import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'

import CommentHeader from './Components/CommentHeader'
import CommentList from './Components/CommentList'
import CommentForm from './Components/CommentForm'

class App extends Component {

  constructor(){
    super()

//    console.log('初始化')

    this.state = {
      commentData:[],
      formData:[]
    }


  }
  submitformHander(data){
// console.log(data);
      $.ajax({
        url:'http://127.0.0.1:3001/',
        type:'post',
        data:data,
        success:(newData)=>{
         console.log(data);
          this.setState({
             commentData:newData
          })

        }
      })
  }


delCom(data) {
    console.log(data);


    $.ajax({
        url: 'http://127.0.0.1:3001/deleteComment',
        type: 'post',
        data: data,
        success: (newData) => {
            this.setState({
                commentData: newData
            })

        }
    })
}
modCom(data){
 console.log(data);

var arr=[];
arr.push(data);
console.log(arr);
 this.setState(
{formData: arr}
 );
    console.log(this.state.formData);
}

  // 组件加载完成之后 请求我们的数据

  componentDidMount() {

//    console.log('组件加载完成')

    $.ajax({
      url:'http://127.0.0.1:3001/',
      type:'get',
      success:(data)=>{
//        console.log(data);

        setTimeout(()=>{
           // 从后台拿出来的数据 要跟react中的状态state关联起来
          this.setState({
            commentData:data
          })
        },1000);


      },
      error:function(err){
        console.log(err);
      }
    })
  }
  render() {
//    console.log('渲染了')

    return (
      <div className="App">
          <CommentHeader />

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <CommentList commentData = {this.state.commentData} appDeleteHandler={this.delCom.bind(this)} appModifyHandler={this.modCom.bind(this)}/>
                </div>
                <div className="col-md-6">
                  <CommentForm formHandler = {this.submitformHander.bind(this)} formData={this.state.formData}/>
                </div>
              </div>
            </div>
      </div>
    );
  }
}
export default App;
