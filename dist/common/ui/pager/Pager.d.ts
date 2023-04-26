import PagerController from './PagerController';

declare namespace Paging {
    type PagerProps = {
        id: string;
        userData: any | null;
        controller: PagerController;
        items: [any];
        pageSize?: number;
        pageViewCount?: number;
        onPageClick?: (e: Event) => void;
        onRefresh?: (e: Event) => void;
        viewCount?: number;
        showSinglePage?: boolean;
        dots?: string | object;
        preDots?: string | object;
        postDots?: string | object;
    };

    type Pager = {
        props: PagerProps;
        children: any | [any] | null;
    };

}

