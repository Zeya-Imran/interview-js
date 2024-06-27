const tasks = [
  { id: 1, title: "Do the laundry", completed: false },
  { id: 2, title: "Write a report", completed: true },
  { id: 3, title: "Buy groceries", completed: false },
];

const taskIdToFind = 2;
const task = tasks.find((task) => task.id === taskIdToFind);

console.log(task);
// Output: { id: 2, title: 'Write a report', completed: true }
