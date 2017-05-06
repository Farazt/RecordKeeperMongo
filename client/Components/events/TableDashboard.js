import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import rcl from 'react-chart-all';
import Chart from 'chart.js';
class TableDashboard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			activties : [{
      			date: "13-2-2017",
      			ActivityType: "walk",
      			ActivityLocation: "Waterford",
      			Distance:"2 Miles",
      			Duration: "30 Minutes"
  			}, {
      			date: "1-2-2018",
      			ActivityType: "Run",
      			ActivityLocation: "Dublin",
      			Distance:"1.5 Miles",
      			Duration: "20 Minutes"
  			},{
      			date: "1-2-2018",
      			ActivityType: "Run",
      			ActivityLocation: "Dublin",
      			Distance:"1.5 Miles",
      			Duration: "20 Minutes"
  			},{
      			date: "1-2-2018",
      			ActivityType: "Run",
      			ActivityLocation: "Dublin",
      			Distance:"1.5 Miles",
      			Duration: "20 Minutes"
  			},{
      			date: "1-2-2017",
      			ActivityType: "Run",
      			ActivityLocation: "Dublin",
      			Distance:"1.5 Miles",
      			Duration: "20 Minutes"
  			},{
      			date: "1-2-2016",
      			ActivityType: "Run",
      			ActivityLocation: "Dublin",
      			Distance:"1.5 Miles",
      			Duration: "20 Minutes"
  			},{
      			date: "1-2-2014",
      			ActivityType: "Run",
      			ActivityLocation: "Dublin",
      			Distance:"1.5 Miles",
      			Duration: "20 Minutes"
  			}],
  			chart: { msg: "Activity Type Vs Duration", osX: ['run','walk','gym','sports'], osY: [20,40,60,70,80] }
			
		}
	
	}



render(){
		
     return( 
     	<div>
       <BootstrapTable data={ this.state.activties } striped={true} hover={true} pagination keyBoardNav >
          <TableHeaderColumn dataSort={true} dataField='date' isKey filter={{ type: 'TextFilter', defaultValue: '0' }}>Activity date</TableHeaderColumn>
          <TableHeaderColumn dataField='ActivityType' >Activity Type</TableHeaderColumn>
          <TableHeaderColumn  dataField='ActivityLocation' >Location</TableHeaderColumn>
          <TableHeaderColumn dataField='Distance' >Distance</TableHeaderColumn>
          <TableHeaderColumn dataField='Duration' >Duration</TableHeaderColumn>
      </BootstrapTable>
      	<div className="row">
        <div className="col col-lg-6">
         	<rcl.SimpleChart data={this.state.chart} type={"line"}/>
         </div>
         <div className="col col-lg-6">
         <rcl.SimpleChart data={this.state.chart} type={"pie"}/>
         
       	</div>
       	</div>
      </div>  
      

        
        );
	}

}


export default TableDashboard;