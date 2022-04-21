import React, { Component } from "react";
import Chart from "react-apexcharts";

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			options: {
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
			},
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
		};
	}

	render() {
		return (
			<div className="app">
				<div className="row">
					<div className="mixed-chart">
						<Chart
							options={this.state.options}
							series={this.state.series}
							type="rangeBar"
							width="700"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;