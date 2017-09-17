import logo from '../logo.svg';
import React, { Component } from 'react';

// 无状态的组件书写方式
export default  function CommentHeader(){

    return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                      <img alt="Brand" src={logo} width='50'/>
                    </a>

                    <h4 className='navbar-text'>Alice的blog怎么样呢？来提点意见吧！</h4>
                  </div>
                </div>
              </nav>
        )
}
