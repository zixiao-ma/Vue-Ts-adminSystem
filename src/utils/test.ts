type fnType=(x:number,y:number,z?:string)=>number
const fn:fnType = (x,y,z)=>{
    return x+y
}
console.log(fn(5,5))
type arrType = Array<number>
const arrayNumber:arrType = [1,2,3,4]
const str:number|string = 1;
interface objType {
    name:string,
    sayHello:(age:number)=>boolean,
    sex?:String,
    [propsName:string]:any
}
interface objType2 extends objType{
    a:string
}
let obj:objType2={
    name:'name',
    sayHello:(age)=>{
        console.log(age,'age')
        return true
    },
    a:'1'
}

obj.sayHello(10)
console.log(obj)
let position:[number,number,string] = [1,1,'1']
type Direction = 'A'|'B'|'C'|'D';
enum Direction1 {
    A,B,C,D
};
function fn2(eng:Direction1) {
    console.log(eng)
}
fn2(1)
const div = document.getElementById('app') as HTMLAnchorElement
interface hasLength {
    length:number
}
function getArg<T extends hasLength,key>(arg:T,name:key) :T{
    return arg
}


console.log(typeof getArg<Array<number>,String>([1,2,3],'haha'),'1')
