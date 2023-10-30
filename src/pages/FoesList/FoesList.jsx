import Foe from '../../components/Foe/Foe'

export default function FoesList({ foes, user }) {
    console.log(foes)
    return(
        <>
            { foes ?
            foes.map(foe => <Foe foe={foe} user={user} />)
            : <div>Loading...</div>
            }
        
        </>
    )
}