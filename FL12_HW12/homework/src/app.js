
 window.onload = function() {
    document.getElementById('addSetButton').onclick = function() {
        document.getElementById('main-page').style.display === 'none';
        document.getElementById('modify-set-page').style.display === 'none';
        document.getElementById('add-set-page').style.display = 'block';
    };
}
