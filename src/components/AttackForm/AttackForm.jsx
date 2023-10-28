import DirectionForm from '../DirectionForm/DirectionForm'
import { useState } from 'react'

export default function AttackForm({ state, handleSubSetChange }) {
    return(
        <div>
            <h1>AttackForm</h1>
            <label>Name</label>
            <input 
            type="text" 
            name='name' 
            value={state.attacks.name}
            onChange={handleSubSetChange}
            />

            <label>Damage</label>
            <input 
            type="text" 
            name='damage' 
            value={state.attacks.dmg}
            onChange={handleSubSetChange}
            />

            <label>DamageType</label>
            <input 
            type="text" 
            name='damageType' 
            value={state.attacks.dmgType}
            onChange={handleSubSetChange}
            />

            <label>behavior</label>
            <input 
            type="text" 
            name='behavior' 
            value={state.attacks.behavior}
            onChange={handleSubSetChange}
            />
            <DirectionForm state={state} handleSubSetChange={handleSubSetChange} />
        </div>

    )
}