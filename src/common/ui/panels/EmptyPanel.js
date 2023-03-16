import React from 'react';

const EmptyBox = (props) => {
    const { id, className} = props;

    let cn = !!className ? ' ' + className : '';
    
    return (<div className={"empty-items-box" + cn}>
        <div>{props.children}</div>
    </div>);
};

export default EmptyBox;