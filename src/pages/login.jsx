import React from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/authAction'

class Login extends React.Component{
    state = {
        username: '',
        password: '',
        error: {}
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)) {
            return {
                error: nextProps.auth.error
            }
        }
        return null
    }
    changeHandler=(event)=> {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        let { username, password } = this.state
        event.preventDefault()
        this.props.login({username, password}, this.props.history)
    }
    render() {
        let { username, password, error } = this.state
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-3 mx-auto mt-5">
                        <div className="card card-body">
                            <div>
                                <p className='display-4 fw-normal text-center alert alert-warning'>LOGIN</p>
                            </div>
                            {error.message && <p className='text-danger text-center fw-bold alert alert-danger'>
                                {error.message}
                            </p>}
                            <form onSubmit={this.submitHandler}>
                                <div>
                                    {/* <label htmlFor="username" className='my-2'>Username</label> */}
                                    <input
                                        type="text"
                                        placeholder="User name"
                                        className={error.username ? 'form-control is-invalid' : 'form-control'}
                                        id="username"
                                        name="username"
                                        value={username}
                                        onChange={this.changeHandler}
                                    />
                                    {error.username && <div id="validationServer05Feedback" className="invalid-feedback">
                                        {error.username}
                                    </div>}
                                </div>
                                <div className='mt-3'>
                                    {/* <label htmlFor="password" className='my-2'>Password</label> */}
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className={error.password ? 'form-control is-invalid' : 'form-control'}
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={this.changeHandler}
                                    />
                                    {error.password && <div id="validationServer05Feedback" className="invalid-feedback">
                                        {error.password}
                                    </div>}
                                </div>
                                <button className="btn btn-outline-primary alert-primary mt-3 col-12 mx-auto d-block" type="submit">Login</button>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { login })(Login)