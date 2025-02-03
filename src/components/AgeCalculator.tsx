import React, { useState } from 'react';
import { calcAge } from '../utils';

export default function AgeCalculator() {
    const [birthYear, setBirthYear] = useState<number | string>('');  // Rok narození může být číslo nebo prázdný řetězec
    const [age, setAge] = useState<number | null>(null);  // Věk, který bude buď číslo nebo null

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Nastavení hodnoty do state
        setBirthYear(value);

        // Zkontroluj, jestli je hodnota platný rok (číselná hodnota)
        if (value && !isNaN(Number(value))) {
            setAge(calcAge(Number(value)));  // Používám Number(value), abych získal číslo
        } else {
            setAge(null);  // Pokud je hodnota neplatná, neukazuj věk
        }
    };

    return (
        <div>
            <label>
                Zadej rok narození:
                <input
                    type="number"
                    value={birthYear}
                    onChange={handleChange}
                />
            </label>
            {age !== null && <p>Tvůj věk je: {age}</p>}
        </div>
    );
}
