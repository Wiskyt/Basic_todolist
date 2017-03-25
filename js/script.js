var tasks;

$(function() {
   tasks = JSON.parse(localStorage.getItem('tasks'));

   showTable();

   $('#addTask').on('click', function(event) {
      var taskName = $("#taskName").val();
      var taskDescription = $("#taskDescription").val();

      var obj = {};
      obj.taskName = taskName;
      obj.taskDescription = taskDescription;
      tasks.push(obj);

      localStorage.setItem('tasks', JSON.stringify(tasks));
      showTable();
   });
});

function showTable() {
   $("#taskList").empty();
   for (var i = 0; i < tasks.length; i++) {
      var task = tasks[i];
      $("#taskList").append("" +
         "<tr>" +
            "<th>" + task.taskName + "</th>" +
            "<th>" + task.taskDescription + "</th>" +
            "<th></th>" +
            "<th><button class=\"btn btn-danger\" onClick=delEvent(" + i + ")>X</button>" +
         "</tr>"
      );
   }
}

function delEvent(id) {
   tasks.splice(id, 1);
   localStorage.setItem('tasks', JSON.stringify(tasks));
   showTable();
}