async const GetItemByCode(code: string) {
  const productResult = await fetch(`/products/${code}`);
  const product = await productResult.json();
  if (!product) {
    throw new Error('Product not found');
  }
  return product;


}
export default GetItemByCode;
