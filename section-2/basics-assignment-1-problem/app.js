const app = Vue.createApp({
    data() {
        return {
            name: 'Serhii Holub',
            age: 50,
            imageUrl: 'https://picsum.photos/200/300',
        }
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        calculateRandom() {
            return Math.random();
        }
    }
});

app.mount('#assignment');