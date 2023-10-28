import { Component } from 'react'
import AttackForm from '../../components/AttackForm/AttackForm'

export default class NewFoes extends Component {
    state = {
        name: '',
        folder: '',
        affiliation: '',
        behavior: '',
        idx: 0,
        attacks: [{
            name: '',
            dmg: '',
            dmgType: '',
            north: 0,
            south: 0,
            east: 0,
            west: 0,
            displacement: 0,
            spread: 0,
        }]
    }
    
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubSetChange = (evt) => {
        this.setState({
            attacks: [...this.state.attacks[this.state.idx], {[evt.target.name]: evt.target.value}]

        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        
        try{

        } catch(err) {
            console.error(err)
        }
    }

    handleSubSetDirSubmit(evt) {
        evt.preventDefault()
        this.setState({
            attacks: [
                ...this.state.attacks[this.state.idx].direction, 
                {[evt.target.name]: evt.target.value}
            ]
        })
        this.setState({
            idx: this.state.idx++
        })
    }

    render() {


        return(
            <form>
                <label>Name</label>
                <input 
                type='text' 
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
                />

                <label>Folder</label>
                <input 
                type='text' 
                name='folder'
                value={this.state.folder}
                onChange={this.handleChange}
                />

                <label>Affiliation</label>
                <input 
                type='text' 
                name='affiliation'
                value={this.state.affiliation}
                onChange={this.handleChange}
                />

                <label>Behavior</label>
                <input 
                type='text' 
                name='behavior'
                value={this.state.behavior}
                onChange={this.handleChange}
                />

                <AttackForm state={this.state} handleSubSetChange={this.handleSubSetChange.bind(this)} />
                <label>Attacks</label>
                {this.state.attacks.map(attribute => <input type="text" value={this.state.attacks[attribute]} />)}
                <button>Submit</button>
            </form>
        )
    }
}