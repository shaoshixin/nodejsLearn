var teacher =require('teacher')
var student =require('student')

function add (tName,sName){
    teacher.add(tName)
    sName.forEach(function(item, index){
        student.add(item)
    })
}
exports.add=add
