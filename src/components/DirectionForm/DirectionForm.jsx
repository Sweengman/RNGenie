export default function({ state, handleSubSetChange }) {
    let n = state.attacks[state.idx].north
    let s = state.attacks[state.idx].south
    let e = state.attacks[state.idx].east
    let w = state.attacks[state.idx].west
    let disp = state.attacks[state.idx].displacement
    let spread = state.attacks[state.idx].spread
    return(
        <div>
            <span>input number to indicate attack range. Displacement warps the input in a diag. Spread adds one square range in every direction (including diag)</span>

            <label>North</label>
            <input 
            type='number' 
            value={n} 
            name="north"
            onChange={handleSubSetChange}
            />
            <label>Displacement</label>
            <input type='number' value={disp} onChange={handleSubSetChange}/>


            <label>South</label>
            <input 
            type='number' 
            value={s} 
            name="north"
            onChange={handleSubSetChange}
            />
            <label>Displacement</label>
            <input type='number' value={disp} onChange={handleSubSetChange} />


            <label>East</label>
            <input 
            type='number' 
            value={e}  
            name="north"
            onChange={handleSubSetChange}
            />
            <label>Displacement</label>
            <input type='number' value={disp} onChange={handleSubSetChange} />


            <label>West</label>
            <input 
            type='number' 
            value={w}  
            name="north"
            onChange={handleSubSetChange}
            />
            <label>Displacement</label>
            <input type='number' value={disp} onChange={handleSubSetChange} />


            <label>Spread</label>
            <input type='number'  value={spread} onChange={handleSubSetChange} />
        </div>
    )
}