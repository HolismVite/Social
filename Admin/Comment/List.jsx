import { List, Text } from '@List'

const filters = <>
    <Text
        column='Body'
        placeholder='Body'
    />
</>

const headers = <>
    <th>Name</th>
</>

const row = (item) => <>
    <td>{item.body}</td>
</>

const Comments = () => {
    return <List
        title='Comments'
        entityType='Comment'
        filters={filters}
        headers={headers}
        row={row}
    />
}

export default Comments