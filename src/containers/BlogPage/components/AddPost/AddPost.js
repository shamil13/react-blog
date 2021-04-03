import './Addpost.css'
import React from 'react'
export class Addpost extends React.Component{

    state = {
        postTitle:'',
        postDesc:'',
    }


    addNewPost = (e) => {
      const obj = {
        id: this.props.blogArr.length + 1,
        title:this.state.postTitle,
        description: this.state.postDesc,
        likeCount: 0
         
      }
      this.props.closeAddForm()

      const postTitleRegExp = /^[а-яa-z\d\s!?]+$/gi;
      const checkPostTitle = postTitleRegExp.test(this.state.postTitle);
      const checkPostDesc = this.state.postDesc.length !== 0;
   
       if (checkPostTitle && checkPostDesc) {
         this.props.createBlogPost(obj);
       } else {
         e.preventDefault();
         alert("Введите данные верно");
       }
    
    }




    loginChange = (event) => {
        this.setState({
            postTitle: event.target.value
        })
      }
      passChange =(event) => {
        this.setState({
            postDesc: event.target.value
        })
      }
     


    render() {
        return (
            <>
            <form className='addForm'>
            <div>
            <input 
            onChange={this.loginChange}
            type="text" 
            name='login' 
            placeholder='login'
            value={this.state.postTitle}/>
            
            </div>
          
            <textarea
            onChange={this.passChange}
            name="description" 
            value={this.state.postDesc}/>
            <div>
            <button type='button' onClick={this.addNewPost}>отправить</button>
            </div>
            <div>
            {
            100 - this.state.postDesc.length <= 0
            ? 0
            : 100 - this.state.postDesc.length
            }
            </div>
          </form>
          <div className="overlay"></div>
          </>
        )
    }
  
}