import './BlogPage.css';

import { blogPosts } from '../../shared/projectData'
import { isArrayEmpty } from '../../shared/projectLogic';
import { BlogCard } from './components/Card/BlogCard';
import React from 'react';
import { Addpost } from './components/AddPost/AddPost';
import axios from 'axios';

export class BlogPage extends React.Component {

  state = {
    blogArr: JSON.parse(localStorage.getItem('blogArr')) || [],
    showForm: false,
  }

  likeAPost = (pos) => {
    const tempArr = this.state.blogArr
    tempArr[pos].likeCount++;

    this.setState({
      blogArr: tempArr
    })

    localStorage.setItem('blogArr', JSON.stringify(tempArr))

  }

  showAddForm = () => {
    this.setState({
      showForm: true
    })
  }
  closeAddForm = () => {
    this.setState({
      showForm: false
    })
  }


  createBlogPost = (obj) => {
    const updatedBlogList = this.state.blogArr;
    updatedBlogList.push(obj);

    this.setState({
      blogArr: updatedBlogList,
    });

    axios.post('https://5fb3db44b6601200168f7fba.mockapi.io/api/posts' , obj) 

    localStorage.setItem("blogPosts", JSON.stringify(updatedBlogList));
    this.closeAddForm();
  };





  handleFormCloseOnEsc = (e) => {
    if (e.key === 'Escape' && this.state.showForm === true) {
      this.closeAddForm()
    }
  }

  deletePost = (pos, id) => {
    if (window.confirm(`Удалить ${this.state.blogArr[pos].title}`)) {
      const temp = [...this.state.blogArr]
      temp.splice(pos, 1)
      this.setState({
        blogArr: temp
      })
      axios.delete(`https://5fb3db44b6601200168f7fba.mockapi.io/api/posts${id}`)
    }
  }


  componentDidMount() {
    if (!JSON.parse(localStorage.getItem('blogArr'))) {
      axios
        .get('https://5fb3db44b6601200168f7fba.mockapi.io/api/posts')
        .then((response) => {
          // console.log(response.data);
          this.setState({
            blogArr: response.data
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }


    window.addEventListener('keyup', this.handleFormCloseOnEsc)
  }

  componentDidUpdate() {
    console.log('Что-то обновилось в блоге')
  }

  componentWillUnmount() {
    console.log('Блог скрыт')
    window.removeEventListener('keyup', this.handleFormCloseOnEsc)
  }

  render() {
    console.log(this.props)
    const blogCards = isArrayEmpty(this.state.blogArr) ? 'Array is empty' : this.state.blogArr.map((item, pos) => {
      return (
        <BlogCard
          key={item.id}
          title={item.title}
          desciption={item.description}
          likeCount={item.likeCount}
          likeAPost={() => this.likeAPost(pos)}
          deletePost={() => this.deletePost(pos, item.id)}
        />
      )
    })
    console.log(this.state.user);

    return (
      <>
        <h1>Simple Blog</h1>

        <button onClick={this.showAddForm}>Создать новый пост</button>



        {
          this.state.showForm ?
            <Addpost blogArr={this.state.blogArr} closeAddForm={this.closeAddForm} createBlogPost={this.createBlogPost} />
            : null
        }

        <div className="posts">
          {blogCards}
        </div>
      </>
    )
  }
}