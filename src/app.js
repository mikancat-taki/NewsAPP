import React, { useState, useEffect } from 'react';
import NewsList from './NewsList';
import { fetchNews } from '../services/newsApi';

const App = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                setLoading(true);
                const news = await fetchNews('general');
                setArticles(news);
                setError(null);
            } catch (err) {
                setError('ニュースの取得に失敗しました');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, []);

    return (
        <div className="app">
            <h1>ニュースリーダー</h1>
            {loading && <p style={{ textAlign: 'center' }}>読み込み中...</p>}
            {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
            {!loading && !error && <NewsList articles={articles} />}
        </div>
    );
};

export default App;