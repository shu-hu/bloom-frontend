import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './NewContactForm.module.css'

function NewContactForm(props) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        department: '',
        first_contact_through: '',
        notes: ''
    })

    const handleChange = (e) => {
        setFormData({ 
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleAddContact(formData)
        setFormData({
            name: '',
            phone: '',
            email: '',
            department: '',
            first_contact_through: '',
            notes: '',
        })
    }

    return (
        <div className={styles.container}>
            <h3>Add a Contact</h3>
            <form
                id="add-contact-form"
                onSubmit={handleSubmit}
                className={styles.form}
            >
            <TextField 
                id="contact-name"
                type="text" 
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
                fullWidth
                required
                variant="outlined" 
            />

            <TextField 
                id="contact-phone"
                type="phone" 
                name="phone"
                label="Phone number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="off"
                fullWidth
                required
                variant="outlined" 
            />

            <TextField 
                id="contact-email"
                type="email" 
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                fullWidth
                required
                variant="outlined" 
            />

            <TextField 
                id="contact-department"
                type="text" 
                name="department"
                label="Department"
                value={formData.department}
                onChange={handleChange}
                autoComplete="off"
                fullWidth
                required
                variant="outlined" 
            />
            
            <TextField 
                id="contact-first-contact-through"
                type="text" 
                name="first_contact_through"
                label="first_contact_through"
                value={formData.first_contact_through}
                onChange={handleChange}
                autoComplete="off"
                fullWidth
                required
                variant="outlined" 
            />
 
            <TextField 
                id="contact-notes"
                type="text" 
                name="notes"
                label="Notes"
                value={formData.notes}
                onChange={handleChange}
                autoComplete="off"
                multiline
                rows={4}
                fullWidth
                required
                variant="outlined" 
            />
                <Button type="submit" variant="contained" color="primary">
                    SUBMIT
                </Button>
            </form>
        </div>
    )
}

export default NewContactForm