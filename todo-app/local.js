export let array = [];
export let listName = '';

export function getTodoList(owner) {
    let listName = owner;
    let localData = localStorage.getItem(listName);
        if (localData !== null && localData !== '') {
          array = JSON.parse(localData);
        }

        for (const itemList of array) {
          let todoItem = createTodoItem(itemList);
          todoList.append(todoItem.item);
        }
}

export function createTodoItem({owner, arr}) {
    localStorage.setItem(owner,JSON.stringify(arr)) ;
}

export function switchTodoItemDone() {
    for (const ListItem of array) {
        if(ListItem.id == obj.id) ListItem.done = !ListItem.done
      }
      saveList(array,listName);

}

export function deleteTodoItem() {
    if (!confirm('Вы уверены?')) {
        return;
    }
    item.remove();
    for (let i = 0; i<array.length; i++) {
        if(array[i].id == obj.id)
        array.splice(i,1)
      }
      saveList(array,listName);

}