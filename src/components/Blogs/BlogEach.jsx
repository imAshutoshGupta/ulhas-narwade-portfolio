import React from "react";
import { Fade } from "react-awesome-reveal";

const BlogEach = ({
    title,
    description,
    siteLink
}) => {
    return (
        <Fade duration="200" cascade>
            <li className="blogEach" href={siteLink}>

                <div className="blogEach-list-link">
                    <div className="folder-logo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#64ffda"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-folder"
                        >
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </div>
                    <div className="folder-links">

                        <a href={siteLink}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#a8b2d1"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-external-link"
                            >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
                <h3 className="blogEach-list-title">
                    <a href={siteLink}>{title}</a>
                </h3>
                <div className="blogEach-list-des">
                    <p>{description}</p>
                </div>

            </li></Fade>
    );
};

export default BlogEach;
