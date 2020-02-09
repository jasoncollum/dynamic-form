import React, { useState, useEffect } from 'react';
import './dynamic-form.styles.css';

const DynamicForm = () => {
    const [triggers, setTriggers] = useState([
        { name: 'aura', isSelected: false },
        { name: 'nausea', isSelected: false },
        { name: 'stress', isSelected: false },
        { name: 'stormy weather', isSelected: false }
    ]);
    const [newTrigger, setNewTrigger] = useState('');
    const [notes, setNotes] = useState('');

    useEffect(() => {
        setNewTrigger('');
    }, [triggers]);

    const handleTriggerToggle = trigger => {
        const updatedTriggers = triggers.map(trig =>
            trig.name === trigger.name ? { ...trig, isSelected: !trig.isSelected } : trig
        );
        setTriggers(updatedTriggers);
    }

    const handleNewTrigger = () => {
        if (newTrigger) {
            setTriggers([...triggers, { name: newTrigger, isSelected: true }]);
        }
    }

    const handleChange = e => {
        if (e.target.name === 'newTrigger') {
            setNewTrigger(e.target.value);
        }
        if (e.target.name === 'notes') {
            setNotes(e.target.value);
        }
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
                    {triggers.map(trigger => {
                        return <div
                            key={trigger.name}
                            className={'trigger ' + (trigger.isSelected && 'isSelected')}
                            onClick={() => handleTriggerToggle(trigger)}
                        >
                            {trigger.name}
                        </div>
                    })}
                </div>

                <input
                    type='text'
                    className='new-trigger'
                    value={newTrigger}
                    name='newTrigger'
                    placeholder='Enter a new trigger'
                    onChange={handleChange}
                />
                <div
                    className='add-new-trigger'
                    onClick={handleNewTrigger}
                >+</div>

                <textarea
                    className='dynamic-form-textarea'
                    name='notes'
                    value={notes}
                    placeholder='Additional notes...'
                    onChange={handleChange}
                    rows='3'
                >
                </textarea>

                <input type='submit' name='' value='Save' />
            </form>
        </div >
    )
}

export default DynamicForm;