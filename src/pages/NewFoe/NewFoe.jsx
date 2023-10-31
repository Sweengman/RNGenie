import AttackForm from '../../components/AttackForm/AttackForm'
import './NewFoe.css'
import { Component } from 'react'
import { saveFoe, viewFoes } from '../../utilities/foes-service'

export default class NewFoes extends Component {
   
    state = {
        user: this.props.user._id,
        name: '',
        folder: '',
        affiliation: '',
        behavior: '',
        attacks: {
            name: '',
            dmg: 0,
            dmgType: '',
            north: 0,
            south: 0,
            east: 0,
            west: 0,
            displacement: 0,
            spread: 0,
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubSetChange = (evt) => {
        const attacks = {...this.state.attacks}
        attacks[evt.target.name] = evt.target.value
        this.setState({
            attacks
        })
    }

    async handleSubmit(evt) {
        evt.preventDefault()
        
        try{
            const foeData = {...this.state}
            await saveFoe(foeData)
            this.setState({
                name: '',
                folder: '',
                affiliation: '',
                behavior: '',
                attacks: {
                    name: '',
                    dmg: 0,
                    dmgType: '',
                    north: 0,
                    south: 0,
                    east: 0,
                    west: 0,
                    displacement: 0,
                    spread: 0,
        }
        
            })
            this.props.foesBinder()
        } catch(err) {
            console.error(err)
        }
    }

    render() {

        return(
            <form className='NewFoe' onSubmit={this.handleSubmit.bind(this)}>
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

                <button type='submit'>Submit</button>
            </form>
        )
    }
}