const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');
rootNode.appendChild(document.createElement('ul'));
for (let i=0; i<structure.length; i++) {
  let el = document.createElement('li')
  el.setAttribute('elementIndex', i);
  el.setAttribute('isFirstLevel', true);
  el.innerHTML =`<span  class="folder-icon"><i class="material-icons"> folder</i>${structure[i].title}</span>`;
  el.firstChild.addEventListener('click', showChildren);
  rootNode.firstChild.appendChild(el);
}

function showChildren(event) {
  let indexes = [];
  for (let i=0; i<event.composedPath().length; i++) {
    if (!event.composedPath()[i].getAttribute('isFirstLevel')) {
      if (event.composedPath()[i].getAttribute('elementIndex')) {
      indexes.unshift(event.composedPath()[i].getAttribute('elementIndex'));
      }
    } else {
      indexes.unshift(event.composedPath()[i].getAttribute('elementIndex'));
      break;
    }
  }

  let currentElement = structure[indexes[0]];
  for (let i=1; i<indexes.length; i++) {
      currentElement = currentElement.children[indexes[i]];
  }

  if (!this.parentElement.getAttribute('isOpen')) {
    openFolderNode(this.parentElement, currentElement);
  } else {
    closeFolderNode(this.parentElement);
  }
  
}

function openFolderNode(elHTML, elJS ) {
  elHTML.getElementsByTagName('i')[0].innerHTML = 'folder_open';
  elHTML.setAttribute('isOpen', true);
  if (elJS.children) {
    elHTML.appendChild(document.createElement('ul'));
    for (let i=0; i<elJS.children.length; i++) {
      let el = document.createElement('li');
      el.setAttribute('elementIndex', i);
      if (elJS.children[i].folder) {
        el.innerHTML = `<span class="folder-icon"><i class="material-icons"> folder</i> 
                        ${elJS.children[i].title}</span>`;
        el.firstChild.addEventListener('click', showChildren);
        
      } else {
        el.innerHTML = `<span class="file-icon"><i class="material-icons"> insert_drive_file</i> 
                        ${elJS.children[i].title}</span>`;
      }
      elHTML.lastChild.appendChild(el);
    }
  } else {
    let el = document.createElement('li');
    el.className = 'empty-folder-text';
    el.innerText = `Folder is empty`;
    elHTML.appendChild(el);
  }
}

function closeFolderNode(el){
  console.log('Надо бы закрыть');
  let firstEl = el.firstChild;
  el.innerHTML = '';
  firstEl.getElementsByTagName('i')[0].innerHTML = 'folder';
  el.appendChild(firstEl);
}