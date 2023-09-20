```javascript
   function getCourses(){
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }
// converting api object data to in a single array . first taking the value and using foreach loop accessing the all the arrays and then foreach loop on array to access the all the different array and storing in a single courseData array and pushing in allCourses.
```