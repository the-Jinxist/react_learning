import React from 'react';


function Article(props){

    return (
        <div className="Article">
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <div className="readMore">
                <p>Read More...</p>
            </div>
        </div>
    );

}

export default Article;