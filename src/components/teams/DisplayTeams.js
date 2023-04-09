import './Teams.css'

const DisplayTeams = ({members}) => {
    return (
        <div>
            {
                 members.length==0? <p>Please Add Member</p>:""
            }


            
         {
            members.map((members,i)=>
            <div key={i} className="teamCard">
            <h4>{members}</h4>
        </div>

            )
         }


           
            
            
        </div>
    )
}
export default DisplayTeams