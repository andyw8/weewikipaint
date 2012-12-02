desc("say hello");
task('task1', function(){
  console.log("hello");
});

desc("say goodbye");
task('task2', ['task1'], function(){
  console.log("goodbye");
});