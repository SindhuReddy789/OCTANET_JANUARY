document.addEventListener("DOMContentLoaded", function () {
    const tasks = [
      { text: "Finalize homepage design mockup", deadline: "2024-01-20", priority: "high", status: false },
      { text: "Add animations to enhance user experience", deadline: "2024-03-20", priority: "medium", status: false },
      { text: "Code navigation bar and footer", deadline: "2024-01-22", priority: "high", status: false },
      { text: "Implement responsive design for mobile users", deadline: "2024-03-25", priority: "medium", status: false },
      { text: "Write and proofread website content", deadline: "2024-03-28", priority: "low", status: false },
      { text: "Optimize images for faster page load", deadline: "2024-01-30", priority: "high", status: false },
      { text: "Set up contact form and validation", deadline: "2024-03-31", priority: "medium", status: false },
      { text: "Create product pages", deadline: "2024-04-02", priority: "low", status: false },
      { text: "Integrate social media sharing buttons", deadline: "2024-02-05", priority: "high", status: false },
      { text: "Test website on multiple browsers", deadline: "2024-04-08", priority: "medium", status: false },
      { text: "Implement a user authentication system", deadline: "2024-02-10", priority: "high", status: false },
      { text: "Set up and configure website analytics", deadline: "2024-04-12", priority: "medium", status: false },
      { text: "Conduct usability testing with a small group", deadline: "2024-04-15", priority: "medium", status: false },
      { text: "Prepare documentation for website launch", deadline: "2024-02-18", priority: "high", status: false },
      { text: "Create a backup and recovery plan", deadline: "2024-04-20", priority: "low", status: false },
      // Add more tasks here
    ];
  
    const tasksContainer = document.getElementById("tasksContainer");
    const progressPercentage = document.getElementById("progressPercentage");
    const progressBar = document.getElementById("progressBar");
  
    window.addTask = function () {
      const taskDescription = document.getElementById("taskDescription").value;
      const taskDeadline = document.getElementById("taskDeadline").value;
      const taskPriority = document.getElementById("taskPriority").value;
  
      if (taskDescription && taskDeadline && taskPriority) {
        tasks.push({
          text: taskDescription,
          deadline: taskDeadline,
          priority: taskPriority,
          status: false
        });
  
        renderTasks();
        document.getElementById("addTaskForm").reset(); // Clear the form
      } else {
        alert("Please fill in all the fields.");
      }
    };
  
    document.getElementById("addTaskButton").addEventListener("click", addTask);
  
    function renderTasks() {
      tasksContainer.innerHTML = "";
  
      let completedTasks = 0;
  
      tasks.forEach((task, index) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task", task.priority + "-priority");
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.status;
        checkbox.addEventListener("change", function () {
          tasks[index].status = this.checked;
          updateProgress();
        });
  
        const label = document.createElement("label");
        label.textContent = task.text + " - Deadline: " + task.deadline;
  
        taskElement.appendChild(checkbox);
        taskElement.appendChild(label);
        tasksContainer.appendChild(taskElement);
  
        if (task.status) {
          completedTasks++;
        }
      });
  
      updateProgress(completedTasks);
    }
  
    function updateProgress() {
        const completedTasks = tasks.filter(task => task.status).length;
        const totalTasks = tasks.length;
        const progress = (completedTasks / totalTasks) * 100;
      
        progressPercentage.textContent = `${progress.toFixed(0)}%`;
        progressBar.style.width = `${progress}%`;
      }
      
      
  
    // Initial render
    renderTasks();
  });
  