type RouteProps = {
  path: string,
  children: any
}

// Route user to that path if it matches a defined path
const Route = ({ path, children }: RouteProps) => {
  return window.location.pathname === path ? children : null
}

export default Route
