import AddTeams from './AddTeams'
import DisplayTeams from './DisplayTeams'
const Teams = ({handleSetMembers, members}) => {
    return (
        <div className='teams'>
            <h3> Team Member</h3>
            <DisplayTeams members={members}/>
            <AddTeams handleSetMembers={handleSetMembers} />
        </div>
    )
}
export default Teams