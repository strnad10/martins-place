import * as React from "react"
import { Link } from "gatsby"
import NotificationForm from "../components/notificationForm"
import Navigation from "../components/navigation"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <Navigation />
      <main>{children}</main>
      <footer>
        <hr/>
        <br/>
        <div>
          <NotificationForm />
        </div>
      </footer>
    </div>
  )
}

export default Layout
