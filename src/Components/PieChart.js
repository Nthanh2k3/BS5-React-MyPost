import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Chart from "react-apexcharts";

export default function PieChart({ series, labels }) {
    const chartConfig = {
        type: "pie",
        width: 280,
        height: 280,
        series: series,
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            labels: ["Inside", "Sended", "All"],
            title: {
                show: "",
            },
            dataLabels: {
                enabled: false,
                formatter: function (val) {
                    return val + "%";
                },
                dropShadow: {},
            },
            colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
            legend: {
                show: true,
                position: "bottom",
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "Quicksand",
                    fontWeight: 400,
                },
            },
        },
    };
    return (
        <Card>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            >
                <div className="w-max rounded-lg bg-gray-900 p-5 text-white"></div>
                <div>
                    <Typography variant="h6" color="blue-gray">
                        Pie Chart
                    </Typography>
                    <Typography variant="small" color="gray" className="max-w-sm font-normal">
                        Visualize your data in a simple way using the @material-tailwind/react chart
                        plugin.
                    </Typography>
                </div>
            </CardHeader>
            <CardBody className="mt-4 grid place-items-center px-2">
                <Chart {...chartConfig} />
            </CardBody>
        </Card>
    );
}
