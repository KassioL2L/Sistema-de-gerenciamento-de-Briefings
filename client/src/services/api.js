const BASE_URL = 'http://localhost:5000'; 

// Function to create a new briefing
export const createBriefing = async (briefingData) => {
    try {
        const response = await fetch(`${BASE_URL}/briefings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(briefingData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to create briefing');
    }
};

// Function to get all briefings
export const getAllBriefings = async () => {
    try {
        const response = await fetch(`${BASE_URL}/briefings`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to get briefings');
    }
};

// Function to get a briefing by ID
export const getBriefingById = async (briefingId) => {
    try {
        const response = await fetch(`${BASE_URL}/briefings/${briefingId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to get briefing');
    }
};

// Function to update a briefing by ID
export const updateBriefingById = async (briefingId, updatedBriefingData) => {
    try {
        const response = await fetch(`${BASE_URL}/briefings/${briefingId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedBriefingData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to update briefing');
    }
};

// Function to delete a briefing by ID
export const deleteBriefingById = async (briefingId) => {
    try {
        const response = await fetch(`${BASE_URL}/briefings/${briefingId}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to delete briefing');
    }
};