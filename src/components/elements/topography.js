import React from 'react'
import styled from 'styled-components'

const createElement = React.createElement

export const Text = styled.p`
    font-weight: ${props => props.weight || 'normal'};
    line-height: ${props => props.lh || '1.25'};
    font-size: var(--text-size-s);
`

export const Header = styled(({ as = 'h1', children, ...props }) =>
    createElement(as, props, children),
)`
    font-weight: ${props => props.weight || 'bold'};
    line-height: ${props => props.lh || '1.25'};
    font-size: ${props => {
        if (props.as === 'h1') return 'var(--text-size-xxl)'
        if (props.as === 'h2') return 'var(--text-size-xl)'
        if (props.as === 'h3') return 'var(--text-size-l)'
        if (props.as === 'h4') return 'var(--text-size-m)'
        if (props.as === 'h5') return 'var(--text-size-s)'
    }};
`
