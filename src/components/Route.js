import React from 'react';

type RouteProps = {
  path: string,
  children: any
}

const Route = ({ path, children }: RouteProps) => {
  return window.location.pathname === path ? children : null
}

export default Route
