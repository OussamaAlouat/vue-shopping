import { shallowMount } from '@vue/test-utils';
import Product from '../../src/components/Product.vue';

describe('Product.vue', () => {
  it('renders', () => {
    const product = {
      image_url: ''
    };
    const wrapper = shallowMount(Product, {
      propsData: { product },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
