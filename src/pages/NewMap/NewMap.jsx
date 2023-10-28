import MapForm from '../../components/BattleMap/MapForm/MapForm'
import FoeSelect from '../../components/BattleMap/FoeSelect/FoeSelect'
import MapGrid from '../../components/BattleMap/MapGrid/MapGrid'
import { saveMap } from '../../utilities/maps-service'

import { Component } from 'react'

export default class NewMap extends Component {
    state = {
        user: '',
        folder: '',
        name: '',
        foes: '',
        grid: ''
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
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
            <form>
            <MapGrid state={this.state} handleChange={this.handleChange.bind(this)} />
            <MapForm state={this.state} handleChange={this.handleChange.bind(this)}/>
            <FoeSelect state={this.state} handleChange={this.handleChange.bind(this)}/>
            <button>Submit</button>
            </form>
        )
    }
}