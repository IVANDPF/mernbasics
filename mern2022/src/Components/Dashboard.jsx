import React, { Component } from 'react'
import Chart from "react-apexcharts";

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					data: [
						{
							x: 'Siembra Cacao',
							y: [
								new Date('2022-03-02').getTime(),
								new Date('2022-03-04').getTime()
							]
						},
						{
							x: 'Cosecha Cacao',
							y: [
								new Date('2022-05-04').getTime(),
								new Date('2022-05-08').getTime()
							]
						},
						{
							x: 'Procesamiento y elaboracion',
							y: [
								new Date('2022-07-08').getTime(),
								new Date('2022-07-12').getTime()
							]
						},
						{
							x: 'Venta',
							y: [
								new Date('2022-09-12').getTime(),
								new Date('2022-09-18').getTime()
							]
						}
					]
				}
			],
			chart: {
				height: 350,
				type: 'rangeBar'
			},
			plotOptions: {
				bar: {
					horizontal: true
				}
			},
			xaxis: {
				type: 'datetime'
			}
		}
	}


	render() {
		return (
			<div id="chart">
				<Chart options={this.state.options} series={this.state.series} type="rangeBar" height={350} />
			</div>
		);
	}
}

export default Dashboard

