var app = angular.module('myapp',[])

var mylist = [
    'Water the plants'
]

app.controller('todolist_controller',function (){
    this.mylist = JSON.parse(window.localStorage.getItem('list')) || mylist
    this.new_item = null
    this.addToList = function () {
        this.mylist.push(this.new_item)
        this.new_item = null
        this.save()
    }
    this.removeItem = function (index) {
        this.mylist.splice(index,1)
        this.save()
    }

    this.save = function () {
        window.localStorage.setItem('list',JSON.stringify(this.mylist))
    }
})