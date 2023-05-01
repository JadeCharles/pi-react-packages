import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faSearch} from "@fortawesome/free-solid-svg-icons";

const SearchFilter = (props) => {
    const { onFilter, minLength, label, placeholder } = props;
    const len = typeof minLength === 'number' && minLength > 0 ? minLength : 3;
    
    const [filterClass, setFilterClass] = useState('');
    const filterInput = useRef(null);

    useEffect(() => {
        if (filterClass.indexOf("show") >= 0) { 
            setTimeout(() => {
                filterInput.current?.focus();
            }, 200);
        } else if (filterInput.current) {
            filterInput.current.value = "";
            onFilter("");
        }
    }, [filterClass]);
    
    if (typeof onFilter !== 'function') {
        return (<span className={"filter no-margin"} style={{backgroundColor: "#FF000033", color: "maroon"}}>SearchFilter: No onFilter(string) method was provided.</span>);
    }
    
    const onTextFilter = (e) => {
        let text = filterInput.current.value;
        if (text.length >= len) onFilter(text);
        else onFilter("");
    };

    return (<span className={"search-filter no-margin " + filterClass}>
                <a onClick={() => setFilterClass(' show')}><FontAwesomeIcon icon={faSearch} /> <label>{ label || "Filter Items"}</label></a>
                <span className={"input"}>
                    <input className={"search-filter"} type={"text"} ref={filterInput} onChange={onTextFilter.bind(this)} placeholder={placeholder || "Filter"} />
                    <a onClick={() => setFilterClass('')}><FontAwesomeIcon icon={faCircleXmark} /></a>
                </span>
            </span>);
};

export default SearchFilter;