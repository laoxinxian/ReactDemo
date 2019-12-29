
// // 引入react库
// import React,{Component,Fragment} from 'react'
// // 引入css样式
// import './App.css'
// export default class App extends Component{

//   render(){
//     let buer = true
//     let obj = {
//       name:'Alamo',
//       skill:'Web',
//       size:'172'
//     }
//     return( <div>
      
//       {/* 标签 */}
//       <h1>一个段落</h1>
//       {/* 三元表达式 */}
//       {buer?'中了哦！':'不会出现的'}
//       {/* 算法 */}
//       <h3>1+1哦={1+1}</h3>
//       {/* 渲染对象 */}
//     <h2>本周冠军{obj.name}</h2>
//     </div>)

//   }
// }
import React,{Component} from 'react'
import './App.css'
export default class App extends Component{
  state={
    title:['AA','BB','CC','DD'],
    desc:''
  }
  showTheWord=(v)=>{
    console.log('被打了囖')
    this.setState({
      desc:v
    })
  }
  render(){
   return <div>
     <ul>
      {
      this.state.title.map((v,i)=> <li key={i} onClick={this.showTheWord.bind(this,v)}>{v}</li>)
      }
     </ul>
     <div>
       {this.state.desc}
     </div>
   </div>
  }
}