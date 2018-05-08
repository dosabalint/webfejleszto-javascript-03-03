// elemek összegyűjtése

let inputItemName = document.getElementById('itemName');
let inputItemPrice = document.getElementById('itemPrice');
let buttonAdd = document.getElementById('buttonAdd');
let listItemList = document.getElementById('itemList');
let spanTotalPrice = document.getElementById('totalPrice');

// változók

let itemNames = ['tankolás', 'zsugor víz'];
let itemPrices = [20000, 1200];

// feliratkozás

buttonAdd.addEventListener('click', OnButtonAddClick);

// init

RenderList();

// renderelés

function RenderList() {
  // takarítás
  listItemList.innerHTML = '';

  // iterálás
  itemNames.forEach(function(itemName, index) {
    RenderListItem(itemName + ' | ' + itemPrices[index] + ' Ft');
  });

  // összeg frissítése
  spanTotalPrice.innerText = GetTotalPrice();
}

function RenderListItem(text) {
  let newListItem = document.createElement('li');
  newListItem.innerText = text;
  listItemList.appendChild(newListItem);
}

// új elem felvitele

function AddItem() {
  // validálás
  if (!(inputItemName.value && inputItemPrice.value)) {
    return;
  }

  // hozzáadás
  itemNames.push(inputItemName.value);
  itemPrices.push(+inputItemPrice.value);

  // takarítás
  inputItemName.value = '';
  inputItemPrice.value = '';

  // renderelés
  RenderList();
}

// összegzés

function GetTotalPrice() {
  return itemPrices.reduce(function(accumulator, currentItemPrice, index) {
    return accumulator + currentItemPrice;
  });
}

// feliratkozó függvények

function OnButtonAddClick() {
  AddItem();
}
