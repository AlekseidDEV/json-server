export const render = (users) => { // тут принимаем данные из индекса (из дзена)
    const tbody = document.querySelector('#table-body') // получаем всю таблицу
    tbody.innerHTML = '' // отчищаем таблицу, что бы не дублировались каждый раз данные

    users.forEach(user => { // перебираем массив с данными, и каждый отдельный объект записываем в строчку
       tbody.insertAdjacentHTML('beforeend', `
       <tr data-key="${user.id}">
       <th scope="row">${user.id}</th>
       <td>${user.name}</td>
       <td>${user.email}</td>
       <td>${user.children ? 'Есть' : 'Нет'}</td>
       <td>
           <div class="form-check form-switch">
               <input class="form-check-input" type="checkbox" role="switch" ${user.permissions ? 'checked' : ''}
                   id="form-children">
           </div>
       </td>
       <td>
           <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
               <button type="button" class="btn btn-warning">
                   <i class="bi-pencil-square"></i>
               </button>
               <button type="button" class="btn btn-danger">
                   <i class="bi-person-x"></i>
               </button>
           </div>
       </td>
   </tr>
       `)
    })
}