import React, { useState } from 'react';
import { getGenderize, getNationalize, getAgify } from '../services/name.service';
import NameForm from '../components/NameForm';
import Card from '../components/card/Card';
import NationalityInfo from '../components/table/Table';
import { Age, Gender, Nationality } from '../models/name.model';

const Exercise1Page: React.FC = () => {
    const [genderData, setGenderData] = useState<Gender | null>(null);
    const [nationalityData, setNationalityData] = useState<Nationality | null>(null);
    const [ageData, setAgeData] = useState<Age | null>(null);
    const [selectedName, setSelectedName] = useState<string>('')
    

    const handleNameSubmit = async (name: string) => {
        setSelectedName(name);
        try {
            const [gender, nationality, age] = await Promise.all([
                getGenderize(name),
                getNationalize(name),
                getAgify(name)
            ]);

            setGenderData(gender);
            setNationalityData(nationality);
            setAgeData(age);
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    return (

        <>
            <div className="container">
                <main>
                    <div className="py-5 text-center">
                        <h2>Ejercicio 1</h2>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-5 col-lg-6 order-md-last">
                            <h4 className="mb-3">Resultados: { selectedName }</h4>
                            <div className="flex">
                                {genderData && <Card title='Género' text={`${genderData.probability * 100}%`} />}
                                {ageData && <Card title='Edad' text={`${ageData.age} años`} />}

                            </div>
                            {
                                nationalityData &&
                                <NationalityInfo
                                    tableHead={[
                                        '#',
                                        'Nacionalidad',
                                        'Probabilidad'
                                    ]}
                                    data={nationalityData.country.map(item => [item.country_id, String((item.probability * 100).toFixed(2)) + '%'])}
                                    showImage={true}
                                />
                            }
                        </div>
                        <NameForm onSubmit={handleNameSubmit} />
                    </div>
                </main>
            </div>
        </>
    );
};

export default Exercise1Page;
