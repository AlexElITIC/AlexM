import Component from '@ember/component';

export default Component.extend({
  actions:{
  updateItem(){
    this.onUpdate()
  },
  deleteItem(){
    this.onDelete()
  }

}
});
