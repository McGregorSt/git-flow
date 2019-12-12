function Dev (name) {
	this.name = name
  this.type = 'dev'
}
function Tester (name) {
	this.name = name
  this.type = 'tester'
}
function EmpFact () {
	this.create = (name, type) => {
		switch(type) {
      case 1: return new Dev(name) 
      break
      case 2: return new Tester(name)
      break
      default: return type
		}
	}
}

let emp = []

const newEmp = new EmpFact()

emp.push(newEmp.create("gregor", 1))
emp.push(newEmp.create('Bolo', 2))

emp.forEach(emp => {
	console.log(`Hi, I'm ${emp.name} and I'm new ${emp.type}`)
})

function Car(model, YoP, color) {
  this.model = model
  this.YoP = YoP
  this.color = color
}


Car.prototype = {
  go: function(model) {
    return console.log('go' + model)
  },
  stop: function(model) {
    return console.log('stop' + model)
  }
}

const volvo = new Car('v60', 2019, 'blue')


volvo.go()
volvo.stop()

const foo = (function(){
  console.log('booom')
})()

const bar = function() {
  console.log('baaaar')
}

const arr = [1, 3, 4, 9, 3]

const fArr = arr.filter(elm => elm % 3 === 0) 

console.log('arr', fArr)
const arr2 = arr
  .map(elm => elm * 2)
console.log('arr', arr2)


const stringArr = ['where', 'you', 'from']

const [first, ...rest] = stringArr

console.log(first)
console.log(rest)


let battery = navigator.getBattery().then((battery) => {
  console.log(`battery level is ${battery.level * 100}%`)
  console.log(battery)
})

console.log('feature/batteryMgmt')