import React, { useEffect, useState } from 'react';
import Table from '../components/table/Table';
import { getCovidHistorical } from '../services/covid.service';
import { CovidData } from '../models/covid.model';
import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts';


const Exercise2Page: React.FC = () => {
    const [data, setData] = useState<CovidData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const options: ApexOptions = {
        chart: {
            height: 600
        },
        xaxis: {
            labels: {
                format: "dd MMM yyyy"
            },
            type: 'datetime'
        }
    };

    const series = [
        {
            name: "Casos",
            data: data.map(item => [new Date(item.date).getTime(), item.cases])
        },
        {
            name: "Tests",
            data: data.map(item => [new Date(item.date).getTime(), item.tests])
        },
        {
            name: "Muertes",
            data: data.map(item => [new Date(item.date).getTime(), item.deaths])
        }
    ];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCovidHistorical();
                setData(data);
            } catch (err) {
                setError('Error fetching COVID data.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <div className="container">
                <main>
                    <div className="py-5 text-center">
                        <h2>Ejercicio 2</h2>
                    </div>
                    <h4 className="mb-3">Resultados:</h4>
                    <Chart options={options} series={series} type='line' />
                    <div className="row g-7">
                        <div className="col-md-10 col-lg-12 order-md-last table-container mb-5">
                            <h5 className="mb-3 mt-3">Tabla</h5>
                            <Table
                                tableHead={[
                                    '#',
                                    'Fecha',
                                    'Casos',
                                    'Muertes',
                                    'Tests'
                                ]}
                                data={data.map(item => [item.date, String(item.cases), String(item.deaths), String(item.tests)])}
                                showImage={false}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Exercise2Page;
