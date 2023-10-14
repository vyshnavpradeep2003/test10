import React from 'react';
import JsonData from './data.json';
import './style.css';
function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>
          <td>{info.image}</td>
					<td>{info.firstName}</td>
					<td>{info.lastName}</td>
					<td>{info.gender}</td>
          <td>{info.email}</td>
					<td>{info.username}</td>
					<td>{info.domain}</td>
          <td>{info.ip}</td>
          <td>{info.university}</td>
				</tr>
			)
		}
	)

	return(
		<div>
			<table class="table table-striped" border={1} className='p2'>
				<thead>
					<tr>
					<th>Sr.NO</th>
          <th>Profile pic</th>
					<th>First Name</th>
					<th>Last name</th>
          <th>gender</th>
          <th>email</th>
          <th>username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default JsonDataDisplay;
