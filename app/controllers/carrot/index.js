import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    createMeal() {
      this.store.createRecord('meal', {
      name: this.get('newMeal')
    }).save().then(() => {
      console.log("guardado")

    }).catch((e) => {
      alert("error")

    }).finally(() => {
      this.set('newMeal', '');
    });


      }
  }
});
