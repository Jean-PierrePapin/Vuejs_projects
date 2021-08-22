export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: data.firstName,
            lastName: data.lastName,
            description: data.description,
            hourlyRate: data.hourlyRate,
            areas: data.areas
        };

        const response = await fetch(`https://micro-reserve-281813-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        });

        // const responseData = await response.json();

        if (!response.ok) {
            // error ...
        }

        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    }
};