import React, { useState, useRef } from 'react';
import HttpService from '../../services/HttpService';
import DropTarget from "../drop-target/DropTarget";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGhost} from "@fortawesome/free-solid-svg-icons";

export default class FileUploader extends React.Component  {
    constructor(props) {
        super(props);
        this.contentRef = React.createRef();
    }

    static readFileContents(files, callback) {
        if (!files || !(files?.length > 0)) {
            let filesType = (typeof files).toString();
            console.error("Failed to read HTML form file contents: no valid files provided (" + files?.length + "): " + filesType);
            
            return null;
        }
        let newFiles = [];
        let countDown = files.length;

        for(let i = 0; i < files.length; i++) {
            let reader = new FileReader();

            reader.onload = (ev) => {
                let fileItem = {
                    filePath: ev.target.result,
                    file: files[i],
                    name: files[i].name,
                    size: files[i].size,
                    title: ""
                };

                newFiles.push(fileItem);

                countDown--;

                if (countDown <= 0) {
                    // When all files are read/loaded asynchronously, set the file list state view
                    if (typeof callback === 'function')
                        callback(newFiles);
                }
            };

            reader.readAsDataURL(files[i]);
        }
    };
    
    state = {
        selectedFile: null,
        url: this.props.url,
        previewSize: this.props.previewSize,
        onComplete: this.props.onComplete,
        onError: this.props.onError,
        fileSelectorElement: this.props.fileSelectorElement,
        previewElement: this.props.previewElement,
        displayData: null,
        cancelElement: this.props.cancelElement || (<>Cancel</>),
        imageUrl: this.props.imageUrl || null,
        initialImageUrl: this.props.imageUrl
    };

    setDisplayImage = (selectedFile) => {
        let me = this;
        let reader = new FileReader();

        reader.onload = (e) => {
            me.setState({ selectedFile: selectedFile, imageUrl: e.target.result });
        };

        reader.readAsDataURL(selectedFile);
    }
    
    onFileChange = (event) => {
        console.log('File Change URL: ' + this.state.url);

        this.setDisplayImage(event.target.files[0]);
    };

    onFileUpload = (e) => {
        if (!this.state.url) {
            console.error('Failed to upload. No url specified.');
            return;
        }
        
        const me = this;
        
        HttpService.instance.uploadAsync(this.state.url, this.state.selectedFile).then(function (rsp) {
            if (typeof me.onComplete === 'function') {
                me.onComplete(rsp.data);
            }
            
            console.log("Upload Complete.");
            me.setState({selectedFile: null, imageUrl: rsp.data.url});

        }).catch(function (err) {
            if (typeof me.onError === 'function') {
                me.onError(err);
            }
            console.error('Failed to upload file.', err);
        });
    };

    handleClick = (e) => { 
        console.log("Toast");
    }
    
    // File content to be displayed after
    // file upload is complete
    fileData = (componentId) => {
        let invokeFileDialog = function (e) {
            console.log('Invoke: ' + componentId);
            
            let fileElement = document.getElementById(componentId);
            
            if (!fileElement) console.warn("No File Element to invoke.");
            else fileElement.click();
        };

        const imageId = 'image-upload-' + componentId;
        const url = this.state.imageUrl || this.state.initialImageUrl;
        const img = !!url ? (<img id={imageId} className={"file-upload-img"} src={url} alt={"Image"} />) : (<FontAwesomeIcon icon={faGhost} />);
        const imageElement = (<div className={"file-selector-image"}><span>{ img }</span></div>);
        
        if (this.state.selectedFile) {
            console.log('File Details: ' + this.state.url);
            
            return (
                <div className={"file-selector selected"}>
                    <a onClick={(e) => invokeFileDialog(e)}>
                        { imageElement }
                    </a>
                    <ul className={"file-selector-detail-list"}>
                        <li>File Name: {this.state.selectedFile.name}</li>
                        <li>File Type: {this.state.selectedFile.type}</li>
                        <li>Last Modified:{" "} {this.state.selectedFile.lastModifiedDate.toDateString()}</li>
                    </ul>
                </div>
            );
        } else {
            return (
                <div className={"file-selector"}>
                    <a onClick={(e) => invokeFileDialog(e)}>
                        { imageElement }
                    </a>
                    { this.state.fileSelectorElement }
                </div>
            );
        }
    };

    render() {
        let content = this.props.children || null;
        let componentId = this.props.componentId || 'file-upload-' + (new Date()).getTime().toString();
        let imageId = 'image-upload-' + componentId;
        let me = this;
        
        let invokeFileDialog = function (e) {
            let fileElement = document.getElementById(componentId);
            
            if (!fileElement) {
                console.warn("No file element to invoke");
                return;
            }
            
            fileElement.click();
        };

        const onDropFile = (files) => { 
            if (files.length === 0) return;

            let file = files[0];
            
            me.setDisplayImage(file);
        }
        
        if (content) {
            content = (<div className="file-upload-invoker" onClick={ invokeFileDialog }>{content}</div>);
        }

        let cn = this.state.selectedFile ? ' selected' : '';
        
        const onCancel = (e) => {
            this.setState({selectedFile: null, imageUrl: this.state.initialImageUrl});
        };
        
        return (
            <DropTarget className={"upload-drop"} onDrop={onDropFile}>
                <div className={"file-upload-container" + cn} id={'component-' + componentId}>
                    <div className="file-information">
                        {this.fileData(componentId)}
                    </div>
                    
                    <div className="file-upload-form-elements" ref={this.contentRef}>
                        <span><input className={"file-upload-element"} id={componentId} onClick={this.handleClick.bind(this)} type="file" onChange={this.onFileChange} /></span>
                        <span><button className="file-upload-button" onClick={this.onFileUpload}>Upload File</button></span>
                        <span><a onClick={onCancel} className={"file-upload-cancel"}>{ this.state.cancelElement}</a></span>
                    </div>
                    
                    { content }
                </div>
            </DropTarget>
        );
    }
}