/**
 * The program is the
 * "Mr Coxall Stack"
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2020-10-31
 */

// Import
import SydneyStack from './SydneyStack'
import promptSync from 'prompt-sync'

// Define Constants
const prompt = promptSync()
const stackClass = new SydneyStack()

// Get and Check User Input
while (true) {
  const userInput = Number(prompt('Enter a Number: '))
  if (userInput === -1) {
    break
  } else {
    if (userInput > 0) {
      stackClass.Push(userInput)
    } else {
      console.log('[ NaN ]')
    }
  }
}

// Process
stackClass.StackArray()
console.log(`\n${stackClass.StackArray()}`)

// Pop Number
console.log(`${stackClass.Pop()} was removed from the stack.`)
console.log(`The array after pop method is... ${stackClass.StackArray()}`)

// Output
console.log('\nDone.')
