import React, { Fragment } from 'react'
import '../../Styles/Admin/Dashboard.scss'
import Header from '../../Components/Header'

const Dashboard = () => {
    return (
        <Fragment>
            {/* Navbar Component starts here */}
            <Header />
            {/* Navbar Component ends here */}

            <div className="admin__container">
                {/* grid component starts here */}
                <div className="count__grid__row">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {/* grid component ends here */}
            </div>
        </Fragment>
    )
}

export default Dashboard
