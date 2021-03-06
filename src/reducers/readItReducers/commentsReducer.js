import _ from 'lodash'
import {
    CREATE_COMMENT, DELETE_COMMENT, EDIT_COMMENT, GET_ALL_POST_COMMENTS,
    VOTE_COMMENT
} from "../../actions/readitActions/commentsActions";

export default function comments(state = {}, action){
    switch (action.type){
        case GET_ALL_POST_COMMENTS:

            console.log("comment reducer state",state)
            const comments = _.mapKeys(action.payload, 'commentId')

            return comments

        case CREATE_COMMENT:
            console.log("Reducer COMMENT", action)

            console.log("in create comment reducer", state)
            return {
                ...state,
                [action.payload.commentId]:action.payload
    };
        case VOTE_COMMENT:
            console.log("VOTE COMMENT action.payload.data", action.payload.data)
            return{
                ...state,
                [action.payload.commentId]: action.payload

            }
        case EDIT_COMMENT:
            console.log("################ reducer action edit", action)

            return{
                ...state,
                [action.payload.commentId]: action.payload

            }
        case DELETE_COMMENT:
            console.table("STATE FOR DELETE COMMET", state)
            console.table("ACTION FOR DELETE COMMENT", action)
            return _.omit(state,[action.payload.id])





        default:
            return state
    }
}
