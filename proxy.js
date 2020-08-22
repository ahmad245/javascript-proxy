class Greeting{
    getEn(){
        return 'en';
    }
    getFr(){
        return 'fr';
    }
}

class MoreGreeting{

    getGR(){
        return 'gr';
    }
    getSp(){
        return 'sp';
    }
}

const moreGreeting=new MoreGreeting();
const greeting=new Greeting();

const superGreeting=new Proxy(moreGreeting,{
    get:function(target,property){
        return target[property] || greeting[property];
    }
})

 console.log(superGreeting.getSp());
 console.log(superGreeting.getGR());
 console.log(superGreeting.getFr());
 console.log(superGreeting.getEn());