
function completeTaskBtn(){
             //Javascript          HTML
            let varTsk = document.getElementById("notification");
            varTsk.classList.add("color-red");

            varTsk.innerText = "Task completed! Notification sent.";
            alert("Task completed! Notification sent");
            
        }