var checkMark = document.getElementsByClassName("fa-solid fa-check");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down"); //added a new variable for thumbs down to start
var trash = document.getElementsByClassName("fa-trash");

Array.from(checkMark).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const check = parseFloat(this.parentNode.parentNode.childNodes[5].innerText) 
        fetch('jobs/completed', { 
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'check': check
          })
        })
        .then(response => {
          if (response.ok) return response.json() 
        })
        .then(data => {
          console.log(data)
          window.location.reload(true) //this is making the page automatically reload each time a user thumbs any messages up or down.
        })
      });
});


// Array.from(thumbDown).forEach(function(element) { //copied code block for thumbUp to apply to thumbDown, with appropriate modifications 
//   element.addEventListener('click', function(){
//     const name = this.parentNode.parentNode.childNodes[1].innerText //important: refer to index.ejs to make note of parent(s)/child node relationship (also noted above). We know that index count begins at 0, and skipped lines are text nodes created by the whitespace or line breaks in the index code. 
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[9].innerText) 
//     const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('messages/thumbDown', { //important: we needed to indicate file path here specifically as well! 
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbDown':thumbDown,
//         'thumbUp': thumbUp,
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });



Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('jobs', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
