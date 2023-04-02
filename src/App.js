import React, { Component } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { AiTwotoneStar } from 'react-icons/ai';
import { FcStart } from 'react-icons/fc';





 class App extends Component {
  constructor(){
    super()
    this.state={
        value:"",
        todo:[
           
        ]
    }
    

}
 //input 
 handlechg=(val)=>{
  this.setState({
      value:val
  })

}


//submit 
setdata=()=>{
console.log(this.state.value)

//object title,s
let obj ={
  title : this.state.value ,
  s : 0
}

this.state.todo=[...this.state.todo,obj]

localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))

this.setState({

  value:""
})

// 

console.log(this.state.todo)
}
componentDidMount(){
let data = localStorage.getItem("Todo_List")
console.log(data)
// Parse string to obj

this.setState({})
if(data == null){
  this.state.todo=[]
}
else{
  this.state.todo=JSON.parse(data)
}
}

//state chg = 0 or 1
edit = (ind)=>{
//o 
for(var i =0;i<this.state.todo.length;i++){
  this.state.todo[i].s=0
}

this.state.todo[ind].s=1
this.setState({})



}


//todo title => value inp 
setnewtext=(val,ind)=>{
this.state.todo[ind].title=val
this.setState({

})


}

update = (i)=>{
this.state.todo[i].s=0
localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))
this.setState({

})
}
dlete = (i) =>{
this.state.todo.splice(i,1)
localStorage.setItem("Todo_List",JSON.stringify(this.state.todo))
this.setState({})
}
  render() {
    return (
      <div className='conatiner-fluid my-5'>
        <div className="row">
          <div className='col-sm-6 mx-auto text-black shadow-lg p-3'>
          <h1 className='text-center'>Todo App</h1>
          <div className="row">
            <div className="col-9">
            <input type="text" value={this.state.value} onChange={(e)=>this.handlechg(e.target.value)} />
            </div>
            <div className="col-9">
              <button className='btn btn-warning' onClick={()=>this.setdata()}><IoIosAddCircleOutline/></button>
              {
                    this.state.todo.map((v,i)=>{
                        return(

                          
                            v.s == 0 ?
                            //text 
                          
                            
                              
                                <li  key={i}  className='text-black shadow-lg p-3 bg-lightblue'>
                              <i><FcStart/></i>
                                {v.title}
                              <button className='btn btn-primary' onClick={()=>this.edit(i)}>edit</button>
                              <button onClick={()=>this.dlete(i)}>delete</button>

                            </li>

                          
                            

                            :
                            
                              
                                <li  key={i} >
                            <i><FcStart/></i> 
                            <input type="text" value={v.title} onChange={(e)=>this.setnewtext(e.target.value,i)} />
                            <button className='btn btn-warning' onClick={()=>this.update(i)}>update</button>
                            <button  onClick={()=>this.dlete(i)}>delete</button>

                          </li> 
                             
                           
                            
                          

                        

                        )
                    })
                }
             
            </div>
          </div>
          </div>
        </div>
        
      </div>
    )
  }
}


export default App;
