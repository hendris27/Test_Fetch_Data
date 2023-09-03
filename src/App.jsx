import React, { useState } from 'react'

const userData = [
	{
		id: 1,
		email: 'alexander@mail.com',
		isMarried: false,
		programmingLanguages: ['Javascript', 'C++', 'Python'],
	},
	{
		id: 2,
		email: 'graham@mail.com',
		isMarried: false,
		programmingLanguages: ['PHP', 'Ruby'],
	},
]

function App() {
	const [searchEmail, setSearchEmail] = useState('')
	const [filteredUsers, setFilteredUsers] = useState(userData)

	const handleSearch = (e) => {
		const { value } = e.target
		setSearchEmail(value)

		// Filter users based on the search query
		const filtered = userData.filter((user) => user.email.toLowerCase().includes(value.toLowerCase()))
		setFilteredUsers(filtered)
	}

	return (
		<div>
			<h1>User Data List</h1>
			<div>
				<label htmlFor="emailSearch">Search by Email:</label>
				<input type="text" id="emailSearch" value={searchEmail} onChange={handleSearch} />
			</div>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Email</th>
						<th>Married</th>
						<th>Programming Languages</th>
					</tr>
				</thead>
				<tbody>
					{filteredUsers.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.email}</td>
							<td>{user.isMarried ? 'Yes' : 'No'}</td>
							<td>
								<ul>
									{user.programmingLanguages.map((lang, index) => (
										<li key={index}>{lang}</li>
									))}
								</ul>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default App
