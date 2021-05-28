import React from 'react'
class Home extends React.Component{
    render() {
        return (
            <div className='container'>
                <div className="row mt-5">
                    <div className="col-md-8 mx-auto">
                        <div className="card card-body">
                            <p className='display-6 text-center alert alert-warning fw-normal'>INFO ADDITION</p>
                            <form method={this.addHandler}>
                                <div className="row mb-md-3">
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <span className='input-group-text alert-success col-5 col-md-3'>Source</span>
                                            <input type="text" className='form-control' name='source' id='source' />
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-2 my-md-0">
                                        <div className="input-group">
                                            <span className='input-group-text alert-success col-5 col-md-3'>Destination</span>
                                            <input type="text" className='form-control' name='destination' id='destination' />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-md-3">
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <span className='input-group-text alert-success col-5 col-md-3'>Amount</span>
                                            <input type="text" className='form-control' placeholder='Taka' name='amount' id='amount' />
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-2 my-md-0">
                                        <div className="input-group">
                                            <span className='input-group-text alert-success col-5 col-md-3'>Time</span>
                                            <input type="date" className='form-control' name='time' id='time' />
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-4 justify-content-center">
                                    <div className="col-md-2 col-5">
                                        <input type="radio" className="btn-check" name="truckName" id="radio1" autoComplete="off" />
                                        <label className="btn btn-outline-success" htmlFor="radio1">NML195229</label>
                                    </div>
                                    <div className="col-md-2 col-5 mb-2">
                                        <input type="radio" className="btn-check" name="truckName" id="radio2" autoComplete="off" />
                                        <label className="btn btn-outline-success" htmlFor="radio2">NML195231</label>
                                    </div>
                                    <div className="col-md-2 col-5">
                                        <input type="radio" className="btn-check" name="truckName" id="radio3" autoComplete="off"/>
                                        <label className="btn btn-outline-success" htmlFor="radio3">NML206747</label>
                                    </div>
                                    <div className="col-md-2 col-5">
                                        <input type="radio" className="btn-check" name="truckName" id="radio4" autoComplete="off"/>
                                        <label className="btn btn-outline-success" htmlFor="radio4">NML206748</label>
                                    </div>
                                </div>
                                <div className="d-grid col-md-8 mx-auto">
                                    <button className='btn btn-outline-primary alert-warning'>ADD</button>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home