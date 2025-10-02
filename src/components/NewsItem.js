import React from 'react';

const NewsItem = ({ title, content }) => {
    return (
        <div className="news-item">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default NewsItem;