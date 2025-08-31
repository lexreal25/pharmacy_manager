import React from 'react'
import CustomizedTables from '../../components/Table'
import Button from '../../components/Button';

const Medication = [
  { title: 'Aspirin', dosage: '500mg', frequency: 'Twice a day', sideEffects: 'Nausea, stomach pain',manufucturer:'Bayer' },
  { title: 'Ibuprofen', dosage: '200mg', frequency: 'Every 6 hours', sideEffects: 'Dizziness, rash',manufucturer:'Advil' },
  { title: 'Paracetamol', dosage: '500mg', frequency: 'Every 4-6 hours', sideEffects: 'Liver damage (in high doses)',manufucturer:'Tylenol' },
  { title: 'Amoxicillin', dosage: '250mg', frequency: 'Three times a day', sideEffects: 'Diarrhea, allergic reactions',manufucturer:'Moxatag' },
  { title: 'Metformin', dosage: '500mg', frequency: 'Twice a day', sideEffects: 'Bloating, gas',manufucturer:'Glucophage' },
  { title: 'Metformin', dosage: '500mg', frequency: 'Twice a day', sideEffects: 'Bloating, gas',manufucturer:'Glucophage' },
  { title: 'Metformin', dosage: '500mg', frequency: 'Twice a day', sideEffects: 'Bloating, gas',manufucturer:'Glucophage' },
  { title: 'Metformin', dosage: '500mg', frequency: 'Twice a day', sideEffects: 'Bloating, gas',manufucturer:'Glucophage' },

]
export const Medicine = () => {
  return (
    <div className='container'>
    <Button name="Add Medicine"/>
    <CustomizedTables props={Medication}  />
    </div>
    
  )
}

export default Medicine;
