import * as React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default class IndexPage extends React.Component {
  state = {
    name: null,
    email: null,
    message: null,
    success: null,
    emailInput: false,
    nameInput: false,
  }

  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
    console.log(this.state.message)
  }

  _handleSubmit = e => {
    e.preventDefault()

    addToMailchimp(this.state.email, {
      FNAME: this.state.name,})
      .then(({ msg, result }) => {
        console.log(result, msg)
        if (result !== 'success') {
          throw msg
        }
        this.setState({
          message: msg,
          success: true,
          emailInput: true,
          nameInput: true,
        })
      })
      .catch(err => {
        console.log('err', err)
        this.setState({
          message: err,
          success: false,
        })
      }
    )
    console.log(this.state)
  }

  render() {
    return (
      <div className="notificationForm">
        <h5>Subscribe</h5>
        <p>
          Do you want to get notified when a new post is released? Register bellow.<br/>
        </p>
        <form onSubmit={this._handleSubmit}>
          {this.state.success !== null &&
            this.state.success === true &&
              <div className="alert" id="successAlert">{this.state.message}</div>
          }
          {this.state.success !== null &&
            this.state.success === false &&
              <div className="alert" id="errorAlert">{this.state.message}</div>
          }
          {
            this.state.nameInput !== true &&
              <div className="formContainer">
                <div className="formContainerPart" id="name">
                  <input
                    type="text"
                    onChange={this._handleChange}
                    placeholder="First Name"
                    name="name"
                  />
                </div>
                <div className="formContainerPart" id="email">
                  <input
                    type="email"
                    onChange={this._handleChange}
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <input className="subscribeButton" type="submit" value="Subscribe" />
              </div>
          }
          <br/>
          <small><b>NOTE: </b>Gatsby plugin used for this Subscription form does not show, that your mail is already subscribed, like it used to. I'm working on a fix. Until then, keep that in mind.</small>
        </form>
      </div>
    )
  }
}