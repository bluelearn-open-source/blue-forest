import type { NextApiRequest, NextApiResponse } from 'next'
import { Person } from '../../utils/types';
import JSONb from 'json-bigint';


export default async function getOnlinePeople(req, res) {
  const _req = await fetch(
		`https://clinifyforest.herokuapp.com/clinifyforest/api/getlb/500`
		,
	);
	const text = await _req.text();
	let data: Person[] = JSONb.parse(text);
	// console.log(data);
	// converting profile pic id to link
	data = data.map((d)=>{
		// console.log(d.id,d.avatar);
		let t:any = d.id;
		let bi:BigInt  = BigInt(d.id)
		d.id=bi.toString() as unknown as number
		d.avatar= `https://cdn.discordapp.com/avatars/${d.id}/${d.avatar}.png`
		
		return d
	})
  //shuffel the array
  data =data.sort( () => .5 - Math.random() );
  const length= data.length
  data=data.slice(0,9);
    res.status(200).json({ status:"Ok",data,length:length })
  }
  