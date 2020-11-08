import PopUp from '@/components/PopUp.vue';
import Scene from '@/components/Scene.vue';

const components = [PopUp, Scene];

components.forEach(component => {

	test('should has name', () => {

		expect(component.name).toBeTruthy();

	});

});
