var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var search=document.getElementById('filter');
//get the input from form
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
search.addEventListener('keyup',filterItems);


function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    items.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to remove')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }

    }
    
}

function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(items){
        var itemName=items.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            items.style.display='block';
        }
            else{
                items.style.display='none';
            }
        }
        
    )
}

