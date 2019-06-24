import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class NewPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false,
      content: '',
      id: '',
    }
  }

  submit() {
    const body = {content: this.state.content}
    fetch('http://localhost:4000/posts/new', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(res => res.json().then(data => data))
      .then(res => {
        this.setState({id: res.id, redirect: true})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { content, redirect, id } = this.state
    return (
      <div>
        {redirect && <Redirect to={id}/>}
        <input type='text' value={content} onChange={e => this.setState({ content: e.target.value })} />
        <button onClick={e => this.submit()} >submit</button>
      </div>
    )
  }
}

export default NewPost
