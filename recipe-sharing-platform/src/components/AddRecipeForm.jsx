import React, { useState } from 'react';

function AddRecipeForm() {
    const [formData, setFormData] = useState({
        title: '',
        summary: '',
        ingredients: '',
        instructions: ''
    });

    const [errors, setErrors] = useState([]);

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors = [];
        if (!formData.title.trim()) newErrors.push('Title is required');
        if (!formData.summary.trim()) newErrors.push('Summary is required');
        if (!formData.ingredients.trim()) newErrors.push('Ingredients are required');
        if (!formData.steps.trim()) newErrors.push('Instructions are required');
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (validationErrors.length > 0) {
            setErrors(validationErrors);
        } else {
            // Submit logic
            console.log('Form Submitted:', formData);
            setErrors([]);
        }
    };

    return (
        <div className="max-w-screen-md mx-auto mt-10 mb-10 p-6 bg-white shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title Field */}
                <div>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter Recipe Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Summary Field */}
                <div>
                    <input
                        type="text"
                        id="summary"
                        name="summary"
                        placeholder="Enter Recipe Summary"
                        value={formData.summary}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Ingredients Field */}
                <div>
                    <textarea
                        id="ingredients"
                        name="ingredients"
                        placeholder="Enter Ingredients (separated by new lines)"
                        rows="4"
                        value={formData.ingredients}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Instructions Field */}
                <div>
                    <textarea
                        id="steps"
                        name="steps"
                        placeholder="Enter Step-by-step Instructions"
                        rows="6"
                        value={formData.instructions}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold"
                    >
                        Add Recipe
                    </button>
                </div>
            </form>

            {/* Error Messages */}
            {errors.length > 0 && (
                <div className="mt-6 p-4 border border-red-500 bg-red-50 rounded-lg">
                    <ul className="list-disc list-inside text-red-600">
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default AddRecipeForm;