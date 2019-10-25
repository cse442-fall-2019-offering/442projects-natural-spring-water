import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import '../App.css';
import Tree from 'react-tree-graph';

class Core extends Component{
  state = {
    rootCourse:{},
    viewGraph:{}
  }

  createNode = (course) => {
    let newNode = {
      name: course.code,
      children: this.findChildren(course)
    }
    return newNode;
  }

  findChildren = (parentCourse) => {
    let my_children = [];
    this.props.courseList.map((course) => {
      if(course.associated_courses && course.associated_courses.indexOf(parentCourse.code) !== -1){
        my_children.push(this.createNode(course));
      }
    });
    return my_children;
  }
  constructor(props){
    super(props);
    this.state.rootCourse = this.props.selectedCourse;
  }
  render = () =>{
    return (
      <div className="TreeDiv">
        <Tree
          data={this.createNode(this.props.selectedCourse)}
          nodeRadius={15}
          margins={{ top: 20, bottom: 10, left: 50, right: 200 }}
          height={700}
          width={1000}
          textProps={{x:-25, y:25}}/>
      </div>
      );
  }
}

export default Core;