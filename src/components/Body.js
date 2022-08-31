import React from 'react'
import FileTree from './FileTree/FileTree'
import { treeData } from './FileTree/data';

function Body() {
  return (
    <FileTree data={treeData} />
  )
}

export default Body