import React from 'react';

const AnimatedButton = (props) => {
    let isWorking = props.isWorking || false;
    let caption = props.value || (props.text || props.caption);
    let onClick = props.onClick;
    
    return (<button disabled={isWorking} className={isWorking ? 'button working' : 'button'} onClick={onClick}>
            <Spinner isWorking={false} />
            { caption || 'Button' }
            <Spinner isWorking={isWorking} />
        </button>);
    
}

export default AnimatedButton;

