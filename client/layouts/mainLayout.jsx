import React from 'react';

export const MainLayout = ({navbar,content,footer})=>(
    <div>
        {navbar}
        {content}
        {footer}
    </div>
);

export const ProfileLayout = ({navbar,content,footer}) =>(
  <div>
    {navbar}
    {content}
    {footer}
  </div>
);
