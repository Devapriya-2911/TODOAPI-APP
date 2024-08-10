import React from 'react'
import Navbar from './Navbar'

const Add = () => {
    return (
        <div>
            <Navbar />


            <div className="container">
                <div className="row">
                    <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"> UserID</label>
                                <input type="text" className="form-control" placeholder='Please enter your User ID ' />
                            </div>
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">ID</label>
                                <input type="text" className="form-control" placeholder='Please enter your ID number ' />
                            </div>
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text" className="form-control" placeholder='Enter the Ttile' />
                            </div>
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Status</label>
                                <select name="" id="" class="form-select">
                                    <option value="Select manufacturer">Select status</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Incomplete">Incomplete</option>

                                </select>
                            </div>
                            <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success">SUBMIT</button>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
