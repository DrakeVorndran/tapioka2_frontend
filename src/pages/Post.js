import React, { Component } from 'react'

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: "",
    }
  }

  componentDidMount() {
    const { match } = this.props
    fetch(`http://localhost:4000/posts/${match.params.id}`)
    .then(res => res.json().then(data => data))
    .then(post => {
      console.log(post)
      this.setState({content: post.content})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    const { match } = this.props
    const { content } = this.state
    console.log(this.props)
    return (
      <div>
        <p>{match.params.id}</p>
        <p>{content}</p>
      </div>
    )
  }
}

export default Post