const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all')
  .addEventListener('click',async function (event) {
const response= await charactersAPI.getFullList() 
console.log('here are your characters, ', response)
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const characterId = document.getElementById('character-id').value;
    const response = await charactersAPI.getOneRegister(characterId);
    console.log('Here is the character with ID', characterId, ':', response);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
