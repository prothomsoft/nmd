import React, { Component } from 'react';
import Card from './Card';
import Grid from '@mui/material/Grid';

class HorizontalCarousel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current_card:0
        }
    }

    componentDidMount() {
        this.card_container.children[this.state.current_card + 1].style.opacity = "20%";
    }

    handle_next = () => {
        let new_current_card = this.state.current_card + 1;
        let current_card_clone = this.card_container.children[this.state.current_card].cloneNode(true);
        this.card_container.append(current_card_clone);
        this.setState({current_card: new_current_card}, () => {
            this.card_container.style.transitionDuration = "0.5s";
            this.card_container.style.transform = `translate(-${800 * this.state.current_card}px)`
            this.card_container.children[this.state.current_card-1].style.opacity = "20%";
            this.card_container.children[this.state.current_card].style.opacity = "100%";
            this.card_container.children[this.state.current_card+1].style.opacity = "20%";
        })
    }

    handle_previous = () => {
        if(this.state.current_card > 0) {
            let new_current_card = this.state.current_card - 1;
            this.setState({current_card: new_current_card}, () => {
                this.card_container.style.transitionDuration = "0.5s";
                this.card_container.style.transform = `translate(-${800 * this.state.current_card}px)`
                
                if(this.state.current_card === 0) {
                    this.card_container.children[new_current_card].style.opacity = "100%";
                    this.card_container.children[this.state.current_card+1].style.opacity = "20%";                    
                } else {
                    this.card_container.children[this.state.current_card-1].style.opacity = "20%";
                    this.card_container.children[this.state.current_card].style.opacity = "100%";
                    this.card_container.children[this.state.current_card+1].style.opacity = "20%";
                }
            })
        } else {
            return;
        }
    }
 
    render() {
        return (
            <Grid container>
                <button onClick={this.handle_previous}>Previous</button>
                <button onClick={this.handle_next}>Next</button>
                <div style={styles.view_port}>
                    <div ref={ ref_id => this.card_container = ref_id} className='card-container' style={styles.card_container}>
                        <Card card_number="/m1.jpg" />
                        <Card card_number="/m2.jpg"/>
                        <Card card_number="/m3.jpg"/>
                        <Card card_number="/m4.jpg"/>
                        <Card card_number="/m5.jpg"/>
                    </div>
                </div>
            </Grid>
        );
    }
}

const styles = {
    view_port : {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '500px',
        backgroundColor: 'white'        
    }, 
    card_container : {
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content'
    }
}

export default React.memo(HorizontalCarousel);