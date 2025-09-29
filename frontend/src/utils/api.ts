// Simple API utility for making requests to the backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export const api = {
  // GET request
  async get(endpoint: string) {
    const response = await fetch(`${API_BASE_URL}/api${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },

  // POST request
  async post(endpoint: string, data: any) {
    const response = await fetch(`${API_BASE_URL}/api${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },

  // PUT request
  async put(endpoint: string, data: any) {
    const response = await fetch(`${API_BASE_URL}/api${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },

  // DELETE request
  async delete(endpoint: string) {
    const response = await fetch(`${API_BASE_URL}/api${endpoint}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.ok;
  }
};

// Example usage:
// const projects = await api.get('/projects');
// const newProject = await api.post('/projects', projectData);
// await api.put('/projects/1', updatedProject);
// await api.delete('/projects/1');