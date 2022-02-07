const App = {
    data(){
        return{
            
            productList:[
                {
                    id:1,
                    title:"焦糖熱奶茶",
                    originPrice:80,
                    sellPrice:60,
                    isActive:true,
                    type:"熱飲",
                    productDiscription:'濃郁的焦糖配上口感濃密的奶茶，是來此必點的飲品之一。',
                    productSize:"350ml",
                    imgUrl:'https://media.istockphoto.com/photos/pumpkin-coffee-in-transparent-cup-and-whipped-cream-with-cinnamon-picture-id1333269760',
                    imgUrl2:'https://media.istockphoto.com/photos/pumpkin-coffee-in-transparent-cup-and-whipped-cream-with-cinnamon-picture-id1333269760',
                    
                },
                {   
                    id:2,
                    title:"可可脆片拿鐵冰沙",
                    originPrice:150,
                    sellPrice:120,
                    isActive:true,
                    type:"冰沙",
                    productDiscription:'酥脆的可可配上拿鐵冰沙，令人感到驚艷。',
                    productSize:"350ml",
                    imgUrl:'https://media.istockphoto.com/photos/chocolate-milkshake-with-pieces-of-chocolate-chip-cookies-picture-id1332118836',
                    imgUrl2:'https://media.istockphoto.com/photos/chocolate-milkshake-with-pieces-of-chocolate-chip-cookies-picture-id1332118836',
                    
                },
                {   
                    id:3,
                    title:"蒜香牛排可頌三明治",
                    originPrice:290,
                    sellPrice:250,
                    isActive:true,
                    type:"三明治",
                    productDiscription:'濃郁的焦糖配上口感濃密的奶茶，是來此必點的飲品之一',
                    productSize:"400g",
                    imgUrl:'https://media.istockphoto.com/photos/sandwich-with-fillet-mignon-meat-steak-croissant-and-blue-cheese-picture-id1357344570',
                    imgUrl2:'https://media.istockphoto.com/photos/sandwich-with-fillet-mignon-meat-steak-croissant-and-blue-cheese-picture-id1357344570',
                    
                },
            ],
            productTemp:{},
        }
    },
    methods:{
        showPorduct(e){
            if(e.target.nodeName==='BUTTON'){
                const index = e.target.dataset.index;
                this.productTemp=this.productList[index];
                
            }
            else{return}
        },
        activeProduct(e){
            const index =e.target.dataset.index;
            if(this.productList[index].isActive===false){
                this.productList[index].isActive=true;
            }else{
                this.productList[index].isActive=false;
            }
            console.log(this.productList[index].isActive)
        }
    },
    mounted(){}
}
Vue.createApp(App).mount("#App")