const Product = require('./model/products')

class FakeDb {
    constructor() {
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'アイフォン　アイフォン　アイフォン　アイフォン　アイフォン　アイフォン　アイフォン　アイフォン',
                Heading1: 'サンプルテキスト1',
                Heading2: 'サンプルテキスト2',
                Heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
                headingtext3: 'ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ',
              },
              {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 600,
                description: 'aaaaaaaaaaa',
                Heading1: 'サンプルテキスト1',
                Heading2: 'サンプルテキスト2',
                Heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
                headingtext3: 'ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ',
              },
              {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone St',
                price: 500,
                description: 'aaaaaaaaaaa',
                Heading1: 'サンプルテキスト1',
                Heading2: 'サンプルテキスト2',
                Heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
                headingtext3: 'ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ',
              },
              {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Sp',
                price: 600,
                description: 'aaaaaaaaaaa',
                Heading1: 'サンプルテキスト1',
                Heading2: 'サンプルテキスト2',
                Heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
                headingtext3: 'ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ　ああああああ',
              }
        ]
    }

    async initDb() {
      await this.cleanDb()
      this.pushProductsToDb()
    }
    async cleanDb(){
      await Product.deleteMany({})
    }
    pushProductsToDb() {
        this.products.forEach(
            (product)=> {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb() {
        this.pushProductsToDb()
    }
}

module.exports = FakeDb