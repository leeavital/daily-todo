'use strict'

require( ['js/angular/angular.min.js' ], function(){


    var app = angular.module( 'daily-todo', [] );

    app.controller( 'dt.MainCtrl', [ '$scope', 'dt.tasks', function( $scope, tasks  ){
        $scope.message = 'Hello World';

        $scope.addTask = function(){
            console.log( $scope.taskform );
            tasks.addTask( taskform );

        }
    }]);
    

    app.service( 'dt.tasks', [ function(){
        
        var allTasks = [];
        
        return {
            addTask: function( task ){
               allTasks.push( task );                    
            }
        }


    } ]);



});
