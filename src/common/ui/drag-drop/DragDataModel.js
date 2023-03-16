class DragDataModel {
    constructor(props) {
        this.data = props?.data || {};
        this.dragId = props.dragId || null;
        this.source = props.source || null;
        this.ignoreIds = props.ignoreIds || [];
        this.id = props.id || null;
    }
}

export default DragDataModel;
