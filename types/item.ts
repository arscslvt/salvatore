interface Item {
  title: string;
  description?: string;
  startingPrice: number;
  image?: string;
  fiverrLink?: string;

  categories?: string[];

  slug?: string;
  _id?: string;
  _updatedAt?: string;
}

export default Item;
