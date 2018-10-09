import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
  editMeal(meal) {
      meal.save().then(() => {
        this.transitionToRoute('carrot.index')
      }).catch((e) => {
        console.log(e)
      })
  },
  deleteMeal(meal) {
      meal.destroyRecord().then(() => {
        this.transitionToRoute('carrot.index')
      }).catch((e) => {
        console.log(e)
      })


  }
}
});
