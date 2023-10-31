

export default function AttackForm({ state, handleSubSetChange }) {
    return(
        <div>
            <h1>AttackForm</h1>
            <label>Name</label>
            <input 
            type='text' 
            name='name' 
            value={state.attacks.name}
            onChange={handleSubSetChange}
            />

            <label>Damage</label>
            <input 
            type='number' 
            name='dmg' 
            value={state.attacks.dmg}
            onChange={handleSubSetChange}
            />

            <label>DamageType</label>
            <input 
            type='text' 
            name='dmgType' 
            value={state.attacks.dmgType}
            onChange={handleSubSetChange}
            />

            <label>North</label>
            <input 
            type='number' 
            value={state.attacks.north} 
            name='north'
            onChange={handleSubSetChange}
            />


            <label>South</label>
            <input 
            type='number' 
            value={state.attacks.south} 
            name='south'
            onChange={handleSubSetChange}
            />
            


            <label>East</label>
            <input 
            type='number' 
            value={state.attacks.east}  
            name='east'
            onChange={handleSubSetChange}
            />
            


            <label>West</label>
            <input 
            type='number' 
            value={state.attacks.west}  
            name='west'
            onChange={handleSubSetChange}
            />
            
            <label>Displacement</label>
            <input type='number' name='displacement'  value={state.attacks.displacement} onChange={handleSubSetChange} />
        

            <label>Spread</label>
            <input type='number' name='spread'  value={state.attacks.spread} onChange={handleSubSetChange} />
        </div>

    )
}