import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import commentService from "../services/comment.service";
import { useParams } from "react-router-dom";

const CommentsContext = React.createContext();

export const useComments = () => {
    return useContext(CommentsContext);
};

const CommentsProvider = ({ children }) => {
    const [comments, setComments] = useState([]);
    const { roomId } = useParams();

    useEffect(() => {
        getRoomsComments();
    }, []);

    async function getRoomsComments() {
        try {
            const { content } = await commentService.get(roomId);
            console.log(content);
            setComments(content);
        } catch (error) {
            console.log(error);
        }
    }

    async function createComment(comment) {
        try {
            const content = await commentService.create(comment.id, comment);
            setComments((prevState) => [comment, ...prevState]);
            console.log(content);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CommentsContext.Provider value={{ comments, createComment }}>
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
