import { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
    const notesInitials = [
      {
        "_id": "654be2731e20e3e928b42c26",
        "user": "654a91d0f629d14dfa997475",
        "title": "My Title",
        "description": "Please wake up early",
        "tag": "Personal",
        "date": "2023-11-08T19:33:07.122Z",
        "__v": 0
      },
      {
        "_id": "654be2731e20e3e928b42c26",
        "user": "654a91d0f629d14dfa997475",
        "title": "My Title",
        "description": "Please wake up early",
        "tag": "Personal",
        "date": "2023-11-08T19:33:07.122Z",
        "__v": 0
      },
      {
        "_id": "654be2731e20e3e928b42c26",
        "user": "654a91d0f629d14dfa997475",
        "title": "My Title",
        "description": "Please wake up early",
        "tag": "Personal",
        "date": "2023-11-08T19:33:07.122Z",
        "__v": 0
      },
      {
        "_id": "654be2731e20e3e928b42c26",
        "user": "654a91d0f629d14dfa997475",
        "title": "My Title",
        "description": "Please wake up early",
        "tag": "Personal",
        "date": "2023-11-08T19:33:07.122Z",
        "__v": 0
      },
      {
        "_id": "654be2731e20e3e928b42c26",
        "user": "654a91d0f629d14dfa997475",
        "title": "My Title",
        "description": "Please wake up early",
        "tag": "Personal",
        "date": "2023-11-08T19:33:07.122Z",
        "__v": 0
      },
      {
        "_id": "654be2731e20e3e928b42c26",
        "user": "654a91d0f629d14dfa997475",
        "title": "My Title",
        "description": "Please wake up early",
        "tag": "Personal",
        "date": "2023-11-08T19:33:07.122Z",
        "__v": 0
      }
    ]
    const [notes, setNotes] = useState(notesInitials)
  return (
    <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;