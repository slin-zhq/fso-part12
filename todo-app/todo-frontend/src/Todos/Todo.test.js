import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

describe('`Todo` component tests', () => {
	// const onClickDelete = (todo) => () => {
	// 	console.log(`Todo: ${todo.text} is to be deleted.`)
	// }

	// const onClickComplete = (todo) => () => {
	// 	console.log(`Todo: ${todo.text} is to be completed.`)
	// }
	let onClickComplete, onClickDelete
	
	beforeEach(() => {
		onClickComplete = jest.fn()
		onClickDelete = jest.fn()
	})

	test('A todo that is not done is rendered correctly', () => {
		const testTodo = {
			text: 'Test',
			done: false
		}

		render(<Todo 
			todo={testTodo}
			onClickComplete={onClickComplete}
			onClickDelete={onClickDelete}
			/>)

		const element = screen.getByText(testTodo.text)
		expect(element).toBeDefined()
	})
})