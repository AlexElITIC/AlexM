import Ember from 'ember';

export default Ember.Controller.extend({
actions:{
		validarUsuario()
		{
			var usuario= this.get('user');
			if(usuario=="A01271558" && this.get('password')==="Star-Lord10"){
				this.transitionToRoute('lab');
			}
			else {
				console.log("Usuario no valido");
			}

			this.set('user',"");
			this.set('password',"");

		}
	}

});
