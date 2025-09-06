const listOfTasks = document.querySelector(".listOfTasks");

const fetchTasks = async () => {
    try {
        const tasks = await axios.get("/api");
        //   console.log(tasks);
        const taskList = tasks.data.tasks.map((t) => {
            return `${t.task} <button class="done-task" id=${t.id}>done</button> <br>`;
        });
        listOfTasks.innerHTML = taskList.join("");

        //done task
        const doneButtons = document.querySelectorAll(".done-task")
        doneButtons.forEach((btn) => {
            btn.addEventListener("click", async () => {
                const id = btn.id;
                await axios.delete(`/api/${id}`)
                fetchTasks();
            })
        })
    } catch (error) {
        listOfTasks.innerHTML = `<h3>Can't Fetch Data</h3>`;
    }
};
fetchTasks();



