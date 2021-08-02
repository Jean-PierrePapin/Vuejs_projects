<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0123 45678 9',
                    email: 'manuel@local.com'
                },
                {
                    id: 'Sam',
                    name: 'Sam V',
                    phone: '0123 78945 9',
                    email: 'sam@local.com'
                }
            ]
        };
    }
};
</script>
