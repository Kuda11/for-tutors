import React from "react"
import DashNavBar from "../DashNavBar"
import { financeTableData } from "../../../data/financeData"
import { Grid, Table} from 'semantic-ui-react'

const Payments = () => {

    return (
        <>
        <DashNavBar/>
        <Grid celled='internally'>
            <Grid.Row centered>
                <Grid.Column textAlign='center' width={10}>
                    <h2>Payments</h2>    
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column textAlign='center' width={10}>
                    <Table singleLine>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell>Payment ID</Table.HeaderCell>
                            <Table.HeaderCell>Date payed</Table.HeaderCell>
                            <Table.HeaderCell>Amount</Table.HeaderCell>
                            <Table.HeaderCell>Payment Status</Table.HeaderCell>
                            <Table.HeaderCell>Submit Payments</Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>
                        {financeTableData.map((financeTableData) => {
                            return(
                                <Table.Body>
                                <Table.Row>
                                <Table.Cell>{financeTableData.transactionId}</Table.Cell>
                                <Table.Cell>{financeTableData.paymentDate}</Table.Cell>
                                <Table.Cell>{financeTableData.amount}</Table.Cell>
                                <Table.Cell>{financeTableData.paymentStatus}</Table.Cell>
                                </Table.Row>   
                                </Table.Body>
                        )})};

                    </Table>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </>
    )
}

export default Payments