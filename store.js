// Cool Store

function greeting(store_name) {
  console.log(`Thank you for visiting ${store_name}, we hope you have a great time shopping with us!`);
}
function app() {
  for (let i =0; i<5; i++) {
    greeting("Cool Store")
  }
}

app();

function shop() {
  const store_details = {
    items: ["Genie Lamp", "Magic Beans", "Invisibility Cloak"],
    sales: 0,
    add_item: 
    function add_item(item) {
      this.items.push(item);
    },
    bought_item: 
    function bought_item(item){
      if (this.items.indexOf(item)== -1) {
        console.log(`${item} is not cool, sorry`);
      }
      else {
        this.items.splice(this.items.indexOf(item), 1);
        console.log(`Enjoy your ${item}:)`)
        this.sales+=1
      }
    }
  };

  store_details.add_item("Fairy Dust");
  store_details.add_item("Sleeping Potion");
  store_details.add_item("Glass Slipper");
  store_details.add_item("Magic Mirror");
  store_details.add_item("Wand");
  console.log(`${store_details.items}`)
  
  store_details.bought_item("Glass Slipper");
  store_details.bought_item("Plain White Shirt");
  console.log(`Today we had ${store_details.sales} sales!`);
  console.log("Thank you for shopping!")
}

shop();
