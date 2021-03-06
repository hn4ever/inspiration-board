import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "coffee", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCard = (props) => {
    const [formFields, setFormFields] = useState({
        text: '',
        emoji: ''
    });

    const onFormChange = (event) => {
        const fieldName = event.target.name;
        const newValue = event.target.value;

        const newFormData = { ...formFields}

        newFormData[fieldName] = newValue;
        setFormFields(newFormData);
    }

    const onSubmit = (event) => {
        event.preventDefault()
        props.onAddCard(formFields)

        setFormFields({
            text: '',
            emoji: ''
        })
    }

    const emojies = EMOJI_LIST.map((symbol,i)=>{
        return <option key={i} value={symbol}>{emoji.getUnicode(symbol)}</option>
    })

    return(
        <div className="new-card-form">
        <h3 className="new-card-form__header">Add Card</h3>
        <form className="new-card-form__form" onSubmit={onSubmit}>
            <label className="new-card-form__form-label" htmlFor="text">Note</label>
            <textarea className="new-card-form__form-textarea"
                onChange={onFormChange}
                name="text"
                value={formFields.text}
            />
            <label className="new-card-form__form-label" htmlFor="emoji">Emoji</label>
            <select className="new-card-form__form-select"
                onChange={onFormChange}
                value={formFields.emoji}
                name="emoji" >
                {emojies}
            </select>
                <input type="submit" value="Add Card" className="new-card-form__form-button" />
        </form>
    </div>
    )
}

export default NewCard