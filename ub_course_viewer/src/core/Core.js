import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App.css';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'

let myGraph = {
  name: 'Parent',
  children: [{
    name: 'Child One',
    children: [{
      name: "Grandchild One"
    }]
  }, {
    name: 'Child Two'
  }],
};

function Core(props){
    return (
		<div>
      <Tree
        data={myGraph}
        height={400}
        width={400}/>
		</div>
    );
}

export default Core;