import type { NextApiRequest, NextApiResponse } from 'next'
import JSONb from 'json-bigint';
import { Person } from '../../utils/types';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const _req = await fetch(
		`https://clinifyforest.herokuapp.com/clinifyforest/api/getlb/10`
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
  res.status(200).json({ status:"Ok",data })
}