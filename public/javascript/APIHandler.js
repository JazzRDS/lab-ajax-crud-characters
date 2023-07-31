import axios from "axios"

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList()  {
    const response = await axios.get("http://localhost:8000/characters");
    console.log (response)
    if (response.status === 200){
      
     return response.data;
    }
  }

 async getOneRegister (id) {
  const response = await axios.get("http://localhost:8000/characters/:id");
  console.log (response)
  if (response.status === 200){

    return response.data;
  }
  }

  async createOneRegister (characterInfo) {
    try {const response = await axios
      .post("http://localhost:8000/characters/", characterInfo);
    
      return response.data;
    }
    catch (error){
  }
}
  

async updateOneRegister(id, characterInfo){
  try {
    const response = await axios.put("http://localhost:8000/characters/:id", characterInfo);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Error updating character:', response.statusText);
      throw new Error('Failed to update character.');
    }
  } catch (error) {
    console.error('Error updating character:', error);
    throw error;
  }
}



async deleteOneRegister(id) {
  try {
    const response = await axios.delete("http://localhost:8000/characters/:id");
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Error deleting character:', response.statusText);
      throw new Error('Failed to delete character.');
    }
  } catch (error) {
    console.error('Error deleting character:', error);
    throw error;
  }
}
}