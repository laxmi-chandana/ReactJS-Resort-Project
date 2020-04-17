import React from 'react'
import RoomFilter from './RoomFilter.js'
import RoomList from './RoomList.js'
import { withRoomConsumer , RoomConsumer} from './context.js'
import Loading from './Loading.js'


/*export default function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context
        if(loading){
            return <Loading />
        }
        return(
        <div>
            <RoomFilter rooms = {rooms}/>
            <RoomList rooms = {sortedRooms}/>
        </div>
        )
}*/


export default function RoomContainer () {
    return(
        <RoomConsumer>
            {value =>{
                const {loading, sortedRooms, rooms} = value
                if(loading){
                    return <Loading />
                }
                return(
                    <div>
                        <RoomFilter rooms = {rooms}/>
                        <RoomList rooms = {sortedRooms}/>
                    </div>
                )}
            }
        </RoomConsumer>
    )
}