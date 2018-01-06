import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const ArticleBox = () => (
    <div>This is an article box</div>
);

const Article1 = () => (
    <div>This is article1</div>
);

const Article2 = () => (
    <div>This is article2</div>
);

const Article3 = () => (
    <div>This is article3</div>
);

const Articles = () => (
    <Router>
        <div>
            <li><Link to="/articles/article1">Article1</Link></li>
            <ArticleBox><Link to="/articles/article2">Article2</Link></ArticleBox>
            <ArticleBox><Link to="/articles/article3">Article3</Link></ArticleBox>

            <Route path="/articles/article1" component={Article1}/>
            <Route path="/articles/article2" component={Article2}/>
            <Route path="/articles/article3" component={Article3}/>
        </div>
    </Router>
);

export default Articles;
