import MapForm from '../../components/BattleMap/MapForm/MapForm'
import FoeSelect from '../../components/BattleMap/FoeSelect/FoeSelect'
import MapGrid from '../../components/BattleMap/MapGrid/MapGrid'
import { saveMap } from '../../utilities/maps-service'
import './NewMap.css'

import { Component } from 'react'

export default class NewMap extends Component {
    state = {
        user: '',
        folder: '',
        name: '',
        foes: '',
        grid: '',
        selected: {}
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSelect(foe) {
        this.setState({
            selected: foe
        })
    }

    async handleSubmit(evt) {
        evt.preventDefault()

        try {
            const mapData = {...this.state}
            await saveMap(mapData)
        } catch(err) {
            console.error(err)
        }
    }
    
    render() {
        return(
            <>
                <section className='grid-display'>
                <MapGrid state={this.state} handleChange={this.handleChange.bind(this)} selectedFoe={this.state.selected} />
                <FoeSelect 
                state={this.state} 
                handleSelect={this.handleSelect.bind(this)}
                foes={this.props.foes}
                user={this.props.user}
                />
                </section>
                <form>
                <MapForm state={this.state} handleChange={this.handleChange.bind(this)}/>
                <button>Submit</button>
                </form>
            </>
        )
    }
}