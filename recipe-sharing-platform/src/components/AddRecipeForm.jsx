import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function AddRecipeForm() {
    // Initialize Formik
    const formik = useFormik({
        initialValues: {
            title: '',
            summary: '',
            ingredients: '',
            instructions: '',
            image: ''

        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            summary: Yup.string().required('Summary is required'),
            ingredients: Yup.string().required('Ingredients are required'),
            instructions: Yup.string().required('Instructions are required'),
        }),
        onSubmit: (values) => {
            console.log('Form Submitted:', values);
        }
    })

    const errorMessages = Object.keys(formik.errors).filter((key) => formik.touched[key])
    .map((key) => formik.errors[key]);

  return (
    <div className='max-w-screen-md mx-auto mt-10 mb-10 p-6 bg-white shadow-lg rounded-lg'>
        <form onSubmit={formik.handleSubmit}>
            <input 
            type="text"
            id='title'
            name='title'
            placeholder='Enter Recipe Title'
            onChange={formik.handleChange}
            value={formik.values.title}
            className='w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            
            <input 
            type="text"
            id='summary' 
            name='summary'
            placeholder='Enter Recipe Summary'
            onChange={formik.handleChange}
            value={formik.values.summary}
            className='w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            
            <textarea 
            name="ingredients"
            id="ingredients" 
            placeholder='Enter Recipe Ingredients'
            onChange={formik.handleChange}
            value={formik.values.ingredients}
            rows='4'
            className='w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            

            <textarea 
            name="instructions"
            id="instructions" 
            placeholder='Enter Recipe Detailed'
            onChange={formik.handleChange}
            value={formik.values.instructions}
            rows='6'
            className='w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            
            <div className='text-center'>
                <button type='submit' className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400'>Add Recipe</button>
            </div>
        </form>
        {errorMessages.length > 0 && (
            <div className='mt-6 p-4 border border-red-500 bg-red-50 rounded-lg'>
                <ul className='list-disc list-inside text-red-600'>
                    {errorMessages.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  )
}

export default AddRecipeForm