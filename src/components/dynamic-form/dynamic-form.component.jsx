import React, { useState } from 'react';
import './dynamic-form.styles.css';

const DynamicForm = () => {
    const [formState, setFormState] = useState({
        triggers: [
            { name: 'aura', isSelected: false },
            { name: 'nausea', isSelected: false },
            { name: 'stress', isSelected: false },
            { name: 'stormy weather', isSelected: false }
        ],
        notes: ''
    });

    const handleTriggerToggle = trigger => {
        const updatedTriggers = formState.triggers.map(trig =>
            trig.name === trigger.name ? { ...trig, isSelected: !trig.isSelected } : trig
        );
        setFormState({ ...formState, triggers: updatedTriggers })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("FORM SUBMITTED");
    }

    return (
        <div className='dynamic-form-container'>
            <form className='dynamic-form' onSubmit={handleSubmit}>
                <p>Select triggers or symptoms</p>
                <div className='triggers'>
                    {formState.triggers.map(trigger => {
                        return <div
                            key={trigger.name}
                            className={'trigger ' + (trigger.isSelected && 'isSelected')}
                            onClick={() => handleTriggerToggle(trigger)}
                        >
                            {trigger.name}
                        </div>
                    })}
                </div>
                <input type='submit' name='' value='Save' />
            </form>
        </div >
    )
}

export default DynamicForm;