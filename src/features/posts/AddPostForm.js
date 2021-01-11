import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onTitlechange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      )

      setTitle('')
      setContent('')
    }
  }
  return (
    <sectiom>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={onTitlechange}
        />

        <label htmlFor="postContent">Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChange}
        ></textarea>
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </sectiom>
  )
}
