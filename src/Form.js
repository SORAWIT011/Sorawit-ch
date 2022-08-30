import React,{ Component } from 'react'



class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',name:'', age:null, address:''
	,phoneNo:'' ,sheednumrow: '1', select:'1',
	onlike:'ฉันไม่มีสิ่งที่ชอบ',timeDay:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
    
}

handleSubmit(event){
	const { email, name,Lastname, age,weight,birth,high,bike,favcolor, address, phoneNo ,sheednumrow, onlike, select , timeDay} = this.state
	event.preventDefault()
	alert(`
	____ข้อมูล____
	จำนวนเอกสาร : ${sheednumrow}
	ชื่อ : ${name}
    นามสกุล : ${Lastname}
    อีเมล : ${email}
	อายุ : ${age}
	น้ำหนัก : ${weight}
    ส่วนสูง : ${high}
    วันเกิด : ${birth}
    ที่อยู่ : ${address}
	โทรศัพท์ : ${phoneNo}
	เดินทางมาเรียน : ${bike}
    สิ่งที่ไม่อยากให้ใครรู้ : ${select}
	เวลา : ${timeDay}
	`)
}

handleChange(event){
	this.setState({
	[event.target.name] : event.target.value
	})
}

render(){
	return(
        
	<form onSubmit={this.handleSubmit}>
        <div class='textheader'>
            <h2>กรอกข้อมูล</h2>
        </div>
		<input type='hidden' value={this.sheednumrow}></input>
		<div>
		<label htmlFor='name'>ชื่อ : </label>
		<input
            type='text'
			name='name'
			placeholder='กรอกข้อมูล'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='Lastname'>นามสกุล : </label>
		<input
            type='text'
			name='Lastname'
			placeholder='กรอกข้อมูล'
			value={this.state.Lastname}
			onChange={this.handleChange}
		/>
		</div>
        <div>
		<label for="email">อีเมล :</label>
        <input type="email" id="email" name="email"/>
		
		</div>
		<div>
		<label htmlFor='age'>อายุ : </label>
		<input
            type='number'
			name='age'
            placeholder='กรอกข้อมูล'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
        <div>
		<label htmlFor='address'>น้ำหนัก : </label>
		<input
		type='textaera'
			name='address'
			placeholder='กรอกข้อมูล'
			value={this.state.weight}
			onChange={this.handleChange}
		/>
		</div>
        <div>
		<label htmlFor='address'>ส่วนสูง : </label>
		<input
		type='textaera'
			name='address'
			placeholder='กรอกข้อมูล'
			value={this.state.high}
			onChange={this.handleChange}
		/>
		</div>
        <div>
		<label for="birthday">วันเกิด : </label>
         <input type="date" id="birthday" name="birthday"></input>
		</div>
        <div>
		<label htmlFor='address'>ที่อยู่ : </label>
		<input
		type='textaera'
			name='address'
			placeholder='กรอกข้อมูล'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='phoneNo'>เบอร์โทรศัพท์ : </label>
		<input
            type='tel'
			name='phoneNo'
            placeholder='กรอกข้อมูล'
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		</div>
        
    
		
        <div>
        <label for="favcolor">สีที่ชอบ :</label>
        <input type="color" id="favcolor" name="favcolor" />
        </div>
        
        
        <div>
        <label htmlFor='unKnow'>สิ่งที่ไม่อยากให้ใครรู้ : </label>
        <input name='unKnow' type='password' placeholder='สิ่งที่คุณไม่อยากให้รู้' 
        value={this.state.unknow} onChange={this.handleChange}></input>
        <select>
			<option value={this.date}>วันนี้</option>
            <option value={this.date}>เมื่อวาน</option>
		</select>
        </div>
		<div>
        <p><strong></strong> เดินทางมาเรียน :</p>    
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label for="vehicle1"> รถจักรยาน</label><br></br>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
        <label for="vehicle2"> รถยนต์</label><br></br>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        <label for="vehicle3"> เดิน</label><br></br>
        </div>
        
        <div>
			<label>เวลาที่ส่ง : </label>
			<input type='time' placeholder='day' value={this.timeDay}></input>
			
		</div>
		
		
		
		
		<button>Create Account</button>
		
	</form>
	)
}
}

export default Form