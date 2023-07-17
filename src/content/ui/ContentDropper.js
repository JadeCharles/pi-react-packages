import React, {useEffect, useState} from 'react';
import DropTarget from "../../common/ui/drop-target/DropTarget";
import {Tooltip} from "@mui/material";
import {faArrowUpRightFromSquare, faExpand, faFile, faGlobeAfrica} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AuthenticationService from "../../authentication/services/AuthenticationService";
import DocumentService from "../services/DocumentService";
import FormButton from "../../common/ui/FormButton";
import './Content.css';
import FileUploadModel from "../models/FileUploadModel";
import DialogBox from "../../common/ui/dialog-box/DialogBox";
import DialogBoxController from "../../common/ui/dialog-box/DialogBoxController";
import {piFigma} from "../../common/ui/svgs/LogoSvgs";

const ContentDropper = (props) => {
    let _;
    const { onPasteFiles, onPasteText, items, onRefresh, onDrop, onUpload, controller } = props;
    const initialState = { files: [], docs: items || [], textItems: []};
    const [contentView, setContentView] = useState(null);
    const [contentViewerDialogController, setContentViewerDialogController] = useState(controller || new DialogBoxController("View Content"));
    const [content, setContent] = useState(initialState);
    
    const onFilesDrop = (files, textItems) => {
        console.log("FILES DROPPED OK")
        _ = Promise.all([
            FileUploadModel.fromFilesAsync(files),
            FileUploadModel.fromTextItemsAsync(textItems)
        ]).then((values) => { 
            // TODO: Clean list
            // values.map((v) => { 
            //     console.log(v);
            // });
            
            const newFiles = values.filter((v) => v.length > 0 && !!v[0].filePath).flat();
            const newText = values.filter((v) => v.length > 0 && !!v[0].text).flat();
            
            if (typeof onDrop === 'function') onDrop(newFiles, newText);
            
            const co = {
                files: content.files.concat(newFiles),
                docs: content.docs,
                textItems: content.textItems.concat(newText)
            };
            
            setContent(co);
        });

    };

    const onTextContentDrop = (textData) => {
        console.log("Text Content Drop: " + textData);
    };

    const onFilesPasted = (files) => {
        FileUploadModel.fromFilesAsync(files).then((newFiles) => {
            const c = {
                files: content.files.concat(newFiles),
                docs: content.docs,
                textItems: content.textItems
            };

            setContent(c);
        });
    };

    const onTextPasted = (text) => {
        console.log("On text pasted: " + text);
    };

    const uploadAsync = async (e) => {
        if (typeof onUpload !== 'function') { 
            console.log("onUpload has not been set");
            return;
        }
        
        console.log("OnUpload")
        await onUpload(content?.files, content?.textItems, e);
    };

    useEffect(() => {
        setTimeout(() => {
            if (!!contentView) contentViewerDialogController.open(null, "View Content");
            else contentViewerDialogController.close();
        }, 100);

    }, [contentView]);
    
    const sid = AuthenticationService.instance.sessionId;

    const viewContentInTab = (dof) => {
        console.log(JSON.stringify(dof));
        if (dof.contentType?.startsWith("image")) {
            window.open("/secure/document/" + dof.fileName + "?session-id=" + sid );
            return;
        }
        
        window.open(dof.uri);
    };

    const viewExpanded = (doc) => {
        if (!!doc.text || doc.contentType?.indexOf("text/") >= 0) { 
            setContentView(<pre className={"text"}>{doc.text || doc.content}</pre>);
            return;
        }
        
        const imagePath = doc.filePath || "/secure/document/" + doc.fileName + (doc.fileName && doc.fileName.includes("?") ? "&" : "?") + "session-id=" + sid;
        const imageElement = (<img src={imagePath} alt={""} />);

        setContentView(<div>{ imageElement }</div>);
    }
    
    const deleteDocumentAsync = async (dof, index) => {
        const documentId = dof.id;
        console.warn("Remove: " + documentId);

        const removed = {
            files: content.files.filter((f) => f.id !== documentId),
            docs: content.docs.filter((d) => d.id !== documentId),
            textItems: content.textItems.filter((t) => t.id !== documentId)
        }

        console.log("Deleting: " + (typeof dof.contentTypeKey).toString());
        setContent(removed);

        if (typeof dof.contentTypeKey === 'number') {
            await DocumentService.instance.deleteDocumentAsync(documentId);
            if (typeof onRefresh === 'function') onRefresh();
        }
    };
    
    const createActionPanel = (dof) => {
        const isDoc = (typeof dof.contentTypeKey === 'number');
        const isUrl = !!dof.text && dof.contentType === "text/uri-list";
        
        const tabView = isDoc || isUrl ? (<a onClick={() => viewContentInTab(dof)} title={"Open in new tab"}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>) : null;
        const expandedView = (<a onClick={() => viewExpanded(dof)} title={"Large View"}><FontAwesomeIcon icon={faExpand} /></a>);
        
        return (<div className={"document-action-panel"}>
            <label>{ dof.name }</label>
            <div>
                { expandedView }
                { tabView }
                <a onClick={() => deleteDocumentAsync(dof)} className="btn btn-danger btn-sm">{ isDoc ? "Delete" : "Remove" }</a>
            </div>
        </div>);
    };

    const getDocumentThumbnailElement = (f) => {
        if (!!f.contentType && f.contentType.startsWith("image") && !f.filePath) {
            const imagePath = "/secure/document/128x128/" + f.fileName + (f.fileName && f.fileName.includes("?") ? "&" : "?") + "session-id=" + sid;
            return (<img src={imagePath} style={{width: "100px", height: "100px", lineHeight: "0", objectFit: "cover"}} alt={""} />);
        }

        // Pre-uploaded items
        if (!!f.filePath) {
            const imagePath = f.filePath;
            return (<img src={imagePath} style={{width: "100px", height: "100px", lineHeight: "0", objectFit: "cover"}} alt={""} />);
        }

        let icon = faFile;
        const typeUri = "text/uri-list";
        if (!!f.uri && f.uri.indexOf("figma.com") >= 0) icon = piFigma;
        else if (f.contentType === typeUri || f.contentType === typeUri) icon = faGlobeAfrica;
        else console.warn("Unknown content type: " + f.contentType);
        
        return (<span className={"svg"}><FontAwesomeIcon icon={icon} /></span>);
    };

    const previewItems = (content?.files || []).concat(content?.textItems || []).concat(content?.docs || []);

    const filePreview = !!previewItems ? previewItems.map((f, i) => {
        const imageElement = getDocumentThumbnailElement(f);
        const panel = createActionPanel(f);

        return (
            <Tooltip title={panel} key={"file-preview-" + i} arrow={true} placement={"top"}>
                <span className={"document-preview-item"} style={{lineHeight: "0", padding: "8px"}} onClick={(e) => deleteDocumentAsync(f.id, f.index)}>
                    {imageElement}
                </span>
            </Tooltip>);
    }) : null;

    const uploadButton = (content?.files?.length || 0) + (content?.textItems?.length || 0) > 0 ? (<FormButton onClick={uploadAsync} label={"Upload"} />) : null;

    return (<>
        <DropTarget className={"content-dropper x-large"} onDrop={(files, items) => onFilesDrop(files, items)} onPaste={(files) => onFilesPasted(files)} onPasteText={(text) => onTextPasted(text)}>
            <label>
                <span>Drop Files Here.</span>
                <span>{ uploadButton }</span>
            </label>
            <div className={"file-previews"}>
                {filePreview}
            </div>
        </DropTarget>
        <DialogBox controller={contentViewerDialogController} fullScreen={true} hasCancelButton={false} onOkay={() => 100}>
            <div className={"view-content"}>{ contentView }</div>
        </DialogBox>
    </>);
};

export default ContentDropper;
