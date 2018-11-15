
export class items {
  public src: string;
  public title: string;
  public price: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.src = name;
    this.title = desc;
    this.price = imagePath;
  }
}
