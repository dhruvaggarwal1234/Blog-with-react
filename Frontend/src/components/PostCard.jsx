import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, featuredImage, title }) {
    const url = appwriteService.getFilePreview(featuredImage);

    return (
        <Link to={`/post/${$id}`} className="group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">

               
                <div className="h-48 overflow-hidden">
                    <img
                        src={url}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>

               
                <div className="p-5">
                    <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {title}
                    </h2>

                    <p className="text-sm text-gray-500 mt-2">
                        Read full article →
                    </p>
                </div>

            </div>
        </Link>
    );
}

export default PostCard;
