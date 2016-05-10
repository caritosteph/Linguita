import React from 'react';

export const MainLayout = ({navbar,content,footer})=>(
    <div>
        {navbar}
        {content}
        {footer}
    </div>
);