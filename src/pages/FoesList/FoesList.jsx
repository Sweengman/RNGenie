import Foe from '../../components/Foe/Foe'

export default function FoesList({ foes, user }) {
    return(
        <>
            {foes.map(foe => <Foe foe={foe} user={user} />)}
        
        </>
    )
}