

export default function ViewFoe({foe}) {

    return(
            <div>

            <div>{foe.behavior}</div>
            <span>Affiliation: {foe.affiliation}</span>
            <h4>Attack</h4>
            <div>{foe.attacks.name}</div>
            <div>Damage: {foe.attacks.dmg}</div>
            <div>Damage Type: {foe.attacks.dmgType}</div>
            <div>North: {foe.attacks.north}</div>
            <div>South: {foe.attacks.south}</div>
            <div>East: {foe.attacks.east}</div>
            <div>West: {foe.attacks.west}</div>
            <div>Displacement: {foe.attacks.displacement}</div>
            <div>Spread: {foe.attacks.spread}</div>


            </div>
        
    )
}