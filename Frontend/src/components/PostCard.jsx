import React from "react";
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'


function PostCard({$id , featuredImage , title}){


     const url = appwriteService.getFilePreview(featuredImage);

    return(
        
       
       <Link to = {`/post/${$id}`}>

        <div className="w-full bg-gray-100 rounded-xl p-4 ">'

            <div className="w-full justify-center mb-4">
                <img src={url} alt={title}/>

            </div>
            <h2>{title}</h2>
        </div>
       </Link>
    );
}

export default PostCard;