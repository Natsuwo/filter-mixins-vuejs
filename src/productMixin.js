export const productMixin = {
    data() {
      return {
        text: 'Product Filter & Mixin',
        products: ["Iphone", "Samsum", "HTC", "Nokia", "Bphone"],
        filterProduct: ""
      };
    },
    computed: {
      filteredProducts() {
        return this.products.filter(element => {
          return element.match(this.filterProduct);
        });
      }
    },
    created() {
      console.log('Created from mixins')
    }
  };