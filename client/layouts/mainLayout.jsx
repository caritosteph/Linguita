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
    <main>
      <div className="container">
        <div className="row">
          <div id="color-usage" className="section scrollspy">
              {content}
          </div>
        </div>
    </div>
  </main>
    {footer}
  </div>
);
