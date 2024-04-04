import React from 'react'

export default function AuthorFilter({filterByAuthor,authors}) {
  return (
    <div>
          <select onChange={e => filterByAuthor(e.target.value)}>
        <option value="" disabled default selected>
          Select department
        </option>

        {authors.map(author => {
          return <option key={author}>{author}</option>
        })}
      </select>
    </div>
  )
}
