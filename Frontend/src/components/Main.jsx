import React from 'react'
import NavigationBar from './NavigationBar'
import { Outlet} from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <NavigationBar/>
        <section>
          <Outlet/>
        </section>
    </div>
  )
}

export default Main