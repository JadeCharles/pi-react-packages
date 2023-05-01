declare namespace Paging {
    type PagerController = {
        static defaultPageSize: number;
        static defaultPageViewCount: number;
        setCurrentPage: (page: number) => void;
        mapLineItems: (lineItems: any[], callback: function) => any[];
        page: number;
        pageSize: number;
        pageViewCount: number;
        onPageClick: (e: Event) => void;
        register: (pagerId: string, setFunction: function) => boolean;
        notify: (page: number, sender: string) => number;
        pagerRegistry: object;
    };
}
