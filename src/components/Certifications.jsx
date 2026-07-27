const certificates=[

"Google Data Analytics",

"IBM RDBMS",

"Cisco Introduction to Cybersecurity",

"Deloitte Cybersecurity Virtual Experience",

"TATA Technology Consulting",

"GDG Solution Challenge"

];

export default function Certifications(){

return(

<section id="certifications">

<div className="container">

<h2 className="title">

Certifications

</h2>

<div className="grid three">

{

certificates.map((cert)=>(

<div className="card" key={cert}>

<h3>{cert}</h3>

</div>

))

}

</div>

</div>

</section>

);

}