import React from 'react';
import Folder from './Folder';
import File from './File'

function FileTree({ data }) {
  return data.map((item) => {
    if (item.type === 'website') {
      return <File name={item.name} />;
    }

    if (item.type === 'folder') {
      return (
        <Folder name={item.name}>
          <FileTree data={item.childrens} />
        </Folder>
      )
    }
    return ( null );
});

}

export default FileTree;