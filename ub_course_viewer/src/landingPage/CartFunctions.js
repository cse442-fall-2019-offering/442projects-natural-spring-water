let add_course = (courseCode, course_list) => {
    //triple equals because console wouldnt shut the fuck up about it
    if(course_list.indexOf(courseCode) === -1){
        course_list.push(courseCode);
        console.log("ShoppingCartJS: Added " + courseCode + " to cart which is now " + course_list);
    }
}

let remove_course = (courseCode, course_list) => {
    var index;
    // var i;
    
    index = course_list.indexOf(courseCode);
    // for(i = 0; i < this.state.course_list.length; i++) {
    // 	console.log("ShoppingCart.js : remove_course() : courseCode : " + courseCode);
    // 	console.log("ShoppingCart.js : remove_course() : courseInList : " + this.state.course_list[i]);
    // 	if(courseCode === this.state.course_list[i]) {
    // 		index = i;
    // 		break;
    // 	}
    // }
    
    console.log("ShoppingCart.js : remove_course() : index " + index)
    if(index !== -1) {
        course_list.splice(index , 1);
        console.log("ShoppingCart.js : remove_course() : Removed")
    }
}

export default {add_course, remove_course}