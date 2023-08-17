import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic('880ed056-44e4-4631-8ac8-0f83c82ba0e8',
    props.user.username,
    props.user.secret)
    return <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:'100vh'}}/>
    </div>

}

export default ChatsPage