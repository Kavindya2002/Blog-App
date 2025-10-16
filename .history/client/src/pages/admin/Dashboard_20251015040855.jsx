import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        blogs:0,
        comments:0,
        drafts:0,
        recentBlog:[]
    })

    const fetchDashboard = async ()=>
  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
        <div className='flex flex-wrap gap-4'>
            <div>
                <img src={assets.dashboard_icon_1} alt="" />
                <div>
                    <p>{}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard