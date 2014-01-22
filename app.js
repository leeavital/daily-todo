'use strict'

require( ['js/angular/angular.js', 'js/watch/src/watch.js' ], function( ang, WatchJS){


   var app = angular.module( 'daily-todo', [] );

   app.controller( 'dt.MainCtrl', [ '$scope', 'dt.tasks', function( $scope, tasks  ){


      $scope.addTask = function(){
         tasks.addTask( $scope.taskform );
         $scope.$apply;
      }

      $scope.todaysTasks = tasks.todaysTasks;

      

   }]);


   app.service( 'dt.tasks', [  function( ){
var allTasks = []; 
      var o = {};

      o.addTask =  function( task ){
         allTasks.push( task );        

         o.todaysTasks.push(  );
      }
         o.todaysTasks.push( Object.create( task ) );
      o.todaysTasks = [];

      return o;



   } ]);



});
