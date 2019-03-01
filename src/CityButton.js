import React from 'react'

export default function CityButton(props) {
  return (
    <a href={"weather/" + props.latlong} className="navbar-item">
        {props.name}
    </a>
  )
}
