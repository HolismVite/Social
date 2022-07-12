import CommentIcon from '@mui/icons-material/Comment';
import { EntityAction } from '@List'

const ViewComments = ({
    entityType,
    entityGuid,
    ...rest
}) => {
    return <EntityAction
        {...rest}
        title='View comments'
        icon={CommentIcon}
        goTo={`/comments?entityType=${app.camelize(entityType)}&entityGuid=${entityGuid}`}
    />
}

export default ViewComments