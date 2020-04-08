import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Header, Image } from 'components/elements'
import device from 'themes/device.js'

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 4rem;
    align-items: flex-start;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        justify-content: center;
    }
`
const Tab = styled.div`
    width: 100%;
    margin-top: 2.4rem;
`
const TabsWrapper = styled.div`
    max-width: 40.7rem;
    width: 36%;
    margin-top: 6rem;

    div:first-child {
        margin-top: 0;
    }

    @media ${device.tabletL} {
        width: 100%;
    }
`
const VideoWrapper = styled.div`
    max-width: 78.4rem;
    width: 64%;

    @media ${device.tabletL} {
        width: 100%;
    }
`
const Step = styled(Header)`
    font-weight: 500;
    cursor: pointer;
    padding-left: 1.8rem;
    ${(props) =>
        props.image_name === props.current_image
            ? 'color: var(--color-black-3); border-left: 4px solid var(--color-red)'
            : 'opacity: 0.2; border-left: 4px solid rgb(0, 0, 0, 0)'};

    @media ${device.tabletL} {
        text-align: left;
        border: none;
        margin-top: ${(props) => (props.no_margin ? '0' : '2rem')};
    }
`

class DtraderTabs extends React.Component {
    my_ref = React.createRef()
    interval_ref = undefined
    state = {
        current_step_image: 'dmt-5-step-1.png',
        step: 1,
    }
    clickHandler = (image_name, step) => {
        this.setState({ current_step_image: image_name, step })
    }
    render() {
        return (
            <Container>
                <TabsWrapper>
                    <Tab>
                        <Step
                            as="h4"
                            lh="1.5"
                            align="left"
                            no_margin
                            image_name="dmt-5-step-1.png"
                            current_image={this.state.current_step_image}
                            onClick={() => this.clickHandler('dmt-5-step-1.png', 1)}
                        >
                            {localize('1. Sign up with Deriv')}
                        </Step>
                    </Tab>
                    <Tab>
                        <Step
                            as="h4"
                            lh="1.5"
                            align="left"
                            image_name="dmt-5-step-2.png"
                            current_image={this.state.current_step_image}
                            onClick={() => this.clickHandler('dmt-5-step-2.png', 2)}
                        >
                            {localize('2. Create a DMT5 account')}
                        </Step>
                    </Tab>
                    <Tab>
                        <Step
                            as="h4"
                            lh="1.5"
                            align="left"
                            image_name="dmt-5-step-3.png"
                            current_image={this.state.current_step_image}
                            onClick={() => this.clickHandler('dmt-5-step-3.png', 3)}
                        >
                            {localize('3. Fund your account')}
                        </Step>
                    </Tab>
                </TabsWrapper>
                <VideoWrapper>
                    <Image
                        img_name={this.state.current_step_image}
                        alt={localize('DMT5 - Step') + this.state.step}
                        width="100%"
                    />
                </VideoWrapper>
            </Container>
        )
    }
}
export default DtraderTabs