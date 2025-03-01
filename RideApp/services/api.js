import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-api.com',
});

export const verifyUser = async (name, idImage) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('idImage', {
    uri: idImage,
    type: 'image/jpeg',
    name: 'idImage.jpg',
  });

  try {
    const response = await api.post('/verify-user', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error verifying user:', error);
    return { success: false };
  }
};

export const verifyDriver = async (name, licenseImage) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('licenseImage', {
    uri: licenseImage,
    type: 'image/jpeg',
    name: 'licenseImage.jpg',
  });

  try {
    const response = await api.post('/verify-driver', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error verifying driver:', error);
    return { success: false };
  }
};