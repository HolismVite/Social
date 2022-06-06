import CommentIcon from '@mui/icons-material/Comment';
import { ItemAction } from '@List'

const ViewComments = ({
    entityType,
    entityGuid,
    ...rest
}) => {
    return <ItemAction
        {...rest}
        title='View comments'
        icon={CommentIcon}
        goTo={`/comments?entityType=${entityType}&entityGuid=${entityGuid}`}
    />
}

export default ViewComments