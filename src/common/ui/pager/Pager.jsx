import React, { useEffect, useState} from 'react';
import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import NumberDisplay from "../formatting/NumberDisplay";
import PagerController from './PagerController';

const Pager = (props) => {
    let { id, onPageClick, onClick, items, viewCount, controller, showSinglePage, dots, preDots, postDots } = props;
    const [currentPage, setCurrentPage] = useState(controller.page);
    
    if (!id) id = 'pager-' + (new Date()).getTime().toString();

    if (typeof onClick === "function") onPageClick = onClick;

    const onPageChange = (pg, e) => {
        if (pg === currentPage) return;
        
        //controller.setCurrentPage(pg);

        if (!!e && id) e.sender = id;
        let result = null;

        if (typeof onPageClick === 'function') result = onPageClick(pg, e);
        else if (typeof controller?.onPageClick === 'function') result = controller.onPageClick(pg, e);
        else console.error('No onPageClick event was given (' + (typeof controller.onPageClick).toString() + '). Set the controller.onPageClick property or pass an onPageClick function to the pager.');

        if (result !== false) setCurrentPage(pg);
    };

    useEffect(() => {
        if (controller instanceof PagerController) {
            if (!!id) {
                controller.register(id, (p) => setCurrentPage(p));
                controller.notify(currentPage, id);
            }
        }

    }, [currentPage]);

    useEffect(() => {
        if (typeof controller === "object" && !!controller) {
            controller.setCurrentPage = (p) => {
                if (typeof p !== "number") throw new Error("Invalid paramter passes as a page number: " + p + "");
                if (p < 0) p = 0;

                controller.page = p;
                setCurrentPage(p);

                return true;
            }
        };
    }, []);
    
    if (!controller) {
        console.error('Pager: controller is required');
        return (<></>)
    }
    
    if (!items || !Array.isArray(items)) {
        //console.warn('No items were passed to pager with id: ' + id);
        return (<div className="pager" id={id}></div>);
    }

    if (typeof viewCount !== 'number') viewCount = 2;
    
    let pageViewCount = controller.pageViewCount;
    if (!pageViewCount || typeof pageViewCount !== 'number' || pageViewCount < 2) pageViewCount = 2;
    
    let pageSize = controller.pageSize;
    
    if (!pageSize || typeof pageSize !== 'number')
        pageSize = PagerController.defaultPageSize;
    
    // TODO: PageViewCount, PageViewRangeCount, etc
    const pageCount = Math.ceil(items.length / pageSize);
    if (pageCount < 2 && showSinglePage !== true) return (<></>);
    
    if (!dots) dots = (<>&bull;&bull;&bull;</>);
    else if (typeof dots === 'string') dots = (<>{dots}</>);
    
    let pageNumbers = [];
    let preView = preDots || dots;
    let postView = postDots || dots;
    
    for(let i = 0; i < pageCount; i++) {
        const c = i === currentPage ? ' selected' : '';
        const pg = (i + 1);
        
        const show = (currentPage < (i + viewCount + 1) && currentPage > (i - viewCount - 1)) ||
            (i < viewCount) || (i > pageCount - (viewCount + 1));

        if (show) {
            let pageElement = (
                <a className={'pager-item pager-item-' + i.toString() + c} onClick={onPageChange.bind(this, i)} key={i}><NumberDisplay value={pg} decimalPlaces={0} /></a>
            );

            pageNumbers.push(pageElement);
        } else if (!!preView && i < currentPage) {
            pageNumbers.push(<span className="pager-item-pre-view" key={i}>{ preView }</span>);
            preView = "";
        } else if (!!postView && i > currentPage) {
            pageNumbers.push(<span className="pager-item-post-view" key={i}>{ postView }</span>);
            postView = "";
        } else {
            //pageNumbers.push((<b key={i}>.</b>));
        }
    }

    let prev = currentPage - 1;
    if (prev < 0) prev = 0;

    let next = currentPage + 1;
    if (next >= pageCount) next = pageCount - 1;
    
    return (
        <div className="pager" id={id}>
            <span>
                <a className={'pager-prev pager-arrow'} onClick={onPageChange.bind(this, prev)}><FontAwesomeIcon icon={faCaretLeft} /></a>
                {pageNumbers}
                <a className={'pager-next pager-arrow'} onClick={onPageChange.bind(this, next)}><FontAwesomeIcon icon={faCaretRight} /></a>
            </span>
            {props.children}
            <span></span>
        </div>
    );
};

export default Pager;
