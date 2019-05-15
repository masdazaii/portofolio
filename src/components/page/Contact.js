import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import {
    Button,
    Grid,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
  } from 'semantic-ui-react'

import { Checkbox, Form, Input,Radio, Select, TextArea } from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

class Contact extends React.Component{
    state = {}

    handleChange = (e, { value }) => this.setState({ value })
    render(){
        const { value } = this.state
        return(
            <div className="bungkusContact">
                <Container fluid>  
                    <Header as='h1'>Silahkan berikan pendapat anda mengenai saya</Header>
                    <p>
                        Saran,kritik dan masukan anda akan 
                        sangat membantu saya agar menjadi lebih baik lagi untuk kedepanya, Terima kasih
                    </p>
                </Container>
                <div className="bungkusform">
                    <Form>
                        <Form.Group widths='equal'>
                        <Form.Field control={Input} label='First name' placeholder='First name' />
                        <Form.Field control={Input} label='Last name' placeholder='Last name' />
                        <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' />
                        </Form.Group>
                        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
                        <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
                        <Form.Field control={Button}>Submit</Form.Field>
                    </Form>
                </div>
                <div className="bungkusfooter">
                    <Grid columns={4} doubling>
                        <Grid.Column>
                            <Button icon labelPosition='left'>
                                    <Icon name='instagram' />
                                        Masdazai_
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button icon labelPosition='left'>
                                <Icon name='twitter' />
                                    Masdazai_
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button icon labelPosition='left'>
                                <Icon name='facebook' />
                                    Anggitpp
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button icon labelPosition='left'>
                                <Icon name='github' />
                                    masdazaii
                            </Button>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Contact;