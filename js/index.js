const { createApp } = Vue;
const url =  'https://randomuser.me/api/';
  createApp({
    data() {
      return {
        name: "",
        email: "",
        image: "",
        location: "",
        cell: "",
      }
    },
    mounted() {
      axios
              .get(url)
              .then(response => {
              this.results = response.data
              let person = this.results.results[0];
              this.name = person.name.first + " " + person.name.last;
              this.email = person.email;
              this.image = person.picture.large;
              this.location = person.location.city + ", " + person.location.state + ", " + person.location.country;
              this.cell = person.cell;
              })
              .catch ( function (error){
                console.log('Fail Server Error');
              });
    }
  }).mount('#app')
