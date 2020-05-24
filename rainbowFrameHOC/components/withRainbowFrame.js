import React from 'react';

import './withRainbowFrame.css';

function withRainbowFrame(colors) {
    return Component => props => {
        let frame = <Component{...props}/>;

        colors.forEach(item => {
            frame = (<div className={'rainbow-div'} style={{border: "solid 7px " + item, padding: "10px"}}>
                    {frame}
                </div>
            )
        });

        return frame;
    }
}

export default withRainbowFrame;