
import React, { PureComponent } from 'react';
import { Pagination } from 'antd';

function itemRender(current, type, originalElement) {
    if (type === 'prev') {
        return <a style={{ color: '#1d2330', fontSize: '14px' }} >Left</a>;
    }
    if (type === 'next') {
        return <a style={{ color: '#1d2330', fontSize: '14px' }} >Right</a>;
    }
    return originalElement;
}



class ScreenPagination extends PureComponent {
    render() {
        return (
            <Pagination total={999} itemRender={itemRender} />
        )
    }
}

export default ScreenPagination; 