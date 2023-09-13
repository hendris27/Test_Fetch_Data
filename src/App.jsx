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
	{
		id: 3,
		email: 'bell@mail.com',
		isMarried: false,
		programmingLanguages: ['Go', 'Javascript', 'Ruby', 'C#'],
	},
	{
		id: 4,
		email: 'thomas@mail.com',
		isMarried: false,
		programmingLanguages: ['C#', 'Rust', 'Typescript'],
	},
	{
		id: 5,
		email: 'alva@mail.com',
		isMarried: false,
		programmingLanguages: ['Rust', 'Python'],
	},
	{
		id: 6,
		email: 'edison@mail.com',
		isMarried: false,
		programmingLanguages: ['Ruby', 'Python', 'Go'],
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
		<div className="flex  w-full justify-center bg-blue-100 min-h-screen">
			<div className="w-full items-center mx-4">
				<div className="mt-12 flex gap-3 h-8">
					<label htmlFor="emailSearch" className=" flex justify-center items-center">
						Search by Email:
					</label>
					<input type="text" id="emailSearch" value={searchEmail} onChange={handleSearch} />
				</div>
				<table className="mt-12 w-full">
					<thead>
						<tr className="bg-blue-400 text-white text-lg">
							<th className="w-16 justify-center">ID</th>
							<th className="w-[200px] border-2 justify-center">Email</th>
							<th className="w-[100px]">Married</th>
							<th className="w-[300px] ">Programming Languages</th>
						</tr>
					</thead>
					<tbody className="w-full">
						{filteredUsers.map((user) => (
							<tr className="" key={user.id}>
								<td className="w-16 text-center items-center border-2">{user.id}</td>
								<td className="w-[200px] border-2 justify-center text-center">{user.email}</td>
								<td className="w-[100px] text-center border-2">{user.isMarried ? 'Yes' : 'No'}</td>
								<td className="text-center border-2">
									<ul className="flex flex-col gap-4">
										{user.programmingLanguages.map((lang, index) => (
											<li key={index}>{lang}</li>
										))}
									</ul>
								</td>
							</tr>
						))}
						{filteredUsers <= 1 && <div>user not found</div>}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default App
