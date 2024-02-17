import React from "react"
import { Card } from "antd"
import "./styles/Home.css"

const Home = () => {
  return (
    <>
      <h1>Movie review app</h1>
      <Card title="Thor" bordered={true} type="inner" style={{ width: 300, padding: '10px' }}>
        <div style={{backgroundColor: '#ddbce4'}}>
          <img className="card-image"
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHXV5at6mvLIF852fvIA5jeUi6bVYs8swuCPUCRWdRxWp0sr5Q"/>
        </div>
      </Card>
    </>
  )
}
export default Home
