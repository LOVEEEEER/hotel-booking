import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import commentService from "../services/comment.service";

const CommentsContext = React.createContext();

export const useComments = () => {
    return useContext(CommentsContext);
};

const CommentsProvider = ({ children }) => {
    const [comments, setComments] = useState();

    useEffect(() => {
        getRoomsComments();
    }, []);

    async function getRoomsComments() {
        try {
            const { content } = await commentService.get();
            console.log(content);
            setComments(content);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CommentsContext.Provider value={{ comments }}>
            {children}
        </CommentsContext.Provider>
    );
};

CommentsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

export default CommentsProvider;
