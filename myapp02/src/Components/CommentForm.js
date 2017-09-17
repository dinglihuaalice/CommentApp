import React, { Component } from 'react';
import $ from 'jquery';
export default class CommentForm extends Component{

    constructor(props){
        super(props);
        var length1=this.props.formData.length;
//        console.log(length1);
//        console.log(this.props.formData[0]);
        this.state = {
            author:'',
            content:''
        }

//        this.authorHanler = this.authorHanler.bind(this);
//        this.contentHanler = this.contentHanler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

//       console.log(this.props);
    }
      componentWillUnmount() {
//          this.state.author=this.props.formData[0].author
//    console.log('I un mount');
  }
  componentDidMount() {
//    console.log('I have mounted');
  }

//    // 处理作者的函数
//    authorHanler(e){
//        console.log(e.target.value)
////
//
//     this.setState({
//    author: e.target.value
//
//
//
//     })
//
//
//    }
//    // 处理内容的函数
//    contentHanler(e){
//        console.log(e.target.value)
//
//        this.setState({
//            content:e.target.value
//        })
//
//    }
    submitHandler(e){

        e.preventDefault();

this.setState({
author:$(this.textInput).val()
})
this.setState({
content:$(this.textareaInput).val()
})

//        console.log($(this.textInput).val());
//        console.log($(this.textareaInput).val());

        alert(1);
        // 获取到输入的作者和内容
        var data = {
            author:$(this.textInput).val(),
            comment:$(this.textareaInput).val(),
            id:this.props.formData[0]

        }
        // 也是通过props来获取自定义的事件
        this.props.formHandler(data)

    }

//value={length===0?' ':this.props.formData[0].content}

    render(){
//        console.log(this.props.formData[0]);

//        $(this.textInput).text('123')

        if(this.props.formData[0]==null){
//            alert(0);
             $(this.textInput).val('')

        }else{
//            alert(1);
//             console.log($(this.textInput).val());
            $(this.textInput).val(this.props.formData[0].author);
            $(this.textareaInput).val(this.props.formData[0].content);
        }


//this.setState({
//   author:this.props.formData[0].author
//})


//var d=this.props.formData[0];
//var length=this.props.formData.length;
//console.log(length);
//console.log(this.props.formData[0]);


        return (
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">请评论</h3>
              </div>
              <div className="panel-body">
               <form onSubmit = {this.submitHandler}>
                  <div className="form-group">
                      {/*react中要将form表单中for属性改写成htmlFor*/}

                    <label htmlFor="author">作者</label>
                    <label></label>
                    <input
                    type="text"
                    className="form-control"
                    id="author"

                ref={(input) => { this.textInput = input; }}
                    placeholder="请输入作者"
                     />

                  </div>
                  <div className="form-group">
                    <label htmlFor="content">内容</label>
                   <textarea
                    className="form-control"
                    rows="3" id="content"
                    placeholder="请输入内容"
                    ref={(input) => { this.textareaInput = input; }}
                   ></textarea>
                  </div>

                  <button type='submit' className='btn btn-success'>提交</button>
              </form>
              </div>
            </div>

            )
    }
}
