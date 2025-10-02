import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ articles }) => {
    return (
        <div className="news-list">
            {articles.map((article, index) => (
                <NewsItem key={index} title={article.title} content={article.content} />
            ))}
        </div>
    );
};

export default NewsList;