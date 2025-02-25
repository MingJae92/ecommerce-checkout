export default interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export default interface ProductData {
  id: number;
  category:Category;
  description:string;
  images:string[]
  price:number;
  slug:string;
  title:string;

}
