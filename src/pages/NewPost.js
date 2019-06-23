import React, { Component } from 'react'

class NewPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: ''
    }
  }

  submit() {
    const body = {content: 'Bob'}
    fetch('http://localhost:4000/posts/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify(body),
    })
    .then(id => {
      console.log(id)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    const { content } = this.state
    return(
      <div>
        <input type='text' value={content} onChange={e => this.setState({content: e.target.value})} />
        <button onClick={e => this.submit()} >submit</button>
      </div>
    )
  }
}

export default NewPost
