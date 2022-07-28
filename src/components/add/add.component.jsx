import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './add.styles.scss';

import axios from 'axios';

import Error from '../error/error.component';
import { focusElement } from '../../util/util';
import Loading from '../loading/loading.component';

const AddItem = (props) => {
    const [item, setItem] = useState({
        Title: '',
        Year: '',
        Poster: ''
    });
    const [errors, setErrors] = useState([]);
    const errorCallout = useRef();
    const [saveDirty, setSaveDirty] = useState(false);
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {

        let errors = [];

        if (!item.Title) {
            errors.push({ id: 10, message: "Title is required"});
        }

        if (!item.Year) {
            errors.push({ id: 20, message: "Year is required"});
        }

        if (!item.Poster) {
            errors.push({ id: 30, message: "Poster URL is required"});
        }

        if (errors.length > 0) {
            setErrors(errors);
            if (saveDirty === false) 
                focusElement(errorCallout);
        }

        return errors;
    }

    const handleSubmit = event => {
        event.preventDefault();
        setSaveDirty(true);

        const errors = validateForm();
        if (errors.length === 0) {
            setSaving(true);

            const config = {
                headers: {
                    user: localStorage.getItem('uguid')
                }
            };
            axios.post(`${process.env.REACT_APP_FUNCTION_APP}item`, item, config)
                .then(response => {
                    if (response.status === 200) {
                        setErrors([]);
                        setItem({
                            Title: '',
                            Year: '',
                            Poster: ''
                        });
                        
                        navigate("/");
                    } else {
                        const errors = [{ id: 100, message: 'There was an error saving your data' }];
                        setErrors(errors);
                    }
                })
                .catch((error) => {
                    console.error(error);
                    const errors = [{ id: 100, message: 'There was an error saving your data' }];
                    setErrors(errors);
                })
                .finally(() => { setSaving(false)});
        }
    }

    useEffect(() => {
        if (saveDirty === true)
            validateForm();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item]);

    return (
        <div>
            {saving && <Loading />}

            <h1>Add New Movie</h1>
            
            <div ref={errorCallout}>
                <Error errors={errors} />
            </div>

            <form onSubmit={handleSubmit}>
                <div className='ontario-row'>
                    <div className='ontario-columns ontario-large-12'>
                        <div className="ontario-form-group">
                            <label className="ontario-label" htmlFor="Title">
                                Title<span className="ontario-label__flag">(required)</span>
                            </label>
                            <input className="ontario-input" type="text" id="Title" name="Title"
                                onChange={(event) => setItem({...item, [event.target.name]: event.target.value})}
                                value={item.Title} />
                        </div>
                    </div>

                    <div className='ontario-columns ontario-large-12'>
                        <div className="ontario-form-group">
                            <label className="ontario-label" htmlFor="Year">
                                Year(s)<span className="ontario-label__flag">(required)</span>
                            </label>
                            <input className="ontario-input ontario-input--10-char-width" type="text" id="Year" name="Year"
                                onChange={(event) => setItem({...item, [event.target.name]: event.target.value})}
                                value={item.Year} />
                        </div>
                    </div>

                    <div className='ontario-columns ontario-large-12'>
                        <div className="ontario-form-group">
                            <label className="ontario-label" htmlFor="Poster">
                                Poster URL<span className="ontario-label__flag">(required)</span>
                            </label>
                            <input className="ontario-input" type="text" id="Poster" name="Poster"
                                onChange={(event) => setItem({...item, [event.target.name]: event.target.value})}
                                value={item.Poster} />
                        </div>
                    </div>

                    <div className='ontario-columns ontario-large-12'>
                        <button className="ontario-button ontario-button--primary">
                            Add Movie
                        </button>
                    </div>

                    

                </div>

                <div className='ontario-row spacer-row'>
                    <div className='ontario-columns ontario-large-12'>
                        
                    </div>
                </div>
            </form>
        </div>
        
    );
}

export default AddItem;