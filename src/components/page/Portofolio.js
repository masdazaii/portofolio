import React from 'react'
import axios from 'axios'
import {
    Card,
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
  } from 'semantic-ui-react'

class Portofolio extends React.Component{
    state = {
        informasi: []
      }
    
      componentDidMount() {
        axios.get(`http://my-json-server.typicode.com/masdazaii/APIp/portofolio`)
          .then(res => {
            const informasi = res.data;
            this.setState({ informasi });
          })
      }
      render() {
        return (
            <div>
                <Grid columns={2} stackable>
                    <Grid.Row columns={3}>
                        { this.state.informasi.map(portofolio =>
                            <Grid.Column>
                                <Card>
                                    <Image src={portofolio.Thumbnail} wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>
                                            {portofolio.Judul}
                                        </Card.Header>
                                        <Card.Description>
                                            {portofolio.deskripsi}
                                        </Card.Description>
                                    </Card.Content>
                                </Card> 
                            </Grid.Column>
                        )}
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Portofolio;