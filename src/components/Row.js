import React from "react";

export default function Row({ item, deleteTask }) {
    return (
        <li Key={item.id}>
            {item.description}
            <button className='delete-button' onClick={() => deleteTask(item.id)}> Delete</button>
        </li>
    )
}