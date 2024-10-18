```ts
const [firstProduct] = await this.productRepository.find({ take: 1 });

const lastProduct = await this.productRepository.find({
  order: { id: "DESC" },
  relations: ["orderDetails", "category"],
  take: 1,
});

// removeAll
this.productRepository.delete({});

// count = 0
this.productsRepository.count();
```
