import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    createProduct(){
        this.store.createRecord('product', {
        name: this.get('newProduct'),calories: this.get('calories')
      }).save().then(() => {
        console.log("guardado")

      }).catch((e) => {
        alert("error")

      }).finally(() => {
        this.set('newProduct', '');
        this.set('calories','')
      });
    },
    updateProduct(product){
  product.save().then(()=>{alert("guardado")}).catch((e)=>{alert("error, tonto")})
},
deleteProduct(product){
  product.destroyRecord().then(()=>{alert("borrado")}).catch((e)=>{alert("error, tonto")})
}
  }
});
