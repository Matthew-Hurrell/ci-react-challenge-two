import React from 'react'
import css from "./css/Content.module.css"

function PostItemAPI(props) {
    return (
        props.savedPosts.map(post => {
            const {id,user,type,tags,webformatURL} = post
            return (
            <div key={id} className={css.SearchItem}> 
                    <p>{type}</p>
                    <p>{user}</p>
                    <img src={webformatURL}></img>
                    <p>{tags}</p>
                </div>
            )
        })
    )
}

export default PostItemAPI