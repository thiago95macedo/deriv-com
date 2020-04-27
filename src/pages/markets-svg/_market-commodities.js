//TODO: this a temporary way to display these svg
import React from 'react'
import PropTypes from 'prop-types'

const MarketCommoditeisIcon = ({ dynamic_id }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
        <defs>
            <linearGradient id={dynamic_id} x1="0%" x2="100%" y1="65.035%" y2="34.965%">
                <stop offset="0%" stopColor="#FF444F" />
                <stop offset="100%" stopColor="#FF6444" />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0H64V64H0z" />
            <path
                fill={`url(#${dynamic_id})`}
                fillRule="nonzero"
                d="M40 15c.397 0 .757.235.916.6L47.654 31H55c.353 0 .677.186.856.483l.06.116 7 16c.29.66-.195 1.401-.916 1.401H2c-.721 0-1.205-.74-.916-1.4l7-16c.16-.365.519-.6.916-.6h7.345l6.739-15.4c.141-.324.441-.546.785-.591L24 15h16zM24.345 33H9.654L3.529 47H30.47l-6.125-14zm30 0H39.654l-6.125 14H60.47l-6.125-14zM37.47 33H26.529l5.47 12.504L37.47 33zm1.875-16H24.654l-6.125 14H45.47l-6.125-14z"
            />
        </g>
    </svg>
)

MarketCommoditeisIcon.propTypes = {
    dynamic_id: PropTypes.string,
}
export default MarketCommoditeisIcon
