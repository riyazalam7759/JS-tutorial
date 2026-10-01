
//Destructuring 4:22:00

const course={
    courseName:"JS in youtube",
    price:"999",
    courseInstructor:"Hitesh"
}
//course.courseInstructor

const {courseInstructor}=course//extract courseInstructor from course object
console.log(courseInstructor)//=>Hitesh

const {price :p}=course//here did same thing extracting price but price is given a name which is p
console.log(p)

console.log("\n\nLEARNING API ")
//object without name is json like
// {
//     "name":"riyaz",
//     "id":"1223abc",
//     "class":"7th sem"
// }

// [
//     {},
//     {},
//     {},
//     {}
// ]
//API can be in above format 