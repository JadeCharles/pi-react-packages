import React from 'react';
import DragController from "./DragController";
import DragDataModel from "./DragDataModel";

const DragBox = (props) => {
    const { data, children, className, ignore, id, onDrag } = props;
    const ignoreIds = (!!ignore ? (Array.isArray(ignore) ? ignore : [ignore]) : []).map((i) => i.toString());
 
    const onDragger = (e) => {
        const payload = {
            data: data,
            dragId: id,
            id: Math.floor(Math.random() * 100000000000000000).toString(36),
            source: e.currentTarget,
            ignoreIds: ignoreIds
        };

        const model = new DragDataModel(payload);
        DragController.instance.setData(model);

        if (typeof onDrag === 'function') onDrag(e, model);
    };

    return (<div id={id} className={("dragger " + (className || "")).trim()} draggable={true} onDragStart={(e) => onDragger(e)}>{children}</div>);
};

export default DragBox;
