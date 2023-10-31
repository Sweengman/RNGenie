import FoeSelect from '../../components/BattleMap/FoeSelect/FoeSelect'
import MapForm from '../../components/BattleMap/MapForm/MapForm'
import MapGrid from '../../components/BattleMap/MapGrid/MapGrid'
import gridArray from '../../utilities/grid-init'
import { saveMap } from '../../utilities/maps-service'
import './NewMap.css'
import { Component } from 'react'

export default class NewMap extends Component {
    state = {
        user: this.props.user._id,
        folder: '',
        name: '',
        foes: [],
        attacks: [],
        grid: [gridArray.map(array => array.map(square => {
            return { x: square.x, y: square.y }
        }))],
        selected: {}
    }
    handleGridChange(gridlingObj) {
        this.setState({foes: [...this.state.foes, gridlingObj.foe]})
        this.setState({attacks:[...this.state.attacks, gridlingObj]})
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

    async handleSubmit() {
        try {
            const mapData = { ...this.state }
            await saveMap(mapData)
            this.props.mapsBinder()

            this.setState({
                user: this.props.user._id,
                folder: '',
                name: '',
                foes: '',
                grid: [gridArray.map(array => array.map(square => {
                    return { x: square.x, y: square.y }
                }))],
                selected: {}
            })
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <>
                <section className='grid-display'>
                    <MapGrid
                        state={this.state}
                        handleChange={this.handleChange.bind(this)}
                        selectedFoe={this.state.selected}
                        handleGridChange={this.handleGridChange.bind(this)}
                        handleSubmit={this.handleSubmit.bind(this)}
                    />
                    <FoeSelect
                        state={this.state}
                        handleSelect={this.handleSelect.bind(this)}
                        foes={this.props.foes}
                        user={this.props.user}
                    />
                    <MapForm state={this.state} handleChange={this.handleChange.bind(this)} />
                </section>
                
            </>
        )
    }
}